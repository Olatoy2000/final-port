"use client";
import About from "@/components/about";
import Intro from "@/components/intro";
import Head from "next/head";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import ErrorBoundary from "@/components/errorBoundary";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/olatoydev.jpg" />
      </Head>
      <main className="flex flex-col items-center px-4">
        <ErrorBoundary>
          <Intro />
          <About />
           <Projects />
          <Skills />
          <Experience />
          <Contact />
        </ErrorBoundary>
      </main>
    </>
  );
}
