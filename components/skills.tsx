"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "./hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className=" max-w-[53rem] sm:mb-28 scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            className="bg-white borderBlack rounded-xl px-5 py-3"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
