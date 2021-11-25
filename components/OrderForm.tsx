import { useState } from "react";

const OrderForm: React.FC = () => {
  const [buyerActive, setBuyerActive] = useState<Boolean>(true);

  return (
    <>
      {buyerActive ? (
        <div className="pt-6 px-4 h-full">
          <div>
            <div className="h-10 flex">
              <button
                onClick={() => setBuyerActive(true)}
                className="rounded-md flex-auto bg-light-green text-white font-bold"
              >
                BUY
              </button>
              <button
                onClick={() => setBuyerActive(false)}
                className="rounded-md flex-auto bg-gray-200 border-gray-500 text-gray-400 font-bold"
              >
                SELL
              </button>
            </div>
            <div className="mt-5">
              <div className="font-bold mb-2">
                <h1>Limit Order</h1>
              </div>
              <div>
                <h2 className="text-xs">
                  Available <span className="font-bold">0.00000000 ETB</span>
                </h2>
              </div>
            </div>
            <div className="mt-4">
              <form autoComplete="off">
                <div className="rounded-md flex items-center justify-center h-12 bg-white px-2">
                  <div className="flex items-center h-full text-sm font-bold text-gray-500">
                    <label htmlFor="FormRow-Buy-Price">Price</label>
                  </div>
                  <input
                    type="number"
                    name="price"
                    id="FormRow-Buy-price"
                    step="0.01"
                    min="0"
                    autoComplete="off"
                    className="text-right outline-none h-full w-full font-bold sm:font-semibold font-mono"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Buy-price">ETB</label>
                  </div>
                </div>
                <div className="rounded-md flex items-center justify-center h-12 bg-white px-2 mt-4">
                  <div className="flex items-center h-full text-sm font-bold text-gray-500">
                    <label htmlFor="FormRow-Buy-Amount">Amount</label>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="FormRow-Buy-Amount"
                    step="0.01"
                    min="0"
                    autoComplete="off"
                    className="text-right outline-none h-full w-full font-bold sm:font-semibold font-mono"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Buy-Amount">USDT</label>
                  </div>
                </div>
                <div className="mt-5 text-gray-400 flex text-center px-2 space-x-3 text-xs">
                  <span
                    onClick={() => {}}
                    className="btn-25p border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer"
                  >
                    25%
                  </span>
                  <span
                    onClick={() => {}}
                    className="btn-50p border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer"
                  >
                    50%
                  </span>
                  <span
                    onClick={() => {}}
                    className="btn-75 border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer"
                  >
                    75%
                  </span>
                  <span
                    onClick={() => {}}
                    className="btn-100p border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer"
                  >
                    100%
                  </span>
                </div>
                <div className="rounded-md flex items-center justify-center h-12 bg-white px-2 mt-4">
                  <div className="flex items-center h-full text-sm font-bold text-gray-500">
                    <label htmlFor="FormRow-Buy-Total">Total</label>
                  </div>
                  <input
                    type="number"
                    name="total"
                    id="FormRow-Buy-Total"
                    step="0.01"
                    min="0"
                    autoComplete="off"
                    className="text-right outline-none h-full w-full font-bold sm:font-semibold font-mono"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Buy-Total">ETB</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="border mt-4 text-white">
              <button className="w-full h-8 bg-light-green font-semibold rounded-sm">
                BUY USDT
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="pt-6 px-4 h-full">
          <div>
            <div className="h-10 flex">
              <button
                onClick={() => setBuyerActive(true)}
                className="rounded-md flex-auto bg-gray-200 border-gray-500 text-gray-400 font-bold"
              >
                BUY
              </button>
              <button
                onClick={() => setBuyerActive(false)}
                className="rounded-md flex-auto bg-light-red font-bold text-white"
              >
                SELL
              </button>
            </div>
            <div className="mt-5">
              <div className="font-bold mb-2">
                <h1>Limit Order</h1>
              </div>
              <div>
                <h2 className="text-xs">
                  Available <span className="font-bold">0.00000000 USDT</span>
                </h2>
              </div>
            </div>
            <div className="mt-4">
              <form autoComplete="off">
                <div className="rounded-md flex items-center justify-center h-12 bg-white px-2">
                  <div className="flex items-center h-full text-sm font-bold text-gray-500">
                    <label htmlFor="FormRow-Sell-Price">Price</label>
                  </div>
                  <input
                    type="number"
                    name="price"
                    id="FormRow-Sell-price"
                    step="0.01"
                    min="0"
                    autoComplete="off"
                    className="text-right outline-none h-full w-full font-bold sm:font-semibold font-mono"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Sell-price">ETB</label>
                  </div>
                </div>
                <div className="rounded-md flex items-center justify-center h-12 bg-white px-2 mt-4">
                  <div className="flex items-center h-full text-sm font-bold text-gray-500">
                    <label htmlFor="FormRow-Sell-Amount">Amount</label>
                  </div>
                  <input
                    type="number"
                    name="amount"
                    id="FormRow-Sell-Amount"
                    step="0.01"
                    min="0"
                    autoComplete="off"
                    className="text-right outline-none h-full w-full font-mono font-bold sm:font-semibold"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Sell-Amount">USDT</label>
                  </div>
                </div>
                <div className="mt-5 text-gray-400 flex text-center px-2 space-x-3 text-xs">
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">
                    25%
                  </a>
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">
                    50%
                  </a>
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">
                    75%
                  </a>
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">
                    100%
                  </a>
                </div>
                <div className="rounded-md flex items-center justify-center h-12 bg-white px-2 mt-4">
                  <div className="flex items-center h-full text-sm font-bold text-gray-500">
                    <label htmlFor="FormRow-Sell-Total">Total</label>
                  </div>
                  <input
                    type="number"
                    name="total"
                    id="FormRow-Sell-Total"
                    step="0.01"
                    min="0"
                    autoComplete="off"
                    className="text-right outline-none h-full w-full font-bold sm:font-semibold font-mono"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Sell-Total">ETB</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="border mt-4 text-white">
              <button className="w-full h-8 bg-light-red font-semibold rounded-sm">
                SELL USDT
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderForm;
