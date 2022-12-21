import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ChadGPT</title>
      </Head>
      <main className="flex font-bold text-5xl items-center justify-center ">
        (888) 493 - CHAD 🍻
      </main>
    </>
  );
}
