"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "./hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className=" scroll-mt-[100rem] mb:28  sm:mb-40 max-w-[50rem] text-center"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              alt="Olatoy dev"
              src="/olatoydev.jpg"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="text-4xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 h1x-4 font-medium !leading-[1.5] text-2xl sm:text-4xl dark:text-white/60"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Toyyib</span>, a{" "}
        <span className="">Frontend Developer</span> with
        <br /> <span className="">1 - 2 years </span> of experience. I enjoy
        building <span className="italic">websites & apps</span>. My focus is{" "}
        <span className="font-bold italic">React (Next.js)</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
        className="flex flex-col sm:flex-row justify-center px-4 font-medium text-lg items-center gap-3"
      >
        <Link
          href="#contact"
          className="bg-gray-900 group text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 cursor-pointer hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          {" "}
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/oladejo-toyyib-cv.pdf"
          download={true}
          className=" group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          Download CV <HiDownload />
        </a>
        <a
          href="https://www.linkedin.com/in/toyyib-oladejo-8161bb203"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  outline-none focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Olatoy2000"
          target="_blank"
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full  outline-none focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
