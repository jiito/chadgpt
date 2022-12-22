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
      <main className="flex m-auto flex-col font-bold text-5xl items-center ">
        <h1 className="mt-20 mb-10">
          TEXT <span className="blue">&quot;WHAT&apos;S UP?&quot;</span> TO{" "}
        </h1>
        <h1> +1 (888) 493-CHAD</h1>
        <img className="m-12 rounded-2xl" src="/Chad_contact.png" alt="" />
      </main>
      <footer className="flex max-w-4xl items-center justify-center ">
        Made with 🍻 by &nbsp;
        <a
          style={{ "text-decoration": "underline" }}
          href="https://twitter.com/beeejar"
        >
          jiito
        </a>
      </footer>
    </>
  );
}
