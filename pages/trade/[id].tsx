import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Trade = () => {
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
      { i: "trade-history", x: 0, y: 35, w: 2, h: 9, static: true },
      { i: "order-history", x: 0, y: 0, w: 6, h: 9, static: true },
      { i: "order-book", x: 0, y: 23, w: 2, h: 12, static: true },
      { i: "asset-summary", x: 0, y: 0, w: 0, h: 0, static: true },
      { i: "chart", x: 0, y: 14, w: 6, h: 9, static: true },
      { i: "limit-order", x: 0, y: 2, w: 2, h: 12, static: true },
      { i: "market-summary", x: 0, y: 0, w: 6, h: 2, static: true },
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
        <div className="pt-6 px-4 border h-full">
          <div className="border-red-300 border">
            <div className="h-10 border flex">
              <button className="border rounded-md flex-auto bg-light-green text-white font-bold">
                BUY
              </button>
              <button className="rounded-md flex-auto border-black border-2 font-bold">
                SELL
              </button>
            </div>
            <div className="border mt-5">
              <div className="border font-bold mb-2">
                <h1>Limit Order</h1>
              </div>
              <div className="border">
                <h2 className="text-xs">
                  Available <span className="font-bold">0.00000000 ETB</span>
                </h2>
              </div>
            </div>
            <div className="border mt-4">
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
                    className="text-right outline-none h-full w-full"
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
                    className="text-right outline-none h-full w-full"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Buy-Amount">USDT</label>
                  </div>
                </div>
                <div className="border mt-5 text-gray-400 flex text-center space-x-3 text-xs">
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">25%</a>
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">50%</a>
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">75%</a>
                  <a className=" border-t-8 pt-1 border-gray-400 font-bold w-full hover:border-light-green hover:text-light-green cursor-pointer">100%</a>
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
                    className="text-right outline-none h-full w-full"
                  />
                  <div className="px-2 text-sm font-bold">
                    <label htmlFor="FormRow-Buy-Total">ETB</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="border mt-4 text-white">
              <button className="w-full h-8 bg-light-green font-semibold rounded-sm">BUY USDT</button>
            </div>
          </div>
        </div>
      </div>
      <div key="order-book" className="border-2 lg">
        order-book
      </div>
      <div key="market-summary" className="border-2">
        market-summary
      </div>
      <div key="chart" className="border-2">
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
