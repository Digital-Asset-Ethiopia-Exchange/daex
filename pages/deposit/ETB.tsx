import { useEffect, useState } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import QRCode from "qrcode.react";
import { CopyText } from "../../components/copy-text";

const PaymentMethods = [
  {
    id: "1",
    ticker: "CBE",
    name: "Commercial Bank of Ethiopia",
    icon: "https://raw.githubusercontent.com/Chapa-Et/ethiopianlogos/main/logos/commercial_bank_of_ethiopia/commercial_bank_of_ethiopia.svg",
  },
];

const ETB: NextPage = () => {
  const [address, setAddress] = useState("TPexFeZBmtx5UuCxpMTwWxdawWwrkSgWwA");
  const [paymentMethod, setPaymentMethod] = useState(PaymentMethods[0]);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement(document.getElementById("ETBDeposit") as HTMLElement);
  }, []);

  return (
    <main className="h-screen flex flex-col bg-gray-100 mb-20" id="ETBDeposit">
      <div className="w-full p-6">
        <div className="flex justify-between items-center sm:mx-24">
          <h1 className="text-lg sm:text-2xl font-semibold">Deposit ETB</h1>
          <Link href="/deposit/ETB">
            <button className="flex items-center h-8 px-3 rounded-sm bg-gray-200 text-sm font-mono font-medium">
              Deposit Crypto{" "}
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
                <h2>Select Payment</h2>
              </div>
              <div
                className="border w-full"
                onClick={() => setPaymentModalIsOpen(true)}
              >
                <h2 className="mb-1">Payment Method</h2>
                <div className="w-full flex items-center justify-between border px-3 h-12 rounded-md hover:border-blue-900">
                  <div className="border flex">
                    <Image
                      src={paymentMethod.icon}
                      width={24}
                      height={24}
                    ></Image>
                    <div className="border ml-2 text-sm flex space-x-2">
                      <h1 className="font-semibold">{paymentMethod.ticker}</h1>
                      <h2 className="text-gray-600">{paymentMethod.name}</h2>
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
                <QRCode value={address} className="" size={120} />
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
            <div className="border flex mt-6">
              <div className="border hidden w-3/12 sm:block"></div>
              <div className="border w-full flex justify-between text-sm">
                <div className="w-full sm:w-3/4 border">
                  <h1 className="mb-1">Minimum Deposit</h1>
                  <h2 className="font-bold sm:font-semibold font-mono">
                    0.00000001 USDT
                  </h2>
                </div>
                <div className="w-full border">
                  <h1 className="mb-1">Expected arrival</h1>
                  <h2 className="font-bold sm:font-semibold">
                    1 network confirmations
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block border w-4/12"></div>
          <div className="hidden lg:block border w-6/12"></div>
        </div>
      </div>
      <Modal
        isOpen={paymentModalIsOpen}
        onRequestClose={() => setPaymentModalIsOpen(false)}
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
            <h1 className="text-xl ">Select ETB Payment Method</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              className="w-6 text-gray-400 hover:text-blue-500"
              onClick={() => setPaymentModalIsOpen(false)}
            >
              <path
                d="M19.003 6.42l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59 5.59-5.59z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div className="mt-2 pb-6">
            {PaymentMethods.map((coin) => (
              <div
                key={coin.id}
                className="px-6 h-full hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setPaymentMethod(coin);
                  setPaymentModalIsOpen(false);
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
    </main>
  );
};

export default ETB;
