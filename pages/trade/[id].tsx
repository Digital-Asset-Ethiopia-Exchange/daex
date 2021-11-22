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
      <div key="limit-order" className="border-2 bg-gray-100">
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
              <form className="border">
                <div>
                  <div className="group border rounded-md flex items-center justify-center h-12 bg-white focus:ring-2 focus:ring-blue-500 px-4">
                    <div className="">
                      <label htmlFor="FormRow-Buy-Price">Price</label>
                    </div>
                    <input type="number" name="price" id="FormRow-Buy-price" step="0.01" min="" className="text-right h-full focus:outline-none" />
                    <div>
                      <label htmlFor="FormRow-Buy-price">ETB</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="h-8 border"></div>
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
