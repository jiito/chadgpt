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
      <main className="flex font-bold text-5xl ">
        Come crack a cold one with ChadGPT 🍻
      </main>
    </>
  );
}
