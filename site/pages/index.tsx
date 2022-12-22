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
        <Image
          width={500}
          height={500}
          className="m-12 rounded-2xl"
          src="/Chad_contact.png"
          alt=""
        />
      </main>
      <footer className="flex items-center justify-center mb-20">
        Made with 🍻 by &nbsp;
        <a className="underline " href="https://twitter.com/beeejar">
          jiito
        </a>
      </footer>
    </>
  );
}
