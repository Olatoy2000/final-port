"use client";
import React, { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";
import ThemeContextProvider, { useTheme } from "@/context/theme-context";


const ThemeSwitch = () => {

const { theme, toggleTheme } = useTheme()
  //   you can use useEffect when you need to synchronize with external system
  return (
    <button
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 
      backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center
       hover:scale-1.50 actie:scale-105 transition-all dark:bg-gray-950"
      onClick={toggleTheme}
    >
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
};

export default ThemeSwitch;
