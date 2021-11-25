const trades = [
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
];

const Trades: React.FC = () => {
  return (
    <>
      <div>
        <h1>Trades</h1>
      </div>
      <div className="flex text-xs font-sans mt-3 font-normal py-2">
        <h2 className="w-full">Price(ETB)</h2>
        <h2 className="w-full text-right">Amount(USDT)</h2>
        <h2 className="w-full text-right">Time</h2>
      </div>
      <div className="overflow-y-scroll h-full">
        {trades.map((trade) => (
          <div className="flex text-xs mt-1">
            <h2 className="w-full">{trade.price}</h2>
            <h2 className="w-full text-right">{trade.amount}</h2>
            <h2 className="w-full text-right">{trade.time}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Trades;
