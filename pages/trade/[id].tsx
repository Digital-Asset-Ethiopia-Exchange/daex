import { Responsive, WidthProvider } from 'react-grid-layout'
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const ResponsiveGridLayout = WidthProvider(Responsive)

const Trade = () => {
  const layouts = {
    lg: [
      { i: "limit-order", x: 0, y: 0, w: 2, h: 18, static: true },
      { i: "order-book", x: 2, y: 0, w: 2, h: 15 },
      { i: "market-summary", x: 4, y: 0, w: 6, h: 2 },
      { i: "chart", x: 4, y: 0, w: 6, h: 13 },
      { i: "asset-summary", x: 0, y: 0, w: 2, h: 6},
      { i: "trade-history", x: 2, y: 0, w: 2, h: 9 },
      { i: "order-history", x: 4, y: 0, w: 6, h: 9 }
    ],
    sm: [
      { i: "market-summary", x: 0, y: 0, w: 6, h: 2 },
      { i: "limit-order", x: 0, y: 2, w: 2, h: 12, static: true },
      { i: "chart", x: 0, y: 14, w: 6, h: 9 },
      { i: "order-book", x: 0, y: 23, w: 2, h: 12 },
      { i: "trade-history", x: 0, y: 35, w: 2, h: 9 },
      { i: "order-history", x: 0, y: 0, w: 6, h: 9 }
    ],
    // sm: [
    //   { i: "limit-order", x: 0, y: 0, w: 4, h: 18 },
    //   { i: "chart", x: 4, y: 0, w: 6, h: 13 },
    // ]
    };

  return (
      <ResponsiveGridLayout
        className="layout border-2"
        layouts={layouts}
        breakpoints={{lg: 1920, md: 768, sm: 640, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        rowHeight={40}
        containerPadding={[0, 0]}
        margin={[0, 0]}
      >
        <div key="limit-order" className="border-2">
          Limit Order
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
        <div key="asset-summary" className="border-2 hidden lg:block">
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
