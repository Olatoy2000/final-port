import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import recipebannerImg from "@/public/new-banner.png";
import olatoydashboardImg from "@/public/olatoy-dashboard.png";
import investaImg from "@/public/investaImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
  {
    name: "Blog",
    hash: "#blog",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineering Trainee",
    location: "AFEX, Nigeria",
    description:
      "I undergo a 7 months of Software Engineering training(Frontend track). Then i was given the opportunity to intern as a front-end developer. At the end of the training, I collaborated with other team members from deisgners and backend developers to build the ATS (AFEX Tech Star) website",
    icon: React.createElement(LuGraduationCap),
    date: "June, 2022 - Dec, 2022",
  },
  {
    title: " Graduate Intern, Front-End Developer",
    location: "AFEX, Nigeria",
    description:
      "I worked as a graduate intern for another 5 months as a graduate intern in the AFEX where i collaborated with both designers and backend team to build some software applications among which are the HR Portal, Smart Card",
    icon: React.createElement(CgWorkAlt),
    date: "Jan, 2023 - May,2023",
  },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;

export const projectsData = [
  {
    title: "Food-recipe",
    description:
      "this is a food recipe app built with React query to fetch, cache & prefetch the data and APIs from TheMealDB: which is an open, crowd-sourced database of Recipes from around the world.",
    tags: ["React", "Next.js", "ReactQuery", "Tailwind", "mealDB APIs"],
    imageUrl: recipebannerImg,
  },
  {
    title: "Admin Dashboard",
    description:
      "this is a react admin dashboard build with a pure reactjs using scss and installing react with vite",
    tags: ["React", "JavaScript", "scss"],
    imageUrl: olatoydashboardImg,
  },
  {
    title: "Investa",
    description:
      "is a User Interface website App on Investment, with interactive charts and lots more benefit.",
    tags: ["React", "Next.js", "Tailwind", "Framer motion"],
    imageUrl: investaImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Jest",
  "Node.js",
  "Cypress",
  "Github",
  "Bitbucket",
  "MongoDB",
  "Prisma",
  "Netlify",
  "Redux",
  // "PostgreSQL",
] as const;
