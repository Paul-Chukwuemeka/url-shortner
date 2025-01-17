"use client";
import { useState } from "react";
import Header from "./components/header";
import Input from "./components/input";
import Main from "./components/main";
import ParticlesComponent from "./components/particleComponents";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        !darkMode
          ? `bg-zinc-200 h-fit min-h-screen flex flex-col p-4 items-center py-2`
          : ` bg-black flex h-fit min-h-screen  text-white flex-col p-4 items-center py-2`
      }
    >
      <ParticlesComponent />
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Input darkMode={darkMode}/>
      <Main />
    </div>
  );
}
