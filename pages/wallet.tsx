import Link from "next/link";
import Image from "next/image";

const Wallet = () => {
  return (
    <main className="h-screen flex flex-col bg-gray-100 mb-20" id="wallet">
      <div className="w-full p-6">
        <div className="flex justify-between items-center sm:mx-24">
          <h1 className="text-2xl font-semibold">Crypto and Fiat Wallet</h1>
          <div className="space-x-4 hidden sm:flex">
            <Link href="/deposit/crypto">
              <button className="flex items-center h-8 px-6 rounded-md bg-turquoise-blue text-sm font-medium">
                Deposit
              </button>
            </Link>
            <Link href="/withdraw/crypto">
              <button className="flex items-center h-8 px-3 rounded-sm  border text-sm font-medium">
                Withdraw
              </button>
            </Link>
            <Link href="/transfer/crypto">
              <button className="flex items-center h-8 px-6 rounded-sm border text-sm font-medium">
                Transfer
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="rounded-t-3xl p-6 bg-white h-screen">
        <div className="sm:mx-24 flex flex-col">
          <div className="w-full bg-gray-800 rounded-lg p-12">
            <div className="flex flex-wrap space-y-4 md:space-y-0 sm:space-x-6 md:space-x-12 border-white text-white">
              <div>
                <div>Total Balance</div>
                <div className="text-3xl">
                  241,235.25 <span className="text-lg text-gray-200">ETB</span>
                </div>
              </div>
              <div>
                <div>Fiat Balance</div>
                <div className="text-3xl">
                  103,040.25 <span className="text-lg text-gray-200">ETB</span>
                </div>
              </div>
              <div>
                <div>Crypto Balance</div>
                <div className="text-3xl">
                  2303.25 <span className="text-lg text-gray-200">USDT</span>
                </div>
              </div>
            </div>
            <div className="space-x-4 sm:hidden flex flex-wrap mt-4 text-white">
              <Link href="/deposit/crypto">
                <button className="flex items-center h-8 px-6 rounded-md bg-white text-black text-sm font-medium">
                  Deposit
                </button>
              </Link>
              <Link href="/withdraw/crypto">
                <button className="flex items-center h-8 px-3 rounded-sm border text-sm font-medium">
                  Withdraw
                </button>
              </Link>
            </div>
          </div>
          <section className="mt-20">
            <div className="mb-8">
              <h2 className="text-xl">Coins</h2>
            </div>
            <div className="flex text-sm font-medium">
              <div className="flex w-full bg-gray-100 p-4">
                <div>Coin</div>
              </div>
              <div className="flex w-full justify-end bg-gray-100 p-4">
                <div>Total</div>
              </div>
              <div className="flex w-full justify-end bg-gray-100 p-4">
                <div>Available</div>
              </div>
              <div className="flex w-full justify-end bg-gray-100 p-4">
                <div>In Order</div>
              </div>
            </div>
            <Link href="/wallet/USDT">
              <a className="flex justify-between p-4 mt-4 border-b hover:bg-gray-50 rounded-md">
                <div className="flex w-full items-center">
                  <div className="flex items-center">
                    <Image
                      src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=014"
                      alt="USDT"
                      height={24}
                      width={24}
                    />
                  </div>
                  <div className="ml-2 w-full sm:ml-4 md:flex ">
                    <div className="text-sm md:text-xl font-medium sm:mr-2">
                      USDT
                    </div>
                    <div className="text-xs md:text-xl text-gray-600">
                      TetherUS
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end items-center text-sm md:text-base font-medium">
                  2303.25
                </div>
                <div className="flex w-full justify-end items-center text-sm font-medium md:text-base">
                  1303.25
                </div>
                <div className="flex w-full justify-end items-center text-sm font-medium md:text-base">
                  1000.00
                </div>
              </a>
            </Link>
            <Link href="/wallet/ETB">
              <a className="flex justify-between p-4 mt-4 border-b hover:bg-gray-50 rounded-md">
                <div className="flex w-full items-center">
                  <div className="flex items-center">
                    <Image
                      src="/Birr-Logo.svg"
                      alt="ETB"
                      height={24}
                      width={24}
                    />
                  </div>
                  <div className="ml-2 w-full sm:ml-4 md:flex ">
                    <div className="text-sm md:text-xl font-medium sm:mr-2">
                      ETB
                    </div>
                    <div className="text-xs md:text-xl text-gray-600">
                      Ethiopian Birr
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-end items-center text-sm font-medium md:text-base">
                  103,040.25
                </div>
                <div className="flex w-full justify-end items-center text-sm font-medium md:text-base">
                  90,000.10
                </div>
                <div className="flex w-full justify-end items-center text-sm font-medium md:text-base">
                  13,040.15
                </div>
              </a>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Wallet;
