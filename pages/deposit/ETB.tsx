import { NextPage } from "next";
import Link from "next/link";

const CoinList = [
  {
    id: "1",
    ticker: "USDT",
    name: "Tether-US",
    icon: "/USDT-Logo.svg",
  },
];

const ETB: NextPage = () => {
  return (
    <main className="h-screen flex flex-col bg-gray-100">
      <div className="w-full p-6">
        <div className="flex justify-between items-center sm:mx-24">
          <h1 className="text-lg sm:text-2xl font-semibold">Deposit Crypto</h1>
          <Link href="/deposit/ETB">
            <button className="flex items-center h-8 px-3 rounded-sm bg-gray-200 text-sm font-mono font-medium">
              Deposit ETB{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 ml-2"
              >
                <path
                  d="M13.5 19l-1.4-1.4 5.1-5.1H3v-2h14.2l-5.1-5.1L13.5 4l7.5 7.5-7.5 7.5z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
      <div className="rounded-t-3xl p-6 bg-white h-screen">
        <div className="sm:mx-24 flex border h-full">
          <div className="border w-full">
            <div className="border flex">
              <div className="border hidden w-3/12 sm:block">
                <h2>Select Coin</h2>
              </div>
              <div className="border w-full">
                <h2 className="mb-1">Coin</h2>
                <select
                  name="coin"
                  id="coin"
                  className="w-full border px-3 h-12"
                >
                  <option value="usdt">USDT</option>
                </select>
              </div>
            </div>
            <div className="border flex mt-8">
              <div className="border hidden w-3/12 sm:block">
                <h2>Select Network</h2>
              </div>
              <div className="border w-full">
                <h2 className="mb-1">Network</h2>
                <select
                  name="coin"
                  id="coin"
                  className="w-full border px-3 h-12"
                >
                  <option value="usdt">Select Network</option>
                </select>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border w-3/12"></div>
          <div className="hidden lg:block border w-6/12"></div>
        </div>
      </div>
    </main>
  );
};

export default ETB;
