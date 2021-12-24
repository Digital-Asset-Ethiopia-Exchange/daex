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

const OrderBook: React.FC = ({ baseCurrency, quoteCurrency}: any) => {
  return (
    <>
      <div className="font-bold sm:font-semibold text-xs">
        <h2>Order Book</h2>
      </div>
      <div className=" flex text-xs font-sans mt-5">
        <div className="w-full ">
          <h3>Price({quoteCurrency})</h3>
        </div>
        <div className="w-full ">
          <h3 className="text-right">Amount({baseCurrency})</h3>
        </div>
        <div className="w-full ">
          <h3 className="text-right">Total</h3>
        </div>
      </div>
      <div className=" mt-4 font-bold sm:font-semibold relative">
        {buyOrders.map((order) => (
          <div key={order.id} className=" flex text-xs mt-1">
            <div className="w-full text-light-red">
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
        <h2 className="font-sans font-bold sm:font-semibold  ml-4">
          Last Price
        </h2>
      </div>
      <div className=" mt-6 font-bold sm:font-semibold">
        {buyOrders.map((order) => (
          <div key={order.id} className=" flex text-xs mt-1">
            <div className="w-full  text-light-green">
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
    </>
  );
};

export default OrderBook;
