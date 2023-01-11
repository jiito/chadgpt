import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>ChadGPT</title>
        <meta property="og:title" content="ChadGPT: Your AI Frat Bro" />
        <meta
          property="og:description"
          content="Crack a cold one with your newest bud."
        />
        <meta property="og:image" content="/Chad_contact.PNG" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ChadGPT: Your AI Frat Bro 🍻" />
        <meta
          name="twitter:description"
          content="Crack a cold one with your newest bud."
        />
        <meta name="twitter:site" content="@beeejar" />
        <meta
          name="twitter:image"
          content="https://www.chadgpt.app/_next/image?url=/Chad_contact.PNG&w=384&q=75"
        />
        <meta name="twitter:creator" content="@beeejar" />
      </Head>
      <main className="flex m-auto flex-col font-bold text-3xl items-center ">
        <h1 className="mt-20 mb-10">
          TEXT <span className="blue">&quot;WHAT&apos;S UP?&quot;</span> TO{" "}
        </h1>
        <h1> +1 (888) 493-CHAD</h1>
        <h3 className="text-lg text-gray-500"> +1 (888) 493-2423</h3>
        <Image
          width={300}
          height={300}
          className="m-12 rounded-2xl"
          src="/Chad_contact.PNG"
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
