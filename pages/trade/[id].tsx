import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const buyOrders = [
  {
    id: "1",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "2",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "3",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "4",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "5",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "6",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "7",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "8",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "9",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
  {
    id: "10",
    price: 64.5,
    amount: 1534.2,
    total: 100336.68,
  },
];

const Trade = () => {
  const [buyerActive, setBuyerActive] = useState<Boolean>(true);
  const [quarterOrderActive, setQuarterOrderActive] = useState<Boolean>(false);
  const [halfOrderActive, setHalfOrderActive] = useState<Boolean>(false);
  const [threeQuarterOrderActive, setThreeQuarterOrderActive] = useState(false);
  const [wholeOrderActive, setWholeOrderActive] = useState<Boolean>(false);

  const handleQuarterOrder = () => {
    setQuarterOrderActive(!quarterOrderActive);
    setHalfOrderActive(false);
    setThreeQuarterOrderActive(false);
    setWholeOrderActive(false);
  };

  const handleHalfOrder = () => {
    setQuarterOrderActive(false);
    setHalfOrderActive(!halfOrderActive);
    setThreeQuarterOrderActive(false);
    setWholeOrderActive(false);
  };

  const handleThreeQuarterOrder = () => {
    setQuarterOrderActive(false);
    setHalfOrderActive(false);
    setThreeQuarterOrderActive(!threeQuarterOrderActive);
    setWholeOrderActive(false);
  };

  const handleWholeOrder = () => {
    setQuarterOrderActive(false);
    setHalfOrderActive(false);
    setThreeQuarterOrderActive(false);
    setWholeOrderActive(!wholeOrderActive);
  };

  const layouts = {
    lg: [
      { i: "limit-order", x: 0, y: 0, w: 2, h: 18, static: true },
      { i: "order-book", x: 2, y: 0, w: 2, h: 15 },
      { i: "market-summary", x: 4, y: 0, w: 6, h: 2 },
      { i: "chart", x: 4, y: 0, w: 6, h: 13 },
      { i: "asset-summary", x: 0, y: 0, w: 2, h: 6 },
      { i: "trade-history", x: 2, y: 0, w: 2, h: 9 },
      { i: "order-history", x: 4, y: 0, w: 6, h: 9 },
    ],
    sm: [
      { i: "trade-history", x: 0, y: 50, w: 2, h: 9, static: true },
      { i: "order-history", x: 0, y: 41, w: 6, h: 9, static: true },
      { i: "asset-summary", x: 0, y: 0, w: 0, h: 0, static: true },
      { i: "order-book", x: 0, y: 26, w: 2, h: 15, static: true },
      { i: "chart", x: 0, y: 17, w: 6, h: 9, static: true },
      { i: "limit-order", x: 0, y: 5, w: 2, h: 12, static: true },
      { i: "market-summary", x: 0, y: 0, w: 6, h: 5, static: true },
    ],
  };

  return (
    <ResponsiveGridLayout
      className="layout border-2"
      layouts={layouts}
      breakpoints={{ lg: 1920, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={40}
      containerPadding={[0, 0]}
      margin={[0, 0]}
    >
      <div key="limit-order" className="bg-gray-100">
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
                <form>
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
                      className="text-right outline-none h-full w-full font-semibold font-mono"
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
                      className="text-right outline-none h-full w-full font-semibold font-mono"
                    />
                    <div className="px-2 text-sm font-bold">
                      <label htmlFor="FormRow-Buy-Amount">USDT</label>
                    </div>
                  </div>
                  <div className="mt-5 text-gray-400 flex text-center px-2 space-x-3 text-xs">
                    <span
                      onClick={handleQuarterOrder}
                      className="btn-25p border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer"
                    >
                      25%
                    </span>
                    <span
                      onClick={handleHalfOrder}
                      className="btn-50p border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer"
                    >
                      50%
                    </span>
                    <span
                      onClick={handleThreeQuarterOrder}
                      className="btn-75 border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer"
                    >
                      75%
                    </span>
                    <span
                      onClick={handleWholeOrder}
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
                      className="text-right outline-none h-full w-full font-semibold font-mono"
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
                <form>
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
                      className="text-right outline-none h-full w-full font-semibold font-mono"
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
                      className="text-right outline-none h-full w-full font-mono font-semibold"
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
                      className="text-right outline-none h-full w-full font-semibold font-mono"
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
      </div>
      <div key="order-book" className="border py-5 px-4 font-mono bg-gray-50">
        <div className="font-semibold text-xs">
          <h2>Order Book</h2>
        </div>
        <div className=" flex text-xs font-sans mt-5">
          <div className="w-full ">
            <h3>Price(ETB)</h3>
          </div>
          <div className="w-full ">
            <h3 className="text-right">Amount(USDT)</h3>
          </div>
          <div className="w-full ">
            <h3 className="text-right">Total</h3>
          </div>
        </div>
        <div className=" mt-4 font-semibold relative">
          {buyOrders.map((order) => (
            <div key={order.id} className=" flex text-xs mt-1">
              <div className="w-full text-light-green">
                <h3>{order.price}</h3>
              </div>
              <div className="w-full">
                <h3 className="text-right">{order.amount}</h3>
              </div>
              <div className="w-full">
                <h3 className="text-right">{order.total}</h3>
              </div>
              {/* <div className="absolute z-20 border bg-xlight-green h-4 w-full"></div> */}
            </div>
          ))}
        </div>
        <div className=" mt-6 flex">
          <h1 className="font-bold text-xl ">64.5</h1>
          <h2 className="font-sans font-semibold  ml-4">Last Price</h2>
        </div>
        <div className=" mt-6 font-semibold">
          {buyOrders.map((order) => (
            <div key={order.id} className=" flex text-xs mt-1">
              <div className="w-full  text-light-red">
                <h3>{order.price}</h3>
              </div>
              <div className="w-full ">
                <h3 className="text-right">{order.amount}</h3>
              </div>
              <div className="w-full ">
                <h3 className="text-right">{order.total}</h3>
              </div>
              {/* <div className="absolute z-20 border bg-xlight-green h-4 w-full"></div> */}
            </div>
          ))}
        </div>
      </div>
      <div
        key="market-summary"
        className="border px-4 sm:pl-4 py-2 bg-gray-100"
      >
        <div className="sm:flex sm:flex-row h-full w-full">
          <div className="w-full sm:w-3/12 flex items-center">
            <h1 className="font-semibold text-xl">USDT/ETB</h1>
          </div>
          <div className="w-full sm:w-2/12 font-mono flex flex-col justify-center items font-semibold">
            <h2 className="text-2xl font-bold">64.5</h2>
            <h3 className="text-xs font-bold text-gray-500">ETB 45.28</h3>
            <div className="flex sm:hidden space-x-2 text-light-red font-bold sm:font-semibold text-sm my-1">
              <h3>-2.30</h3>
              <h3>-1.25%</h3>
            </div>
          </div>
          <div className="w-full font-mono flex items-center sm:space-x-8 font-bold sm:font-semibold">
            <div className="text-xs">
              <h2 className="mb-1 hidden sm:block">24h Change</h2>
              <div className="hidden sm:flex space-x-2 text-light-red font-bold sm:font-semibold">
                <h3>-2.30</h3>
                <h3>-1.25%</h3>
              </div>
            </div>
            <div className="text-xs mt-2">
              <h2 className="mb-1 text-gray-500">24h High</h2>
              <h3>66.25</h3>
            </div>
            <div className="text-xs mt-2 ml-4">
              <h2 className="mb-1 text-gray-500">24h Low</h2>
              <h3>60.15</h3>
            </div>
            <div className="text-xs mt-2 ml-4">
              <h2 className="mb-1 text-gray-500">24h Volume(USDT)</h2>
              <h3>103,045.25</h3>
            </div>
            <div className="text-xs mt-2 ml-4">
              <h2 className="mb-1 text-gray-500">24h Volume(ETB)</h2>
              <h3>6,739,159.35</h3>
            </div>
          </div>
        </div>
      </div>
      <div key="chart" className="border">
        chart
      </div>
      <div key="asset-summary" className="border-2 hidden md:block">
        asset-summary
      </div>
      <div key="trade-history" className="border-2">
        trade-history
      </div>
      <div key="order-history" className="border-2">
        order-history
      </div>
    </ResponsiveGridLayout>
  );
};

export default Trade;
