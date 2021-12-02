import { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import QRCode from "qrcode.react";
import { CopyText } from "../../components/copy-text";

const Coins = [
  {
    id: "1",
    ticker: "USDT",
    name: "TetherUS",
    icon: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=014",
    networks: [
      {
        id: "1",
        name: "Tron (TRC20)",
        ticker: "TRX",
      },
    ],
  },
];

interface Network {
  id: string;
  name: string;
  ticker: string;
}

interface Coin {
  id: string;
  ticker: string;
  name: string;
  icon: string;
  networks: Network[];
}

const Crypto: NextPage = () => {
  const [address, setAddress] = useState<string>("");
  const [amount, setAmount] = useState<number | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [selectedCoin, setSelectedCoin] = useState<Coin | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<Network | null>(null);
  const [coinModalIsOpen, setCoinModalIsOpen] = useState<boolean>(false);
  const [networkModalIsOpen, setNetworkModalIsOpen] = useState<boolean>(false);

  useEffect(() => {
    Modal.setAppElement(
      document.getElementById("cryptoWithdraw") as HTMLElement
    );
  }, []);

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  return (
    <main
      className="h-screen flex flex-col bg-gray-100 mb-20"
      id="cryptoWithdraw"
    >
      <div className="w-full p-6">
        <div className="flex justify-between items-center sm:mx-24">
          <h1 className="text-lg sm:text-2xl font-semibold">Withdraw Crypto</h1>
          <Link href="/withdraw/ETB">
            <button className="flex items-center h-8 px-3 rounded-sm bg-gray-200 text-sm font-mono font-medium">
              Withdraw ETB{" "}
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
        <div className="sm:mx-24 flex h-full">
          <div className="w-full">
            <div className="flex">
              <div className="hidden w-4/12 sm:block">
                <h2>Select Coin</h2>
              </div>
              <div className="w-full" onClick={() => setCoinModalIsOpen(true)}>
                <h2 className="mb-1">Coin</h2>
                <div className="w-full flex items-center justify-between border px-3 h-12 rounded-md hover:border-blue-900">
                  <div className="flex">
                    {selectedCoin ? (
                      <>
                        <Image
                          src={selectedCoin.icon}
                          width={24}
                          height={24}
                        ></Image>
                        <div className="ml-2 text-sm flex space-x-2">
                          <h1 className="font-semibold">
                            {selectedCoin.ticker}
                          </h1>
                          <h2 className="text-gray-600">{selectedCoin.name}</h2>
                        </div>{" "}
                      </>
                    ) : (
                      <h1>Select Coin</h1>
                    )}
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4"
                  >
                    <path
                      d="M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            {selectedCoin && (
              <>
                <div className="flex mt-6">
                  <div className="hidden w-4/12 sm:block">
                    <h1>Withdraw to</h1>
                  </div>
                  <div className="w-full">
                    <h2 className="w-full mb-1">Address</h2>
                    <div className="w-full">
                      <input
                        type="text"
                        name="address"
                        className="w-full px-3 outline-none h-12 rounded-md border text-sm"
                        placeholder="Address"
                        autoComplete="off"
                        onChange={handleAddressChange}
                        value={address}
                      />
                    </div>
                  </div>
                </div>
                {address && (
                  <div className="flex mt-6">
                    <div className="hidden w-4/12 sm:block"></div>
                    <div
                      className="w-full"
                      onClick={() => setNetworkModalIsOpen(true)}
                    >
                      <h2 className="mb-1">Network</h2>
                      <div className="w-full flex items-center justify-between border px-3 h-12 rounded-md hover:border-blue-900">
                        <div className="flex text-sm">
                          <div className="text-sm flex space-x-1">
                            {selectedNetwork ? (
                              <>
                                {" "}
                                <h1 className="font-semibold">
                                  {selectedNetwork.ticker}
                                </h1>
                                <h2 className="text-gray-600">
                                  {selectedNetwork.name}
                                </h2>
                              </>
                            ) : (
                              <h1 className="text-gray-500">Select Network</h1>
                            )}
                          </div>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="none"
                          className="w-4"
                        >
                          <path
                            d="M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                )}

                {selectedNetwork && (
                  <>
                    <div className="flex mt-6 border">
                      <div className="hidden w-4/12 border sm:block">
                        <h1 className="border">Withdraw amount</h1>
                      </div>
                      <div className="w-full border justify-center">
                        <h1 className="border mb-1">Amount</h1>
                        <div>
                          <input
                            type="text"
                            name="address"
                            className="w-full px-3 outline-none h-12 rounded-md border text-sm"
                            placeholder="Minimal 10"
                            autoComplete="off"
                            onChange={handleAmountChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex mt-6">
                      <div className="hidden w-4/12 sm:block"></div>
                      <div className="w-full flex justify-between text-sm">
                        <div className="w-full sm:w-3/4">
                          <h1 className="mb-1">Minimum Withdraw</h1>
                          <h2 className="font-bold sm:font-semibold font-mono">
                            0.00000001 USDT
                          </h2>
                        </div>
                        <div className="w-full">
                          <h1 className="mb-1">Expected arrival</h1>
                          <h2 className="font-bold sm:font-semibold">
                            1 network confirmations
                          </h2>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
          <div className="hidden lg:block w-4/12"></div>
          <div className="hidden lg:block w-6/12"></div>
        </div>
      </div>
      <Modal
        isOpen={coinModalIsOpen}
        onRequestClose={() => setCoinModalIsOpen(false)}
        contentLabel="Coin Modal"
        className="h-screen outline-none flex items-center justify-center"
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          },
        }}
      >
        <div className="rounded-md bg-white w-full sm:w-3/12">
          <div className="px-6 flex h-16 items-center justify-between">
            <h1 className="text-xl ">Select Coin to Withdraw</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 text-gray-400 hover:text-blue-500"
              onClick={() => setCoinModalIsOpen(false)}
            >
              <path
                d="M19.003 6.42l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="px-6">
            <div className="pl-2 flex items-center border rounded-sm h-10 hover:border-blue-900">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 text-gray-400"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 11a6 6 0 10-12 0 6 6 0 0012 0zm-6-8a8 8 0 110 16 8 8 0 010-16z"
                    fill="#76808F"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.586 22L15 16.414 16.414 15 22 20.586 20.586 22z"
                    fill="#76808F"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="search"
                placeholder="Search coin name"
                className="px-3 outline-none text-sm"
              />
            </div>
          </div>
          <div className="mt-2 pb-6">
            {Coins.map((coin) => (
              <div
                key={coin.id}
                className="px-6 h-full hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedCoin(coin);
                  setCoinModalIsOpen(false);
                }}
              >
                <div className="py-4 ">
                  <div className="flex items-center">
                    <div>
                      <Image
                        src={coin.icon}
                        width={32}
                        height={32}
                        alt={coin.ticker}
                      />
                    </div>
                    <div className="text-sm ml-4">
                      <h1 className="font-medium">{coin.ticker}</h1>
                      <h2 className="text-gray-500">{coin.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={networkModalIsOpen}
        onRequestClose={() => setNetworkModalIsOpen(false)}
        contentLabel="Coin Modal"
        className="h-screen outline-none flex items-center justify-center"
        style={{
          overlay: {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.50)",
          },
        }}
      >
        <div className="rounded-md bg-white w-full sm:w-4/12">
          <div className="px-6 flex h-16 items-center justify-between">
            <h1 className="text-xl ">Select {selectedCoin?.ticker} Network</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 text-gray-400 hover:text-blue-500"
              onClick={() => setNetworkModalIsOpen(false)}
            >
              <path
                d="M19.003 6.42l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="px-6 text-sm">
            <h2>
              Ensure the network you choose to withdraw matches the withdraw
              network, or assets may be lost.
            </h2>
          </div>
          <div className="mt-2 pb-6">
            {selectedCoin?.networks.map((network) => (
              <div
                key={network.id}
                className="px-6 h-full hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelectedNetwork(network);
                  setNetworkModalIsOpen(false);
                }}
              >
                <div className="py-4 ">
                  <div className="flex items-center">
                    <div className="text-sm ml-4">
                      <h1 className="font-medium">{network.ticker}</h1>
                      <h2 className="text-gray-500">{network.name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </main>
  );
};

export default Crypto;
