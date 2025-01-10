"use client";
import React from "react";
import { useState } from "react";
import { IoLinkSharp } from "react-icons/io5";
const Input = () => {
  const [url, setUrl] = useState<string>("");

  const shortenUrl = async (url : string) => {
    const apiKey = url
    console.log(apiKey)
  };
  return (
    <div
      className="flex flex-col p-6 justify-center items-center
     gap-2 bg-white w-full max-w-[550px] rounded-lg "
    >
      <h1 className="flex text-xl  gap-1 items-center text-sky-400">
        Enter URL{" "}
        <IoLinkSharp className="text-2xl -rotate-45" />
      </h1>
      <input
        type="text"
        className=" backdrop-blur-sm border text-sky-900
         border-black px-8 py-2 w-full rounded-lg"
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
    </div>
  );
};

export default Input;
