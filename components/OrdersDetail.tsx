import React from "react";

const OrdersDetail = () => {
  return (
    <>
      <div className="border text-sm overflow-scroll w-full flex">
        <button>Open Orders(0)</button>
        <button className="ml-4">Order History</button>
        <button className="ml-4">Trade History</button>
        <button className="ml-4">Funds</button>
      </div>
      <div className="border"></div>
    </>
  );
};

export default OrdersDetail;
