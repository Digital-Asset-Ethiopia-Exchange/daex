import { useState } from "react";
import { useSession } from "next-auth/react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const Home: NextPage = () => {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>DAEX</title>
        <meta name="description" content="Digital Asset Ethiopia Exchange" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col sm:px-24 px-12 mb-40">
        <div className=" w-full mt-20">
          <div>
            <h1 className="text-5xl font-medium">
              Buy {"&"} Sell Crypto with ETB
            </h1>
          </div>
          <div className="mt-6">
            <Link href={session ? "/trade/USDT_cETB" : "/register"}>
              <a className="block text-center w-48 px-3 py-2 font-medium bg-turquoise-blue rounded-md mt-3">
                {session ? "Buy" : "Register"} Now
              </a>
            </Link>
          </div>
        </div>

        <section className="mt-20">
          <div className="mb-8">
            <h2 className="text-3xl">Markets</h2>
          </div>
          <div className="flex justify-between p-4">
            <div className=" flex flex-grow">
              <div className="text-sm font-medium">Name</div>
            </div>
            <div className=" flex flex-grow sm:justify-center justify-end">
              <div className="text-sm font-medium">Last Price</div>
            </div>
            <div className=" flex flex-grow justify-end">
              <div className="text-sm font-medium">24h Change</div>
            </div>
          </div>
          <Link href="/trade/USDT_cETB">
            <a className="flex justify-between p-4 hover:bg-gray-200 rounded-md">
              <div className="flex flex-1 items-center">
                <div className="w-6 flex items-center sm:w-8">
                  <Image
                    src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=014"
                    alt="USDT"
                    height={32}
                    width={32}
                  ></Image>
                </div>
                <div className="ml-2 sm:ml-4 md:flex ">
                  <div className="text-sm md:text-xl font-medium sm:mr-2">
                    USDT
                  </div>
                  <div className="text-xs md:text-xl text-gray-600">
                    TetherUS
                  </div>
                </div>
              </div>
              <div className="flex justify-end sm:flex-grow-0 items-center text-sm md:text-xl font-semibold">
                ETB 60.54
              </div>
              <div className="flex flex-1 justify-end items-center text-sm font-semibold md:text-xl text-light-red">
                -1.25%
              </div>
            </a>
          </Link>
        </section>
      </main>
    </>
  );
};

export default Home;
