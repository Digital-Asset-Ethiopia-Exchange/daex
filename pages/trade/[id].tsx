import GridLayout from "react-grid-layout";
import "/node_modules/react-grid-layout/css/styles.css";
import "/node_modules/react-resizable/css/styles.css";

const Trade = () => {
  const layout = [
    { i: "limit-order", x: 0, y: 0, w: 2, h: 18, static: true },
    { i: "order-book", x: 2, y: 0, w: 2, h: 15 },
    { i: "market-summary", x: 4, y: 0, w: 5, h: 2 },
    { i: "chart", x: 4, y: 0, w: 5, h: 13 },
    { i: "asset-summary", x: 0, y: 0, w: 2, h: 6},
    { i: "trade-history", x: 2, y: 0, w: 2, h: 9 },
    { i: "order-history", x: 4, y: 0, w: 5, h: 9 },
  ];

  return (
      <GridLayout
        className="layout border-2"
        layout={layout}
        cols={12}
        rowHeight={40}
        width={1920}
        containerPadding={[0, 0]}
        margin={[0, 0]}
      >
        <div key="limit-order" className="border-2">
          Limit Order
        </div>
        <div key="order-book" className="border-2">
          order-book
        </div>
        <div key="market-summary" className="border-2">
          market-summary
        </div>
        <div key="chart" className="border-2">
          chart
        </div>
        <div key="asset-summary" className="border-2">
          asset-summary
        </div>
        <div key="trade-history" className="border-2">
          trade-history
        </div>
        <div key="order-history" className="border-2">
          order-history
        </div>
      </GridLayout>
  );
};

export default Trade;
