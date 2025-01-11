"use client";
import React from "react";
import { useState } from "react";
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
}

const Input: React.FC<InputProps> = ({
  darkMode,
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

  const shortenUrl = async (url: string) => {
    setLoading(true);
    setError(false);
    if (!url) {
      setError(true);
      setLoading(false);
      return;
    }
    try {
      const apiKey = process.env.NEXT_TINY_URL;
      console.log(apiKey);
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
      className="flex relative z-10 flex-col p-6 justify-center items-center
     gap-2  w-full max-w-[550px] rounded-lg "
    >
      <h1 className="flex text-xl  gap-1 items-center text-sky-400">
        Enter URL{" "}
        <IoLinkSharp className="text-2xl -rotate-45" />
      </h1>
      <input
        type="text"
        className={` bg-transparent backdrop-blur-sm border text-sky-900 px-8 py-2 w-full rounded-lg ${
          darkMode
            ? `border-white`
            : `border-black`
        }`}
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
        className="bg-sky-500 text-white p-2 font-extrabold rounded-lg w-3/4"
        onClick={() => {
          shortenUrl(url);
        }}
      >
        Shorten Url
      </button>

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
              <p className="w-96">{tinyUrl}</p>
              <button onClick={handleCopy}>
                <FaCopy />
              </button>
            </div>
          )}
        </div>
      )}
      {error && (
        <div className="p-5 bg-red-300 rounded-lg w-full text-center">
          An error occurred. Please try again.
        </div>
      )}
      <ToastContainer
        position="bottom-left"
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
      />
    </div>
  );
};

export default Input;
