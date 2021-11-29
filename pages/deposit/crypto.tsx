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

const Crypto: NextPage = () => {
  const [address, setAddress] = useState("TPexFeZBmtx5UuCxpMTwWxdawWwrkSgWwA");
  const [selectedCoin, setSelectedCoin] = useState(Coins[0]);
  const [selectedNetwork, setSelectedNetwork] = useState(Coins[0].networks[0]);
  const [coinModalIsOpen, setCoinModalIsOpen] = useState(false);
  const [networkModalIsOpen, setNetworkModalIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement(
      document.getElementById("cryptoDeposit") as HTMLElement
    );
  }, []);

  return (
    <main
      className="h-screen flex flex-col bg-gray-100"
      id="cryptoDeposit mb-20"
    >
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
              <div
                className="border w-full"
                onClick={() => setCoinModalIsOpen(true)}
              >
                <h2 className="mb-1">Coin</h2>
                <div className="w-full flex items-center justify-between border px-3 h-12 rounded-md hover:border-blue-900">
                  <div className="border flex">
                    <Image
                      src={selectedCoin.icon}
                      width={24}
                      height={24}
                    ></Image>
                    <div className="border ml-2 text-sm flex space-x-2">
                      <h1 className="font-semibold">{selectedCoin.ticker}</h1>
                      <h2 className="text-gray-600">{selectedCoin.name}</h2>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="border w-4"
                  >
                    <path
                      d="M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border flex mt-8">
              <div className="border hidden w-3/12 sm:block">
                <h2>Deposit to</h2>
              </div>
              <div
                className="border w-full"
                onClick={() => setNetworkModalIsOpen(true)}
              >
                <h2 className="mb-1">Network</h2>
                <div className="w-full flex items-center justify-between border px-3 h-12 rounded-md hover:border-blue-900">
                  <div className="border flex text-sm">
                    <div className="border text-sm flex space-x-1">
                      <h1 className="font-semibold">
                        {selectedNetwork.ticker}
                      </h1>
                      <h2 className="text-gray-600">{selectedNetwork.name}</h2>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="border w-4"
                  >
                    <path
                      d="M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="border flex mt-6">
              <div className="border hidden w-3/12 sm:block"></div>
              <div className="border w-full flex justify-center">
                <QRCode value="TPexFeZBmtx5UuCxpMTwWxdawWwrkSgWwA" size={120} />
              </div>
            </div>
            <div className="border flex mt-6">
              <div className="border hidden w-3/12 sm:block"></div>
              <div className="border w-full">
                <h2 className="mb-1 text-sm border">Address</h2>
                <div className="border flex space-x-6 w-full items-center">
                  <h2 className="font-bold w-10/12 sm:font-medium text-break font-mono border">
                    {address}
                  </h2>
                  <div className="w-full border flex items-center">
                    <CopyText text={address}></CopyText>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border w-4/12"></div>
          <div className="hidden lg:block border w-6/12"></div>
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
            <h1 className="text-xl ">Select Coin to Deposit</h1>
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
            <h1 className="text-xl ">Select {selectedCoin.ticker} Network</h1>
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
              Ensure the network you choose to deposit matches the withdrawal
              network, or assets may be lost.
            </h2>
          </div>
          <div className="mt-2 pb-6">
            {selectedCoin.networks.map((network) => (
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
