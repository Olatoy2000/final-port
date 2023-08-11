'use client'

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Agriculture</span>, I decided to go with web development, since I understand that it is impossible to succeed in almost any business without some online presence. 
        Hence I know the opportunities are there and will stay there. My interest is in{" "}
        <span className="font-medium">frontend web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Next.js, and Node.js.</span>. I
        am also familiar with Typescript, MongoDB and Prisma. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a frontend
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        tutorial videos, listen to lectures, travelling and reading Arabic
        books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">how to become an SEO specialist</span>.
        I'm also learning how to build fullstack applications in Nextjs.
      </p>
    </motion.section>
  );
};

export default About;
