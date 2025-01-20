"use client";
import React from "react";
import {
  useState,
  useEffect,
} from "react";
import { FaCopy } from "react-icons/fa";
import { IoLinkSharp } from "react-icons/io5";
import { FadeLoader } from "react-spinners";
import {
  ToastContainer,
  toast,
  Bounce,
} from "react-toastify";

interface InputProps {
  darkMode: boolean;
  shortenedUrls: { shortUrl: string; originalUrl: string; dateCreated: string }[];
  setShortenedUrls: React.Dispatch<React.SetStateAction<{ shortUrl: string; originalUrl: string; dateCreated: string }[]>>

}

const Input: React.FC<InputProps> = ({
  shortenedUrls,
  darkMode,
  setShortenedUrls
}) => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] =
    useState<boolean>(false);
  const [textToCopy, setTextToCopy] =
    useState<string>("");
  const [loading, setLoading] =
    useState<boolean>(false);
  const [tinyUrl, setTinyUrl] =
    useState<string>("");

  

  useEffect(() => {
    const storedUrls = localStorage.getItem(
      "shortenedUrls"
    );
    if (storedUrls) {
      setShortenedUrls(JSON.parse(storedUrls));
    }
  }, []);



  useEffect(() => {
    localStorage.setItem(
      "shortenedUrls",
      JSON.stringify(shortenedUrls)
    );
  }, [shortenedUrls]);

  const shortenUrl = async (url: string) => {
    setLoading(true);
    setError(false);
    if (!url) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      const apiKey =
        process.env.NEXT_PUBLIC_TINY_URL;
      const apiUrl =
        "https://api.tinyurl.com/create";

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          url,
        }),
      });
      const data = await response.json();
      setTinyUrl(data.data.tiny_url);
      setTextToCopy(data.data.tiny_url);
      const newShortenedUrl = {
        shortUrl: data.data.tiny_url,
        originalUrl: url,
        dateCreated: new Date().toLocaleDateString(),
      };

      setShortenedUrls([
        ...shortenedUrls,
        newShortenedUrl,
      ]); // Update the state
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };

  const notify = () => toast("Copied");

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    notify();
  };

  return (
    <div
      className="flex text-center relative z-10 flex-col p-6 justify-center items-center
     gap-2  w-full max-w-[550px] max-sm:w-[90vw]  rounded-lg "
    >
      <h1 className="gradient-text p-2 flex text-4xl font-extrabold gap-1 items-center ">
        Shorten Your Loooong Links 
      </h1>
      <p>
        Linkly is an efficient and easy-to-use URL
        shortening service that streamlines your
        online experience.
      </p>
      <div
        className={` flex items-center max-lg:flex-col max-lg:border-none justify-around gap-4 bg-transparent backdrop-blur-sm border text-sky-900 px-2 py-2 w-full rounded-lg ${
          darkMode
            ? `border-white`
            : `border-black`
        }`}
      >
        <p className="rotate-45 text-2xl p-2  max-lg:hidden ">
          <IoLinkSharp />
        </p>
        <input
          type="text"
          placeholder=" Enter your link here"
          value={url}
          className="bg-transparent placeholder:text-sky-500 p-1 px-1 w-[70%] focus:outline-none focus:ring-0 max-lg:w-full max-lg:border-2 max-lg:p-3 max-lg:border-sky-500 max-lg:rounded-lg"
          onInput={(e) =>
            setUrl(
              (e.target as HTMLInputElement).value
            )
          }
          onPaste={(e) =>
            setUrl(
              (e.target as HTMLInputElement).value
            )
          }
        />

        <button
          className="bg-sky-500 text-white h-14 w-40 font-extrabold rounded-full max-lg:w-full max-lg:rounded-xl "
          onClick={() => {
            shortenUrl(url);
          }}
        >
          Shorten Url
        </button>
      </div>

      {tinyUrl && (
        <div className="p-5 bg-sky-200 flex items-center justify-center rounded-lg w-full text-center">
          {loading ? (
            <FadeLoader
              color="#38bdf8"
              height={12}
              width={5}
            />
          ) : (
            <div className="flex items-center gap-2 text-xl ">
              <p className="w-96 max-lg:w-fit">{tinyUrl}</p>
              <button onClick={handleCopy}>
                <FaCopy />
              </button>
            </div>
          )}
        </div>
      )}
      {error && (
        <div className="p-5 bg-red-300 rounded-lg w-full text-center">
          An error occurred while shortening the URL. Please try again.
        </div>
      )}
      <ToastContainer
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        className="absolute z-100 h-fit bottom-0 right-0"
      />
    </div>
  );
};

export default Input;
