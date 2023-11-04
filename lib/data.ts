import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import recipebannerImg from "@/public/olatoy-recipe.png";
import olatoydashboardImg from "@/public/olatoy-dashboard.png";
import adviceImg from "@/public/advice-generator.png";
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
  /*  {
    name: "Blog",
    hash: "#blog",
  }, */
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
      "I was given another opportunity to work for another 5 months as a graduate intern in AFEX where i collaborated with both designers and backend team to build some software applications among which are the HR Portal, Smart Card",
    icon: React.createElement(CgWorkAlt),
    date: "Jan, 2023 - May,2023",
  },
] as const;

export const projectsData = [
  {
    title: "Advice-generator",
    description:
      "an Advice Generator App built using Next.js and Tailwind CSS with seamless API integration.",
    tags: ["React", "Next.js", "Tailwind", "CSS glow generator"],
    demo: "https://olatoyadvicegenerator.netlify.app/",
    code: "https://github.com/Olatoy2000/advice-generator",
    imageUrl: adviceImg,
  },
  {
    title: "Food-recipe",
    description:
      "Food recipe app built with React, used React query for data fetching, APIs from TheMealDB(an open, crowd-sourced database of Recipes from around the world)",
    tags: ["React", "Next.js", "ReactQuery", "Tailwind", "mealDB APIs"],
    demo: "https://olatoy-foodrecipe.netlify.app",
    code: "https://github.com/Olatoy2000/food-recipe",
    imageUrl: recipebannerImg,
  },
  {
    title: "Admin Dashboard",
    description:
      "this is a react admin dashboard build with a pure reactjs using scss and installing react with vite",
    tags: ["React", "JavaScript", "scss"],
    demo: "https://olatoy-admindashboard.netlify.app",
    code: "https://github.com/Olatoy2000/dashboard-react",
    imageUrl: olatoydashboardImg,
  },
  // {
  //   title: "Investa",
  //   description:
  //     "is a User Interface website App on Investment, with interactive charts and lots more benefit.",
  //   tags: ["React", "Next.js", "Tailwind", "Framer motion"],
  //   demo: "https://investa-two.vercel.app/",
  //   code: "https://github.com/Olatoy2000/investa",
  //   imageUrl: investaImg,
  // },
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
  /* "Cypress", */
  "Github",
  "Bitbucket",
  "MongoDB",
  /*  "Prisma", */
  "Netlify",
  "Redux",
  // "PostgreSQL",
] as const;
