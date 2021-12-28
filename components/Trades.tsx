const trades = [
  {
    id: "1",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "2",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "3",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "4",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "5",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "6",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "7",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "8",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "9",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "10",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "11",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "12",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "13",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "14",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "15",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "16",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "17",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "18",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "19",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
  {
    id: "20",
    price: 62.5,
    type: "buy",
    amount: 1215.2,
    time: "13:04:06",
  },
];

const Trades = ({ baseCurrency, quoteCurrency }: any) => {
  return (
    <>
      <div>
        <h1>Trades</h1>
      </div>
      <div className="flex text-xs font-sans mt-3 font-normal py-2">
        <h2 className="w-full">Price({quoteCurrency})</h2>
        <h2 className="w-full text-right">Amount({baseCurrency})</h2>
        <h2 className="w-full text-right">Time</h2>
      </div>
      <div className="overflow-y-scroll h-full">
        {trades.map((trade) => (
          <div key={trade.id} className="flex text-xs mt-1">
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
