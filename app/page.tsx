import Intro from "@/components/intro";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/olatoydev.jpg" />
      </Head>
      <main className="flex flex-col items-center px-4">
        <Intro />
      </main>
    </>
  );
}
