import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import wordanalyticsImg from "@/public/wordanalytics.png";
import recipebannerImg from "@/public/new-banner.png";
import olatoydashboardImg from "@/public/olatoy-dashboard.png"


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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
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
    imageUrl: olatoydashboardImg,
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
  "Node.js",
  "Cypress",
  "Jest",
  "Github",
  "Bitbucket",
  "MongoDB",
  "Prisma",
  "Netlify",
  "Redux",
  "PostgreSQL",
] as const;
