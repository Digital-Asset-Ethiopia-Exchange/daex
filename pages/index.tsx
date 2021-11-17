import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <Head>
        <title>DAEX</title>
        <meta name="description" content="Digital Asset Ethiopia Exchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex">
        <div className="w-full mx-24 sm:mx-8 mt-20 lg:px-6">
          <div>
            <h1 className="text-5xl font-medium">
              Buy {"&"} Sell Crypto with ETB
            </h1>
          </div>
          <div className="mt-6">
            <Link href={user ? '/trade' : '/register'}>
              <a className="block text-center w-48 px-3 py-2 font-medium bg-turquoise-blue rounded-md mt-3">
                {user ? 'Buy' : 'Register'} Now
              </a>
            </Link>
          </div>
        </div>

        <section className="">

        </section>
      </main>
    </>
  );
};

export default Home;
