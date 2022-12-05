import { Icon } from '@iconify/react';
import { type NextPage } from "next";
import Head from "next/head";
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nate Broughton - Software Developer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <div className="container flex flex-col justify-center gap-4 px-4 py-16 ">
            <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[hsl(280,100%,70%)]">Nate</span> Broughton
            </h1>
            <h2 className="text-purple-200 text-2xl font-bold">Software Developer</h2>
            <div className='text-4xl text-white flex gap-2'>
              <Link href="https://github.com/ACA30" target="_blank">
                <Icon icon="mdi:github" />
              </Link>
              <Link href="https://twitter.com/b4technology" target="_blank">
                <Icon icon="mdi:twitter" />
              </Link>
              <Link href="https://linkedin.com/in/nathaniel-broughton" target="_blank">
                <Icon icon="mdi:linkedin" />
              </Link>
            </div>
        </div>
      </main>
    </>
  );
};

export default Home;
