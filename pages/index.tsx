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
      <main className="flex flex-col border sm:px-24 px-12">
        <div className="border w-full mt-20">
          <div>
            <h1 className="text-5xl font-medium">
              Buy {"&"} Sell Crypto with ETB
            </h1>
          </div>
          <div className="mt-6">
            <Link href={user ? "/trade" : "/register"}>
              <a className="block text-center w-48 px-3 py-2 font-medium bg-turquoise-blue rounded-md mt-3">
                {user ? "Buy" : "Register"} Now
              </a>
            </Link>
          </div>
        </div>

        <section className="border mt-20">
          <div className="mb-8">
            <h2 className="text-3xl">Markets</h2>
          </div>
          <div className="flex border justify-between p-4">
            <div className="border flex flex-grow">
              <div className="text-sm font-medium">Name</div>
            </div>
            <div className="border flex flex-grow justify-end">
              <div className="text-sm font-medium">Last Price</div>
            </div>
            <div className="border flex flex-grow justify-end">
              <div className="text-sm font-medium">24h Change</div>
            </div>
          </div>
          <Link href="/trade/USDT_cETB">
            <a className="flex justify-between p-4 hover:bg-gray-200 rounded-sm">
              <div className="flex flex-grow">Tether USD</div>
              <div className="flex flex-grow justify-end">ETB 60.54</div>
              <div className="flex flex-grow justify-end">-1.25%</div>
            </a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
