import { useEffect, useState, Fragment } from "react";
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Modal from "react-modal";
import { Dialog, Transition } from "@headlessui/react";
const PaymentMethods = [
  {
    id: "1",
    ticker: "CBE",
    name: "Commercial Bank of Ethiopia",
    icon: "/Bank-Logos/CBE-Logo.svg",
    reserveAddress: 1000112767642,
    reserveName: "DAEX PLC",
  },
];

interface PaymentMethod {
  id: string;
  ticker: string;
  name: string;
  icon: string;
  reserveAddress: number;
  reserveName: string;
}

const ETB: NextPage = () => {
  const [address, setAddress] = useState<number | null>(null);
  const [amount, setAmount] = useState<number | null>(null);
  const [availableBalance, setAvailableBalance] = useState<number | null>(
    80025.56
  );
  const [fee, setFee] = useState<number | null>(100);
  const [minWithdrawal, setminWithdrawal] = useState<number | null>(600);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(
    null
  );
  const [recipient, setRecipient] = useState<string | null>(null);
  const [paymentModalIsOpen, setPaymentModalIsOpen] = useState<boolean>(false);

  const handleAddressChange = (e: any) => {
    setAddress(e.target.value);
  };

  const handleAmountChange = (e: any) => {
    setAmount(e.target.value);
  };

  const handleRecipientChange = (e: any) => {
    setRecipient(e.target.value);
  };

  useEffect(() => {
    Modal.setAppElement(document.getElementById("ETBWithdraw") as HTMLElement);
  }, []);

  useEffect(() => {
    setTotalAmount((amount as number) - (fee as number));
  }, [amount, fee]);

  return (
    <main className="h-screen flex flex-col bg-gray-100 mb-20" id="ETBWithdraw">
      <div className="w-full p-6">
        <div className="flex justify-between items-center sm:mx-24">
          <h1 className="text-lg sm:text-2xl font-semibold">Withdraw ETB</h1>
          <Link href="/withdraw/crypto" passHref>
            <button className="flex items-center h-8 px-3 rounded-sm bg-gray-200 text-sm font-mono font-medium">
              Withdraw Crypto{" "}
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
                <h2>Select Payment</h2>
              </div>
              <div
                className="w-full"
                onClick={() => setPaymentModalIsOpen(true)}
              >
                <h2 className="mb-1">Payment Method</h2>
                <div className="w-full flex items-center justify-between border px-3 h-12 rounded-md text-sm hover:border-blue-900">
                  <div className="flex">
                    {paymentMethod ? (
                      <>
                        <Image
                          src={paymentMethod.icon}
                          width={24}
                          height={24}
                          alt={paymentMethod.ticker}
                        ></Image>
                        <div className="ml-2 text-sm flex space-x-2">
                          <h1 className="font-semibold">
                            {paymentMethod.ticker}
                          </h1>
                          <h2 className="text-gray-600">
                            {paymentMethod.name}
                          </h2>
                        </div>
                      </>
                    ) : (
                      <h1 className="text-gray-500">Select Payment method</h1>
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
            {paymentMethod && (
              <>
                <div className="flex mt-6">
                  <div className="hidden w-4/12 sm:block">
                    <h1>Withdraw to</h1>
                  </div>
                  <div className="w-full">
                    <h2 className="mb-1">Address</h2>
                    <input
                      type="number"
                      name="address"
                      autoComplete="off"
                      value={address as number}
                      onChange={handleAddressChange}
                      className="w-full px-3 outline-none h-12 focus:border-blue-900 rounded-md border text-sm"
                      placeholder="Beneficiary Deposit Address"
                    />
                  </div>
                </div>
              </>
            )}

            {paymentMethod && address && (
              <div className="flex mt-6">
                <div className="hidden w-4/12 sm:block"></div>
                <div className="w-full">
                  <h2 className="mb-1">Account Owner Name</h2>
                  <input
                    type="text"
                    name="recipient"
                    autoComplete="off"
                    value={recipient as string}
                    onChange={handleRecipientChange}
                    className="w-full px-3 outline-none h-12 focus:border-blue-900 rounded-md border text-sm"
                    placeholder="Beneficiary Full Name"
                  />
                </div>
              </div>
            )}
            {paymentMethod && address && recipient && (
              <>
                <div className="flex mt-6">
                  <div className="hidden w-4/12 sm:block">Withdraw Amount</div>
                  <div className="w-full justify-center">
                    <h1 className="mb-1">Amount</h1>
                    <div className="border flex hover:border-blue-900 focus-within:border-blue-900 rounded-md">
                      <input
                        type="number"
                        name="amount"
                        className="w-full px-3 outline-none h-12 rounded-md text-sm"
                        placeholder="Minimal 10"
                        autoComplete="off"
                        value={amount as number}
                        onChange={handleAmountChange}
                        min={minWithdrawal as number}
                        step="0.01"
                      />
                      <div className="flex text-sm items-center mr-3">
                        <button
                          onClick={() => setAmount(availableBalance)}
                          className="text-blue-900 font-semibold outline-none"
                        >
                          MAX
                        </button>
                        <div className="border mx-3 h-4"></div>
                        <div className="flex items-center">
                          <h3 className="text-gray-500">ETB</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="hidden w-4/12 sm:block"></div>
                  <div className="w-full flex justify-between text-sm">
                    <div className="w-full sm:w-3/4">
                      <h1 className="mb-1">ETB Balance</h1>
                      <h2 className="font-bold sm:font-semibold font-mono">
                        {availableBalance || "0.00"} ETB
                      </h2>
                    </div>
                    <div className="w-full">
                      <h1 className="mb-1">Minimum Withdrawal</h1>
                      <h2 className="font-bold sm:font-semibold font-mono">
                        600 ETB
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6">
                  <div className="hidden w-4/12 sm:block"></div>
                  <div className="w-full flex justify-between text-sm">
                    <div className="w-full sm:w-3/4">
                      <h1 className="mb-1">Withdrawal Fee</h1>
                      <h2 className="font-bold sm:font-semibold font-mono">
                        {fee || "0.00"} ETB
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            )}
            {paymentMethod && address && recipient && amount && (
              <div className="flex mt-6">
                <div className="hidden sm:flex items-center w-4/12">
                  <h1>Total Amount</h1>
                </div>
                <div className="w-full sm:flex justify-between space-x-18 items-center">
                  <h1 className="font-bold text-3xl w-full">
                    {totalAmount} ETB
                  </h1>
                  <button
                    type="submit"
                    className="w-full h-12 mt-3 sm:mt-0 rounded-md bg-turquoise-blue font-semibold"
                  >
                    Withdraw
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="hidden lg:block w-4/12"></div>
          <div className="hidden lg:block w-6/12"></div>
        </div>
      </div>
      <Transition appear show={paymentModalIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {}}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
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
                </Dialog.Title>
                <div className="rounded-md bg-white w-full">
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
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default ETB;
