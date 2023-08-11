import About from "@/components/about";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Head from "next/head";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/olatoydev.jpg" />
      </Head>
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
      </main>
    </>
  );
}
