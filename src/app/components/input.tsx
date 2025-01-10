import React from "react";
import { IoLinkSharp } from "react-icons/io5";
const Input = () => {
  return (
    <div className="flex flex-col p-6 justify-center items-center
     gap-2 bg-white w-full max-w-[550px] rounded-lg">
      <h1 className="flex text-xl  gap-1 items-center text-sky-400">
        Enter URL{" "}
        <IoLinkSharp className="text-2xl -rotate-45" />
      </h1>
      <input
        type="text"
        className=" blur-md border border-black px-10 py-2 w-full rounded-lg"
      />
      <button className="bg-sky-500 p-2 rounded-lg w-3/4">
        Shorten
      </button>
    </div>
  );
};

export default Input;
