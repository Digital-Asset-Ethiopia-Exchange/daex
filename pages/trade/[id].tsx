import { Responsive, WidthProvider } from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";
import PriceChart from "../../components/Chart";
import Trades from "../../components/Trades";
import AssetSummary from "../../components/AssetSummary";
import OrderBook from "../../components/OrderBook";
import MarketSummary from "../../components/MarketSummary";
import OrderForm from "../../components/OrderForm";
import OrdersDetail from "../../components/OrdersDetail";

const ResponsiveGridLayout = WidthProvider(Responsive);


const Trade = () => {

  const layouts = {
    lg: [
      { i: "order-form", x: 0, y: 0, w: 2, h: 18, static: true },
      { i: "order-book", x: 2, y: 0, w: 2, h: 15 },
      { i: "market-summary", x: 4, y: 0, w: 6, h: 2 },
      { i: "chart", x: 4, y: 0, w: 6, h: 13 },
      { i: "asset-summary", x: 0, y: 0, w: 2, h: 6 },
      { i: "trades", x: 2, y: 0, w: 2, h: 9 },
      { i: "order-history", x: 4, y: 0, w: 6, h: 9 },
    ],
    sm: [
      { i: "trades", x: 0, y: 56, w: 2, h: 9, static: true },
      { i: "order-history", x: 0, y: 47, w: 6, h: 9, static: true },
      { i: "asset-summary", x: 0, y: 0, w: 0, h: 0, static: true },
      { i: "order-book", x: 0, y: 32, w: 2, h: 15, static: true },
      { i: "chart", x: 0, y: 17, w: 6, h: 15, static: true },
      { i: "order-form", x: 0, y: 5, w: 2, h: 12, static: true },
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
      <div key="order-form" className="bg-gray-100">
        <OrderForm />
      </div>
      <div key="order-book" className="border py-5 px-4 font-mono bg-gray-50">
        <OrderBook />
      </div>
      <div
        key="market-summary"
        className="border px-4 sm:pl-4 py-2 bg-gray-100"
      >
        <MarketSummary />
      </div>
      <div key="chart" id="chart" className="border">
        <PriceChart />
      </div>
      <div
        key="asset-summary"
        className="hidden md:block px-6 py-4 bg-gray-800"
      >
        <AssetSummary />
      </div>
      <div key="trades" className="border bg-gray-50 flex flex-col h-full font-mono font-bold sm:font-semibold text-sm px-4 py-5 overflow-hidden">
        <Trades />
      </div>
      <div key="order-history" className="border flex flex-col h-full p-4">
        <OrdersDetail />
      </div>
    </ResponsiveGridLayout>
  );
};

export default Trade;
