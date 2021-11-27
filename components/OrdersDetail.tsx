import React, { useState } from "react";
import Link from "next/link";

const OrdersDetail = () => {
  const [user, setUser] = useState(true);
  const [orders, setOrders] = useState([]);
  const [currentTab, setCurrentTab] = useState({ activeTab: "open-orders" });
  console.log(currentTab);

  const isActiveTab: (tabName: string) => boolean = (tabName) =>
    currentTab.activeTab === tabName;

  return (
    <>
      <div className="text-sm overflow-x-scroll w-full flex">
        <button
          className={`${
            isActiveTab("open-orders") &&
            "font-bold text-blue-900 border-b-4 border-blue-900"
          } pb-2 mb-1`}
          onClick={() => setCurrentTab({ activeTab: "open-orders" })}
        >
          Open Orders(0)
        </button>
        <button
          className={`${
            isActiveTab("order-history") &&
            "font-bold text-blue-900 border-b-4 border-blue-900"
          } ml-4 pb-2 mb-1`}
          onClick={() => setCurrentTab({ activeTab: "order-history" })}
        >
          Order History
        </button>
        <button
          className={`${
            isActiveTab("trade-history") &&
            "font-bold text-blue-900 border-b-4 border-blue-900"
          } ml-4 pb-2 mb-1`}
          onClick={() => setCurrentTab({ activeTab: "trade-history" })}
        >
          Trade History
        </button>
        <button
          className={`${
            isActiveTab("funds") &&
            "font-bold text-blue-900 border-b-4 border-blue-900"
          } ml-4 pb-2 mb-1`}
          onClick={() => setCurrentTab({ activeTab: "funds" })}
        >
          Funds
        </button>
      </div>

      {user ? (
        <div className="flex flex-col h-full">
          {isActiveTab("open-orders") && (
            <>
              <div className="border-b-2 w-full flex justify-between text-xs">
                <div className="w-full">
                  <h4>Date</h4>
                </div>
                <div className="w-full">
                  <h4>Pair</h4>
                </div>
                <div className="w-full">
                  <h4>Type</h4>
                </div>
                <div className="w-full">
                  <h4>Side</h4>
                </div>
                <div className="w-full">
                  <h4>Price</h4>
                </div>
                <div className="w-full">
                  <h4>Amount</h4>
                </div>
                <div className="w-full">
                  <h4>Filled</h4>
                </div>
                <div className="w-full">
                  <h4>Total</h4>
                </div>
                <div className="w-full">
                  <button>Cancel All</button>
                </div>
              </div>
              <div className="h-full">
                {orders.length === 0 && (
                  <div className="flex h-full justify-center items-center text-gray-400">
                    <h3>You have no open orders!</h3>
                  </div>
                )}
              </div>
            </>
          )}
          {isActiveTab("order-history") && (
            <>
              <div className="border-b-2 w-full flex justify-between text-xs">
                <div className="w-full">
                  <h4>Date</h4>
                </div>
                <div className="w-full">
                  <h4>Pair</h4>
                </div>
                <div className="w-full">
                  <h4>Type</h4>
                </div>
                <div className="w-full">
                  <h4>Side</h4>
                </div>
                <div className="w-full">
                  <h4>Average</h4>
                </div>
                <div className="w-full">
                  <h4>Price</h4>
                </div>
                <div className="w-full">
                  <h4>Executed</h4>
                </div>
                <div className="w-full">
                  <h4>Amount</h4>
                </div>
                <div className="w-full">
                  <h4>Total</h4>
                </div>
                <div className="w-full">
                  <button>All</button>
                </div>
              </div>
              <div className="h-full">
                {orders.length === 0 && (
                  <div className="flex h-full justify-center items-center text-gray-400">
                    <h3>You have no order history!</h3>
                  </div>
                )}
              </div>
            </>
          )}
          {isActiveTab("trade-history") && (
            <>
              <div className="border-b-2 w-full flex justify-between text-xs">
                <div className="w-full">
                  <h4>Date</h4>
                </div>
                <div className="w-full">
                  <h4>Pair</h4>
                </div>
                <div className="w-full">
                  <h4>Side</h4>
                </div>
                <div className="w-full">
                  <h4>Price</h4>
                </div>
                <div className="w-full">
                  <h4>Executed</h4>
                </div>
                <div className="w-full">
                  <h4>Fee</h4>
                </div>
                <div className="w-full">
                  <h4>Total</h4>
                </div>
              </div>
              <div className="h-full">
                {orders.length === 0 && (
                  <div className="flex h-full justify-center items-center text-gray-400">
                    <h3>You have no trades.</h3>
                  </div>
                )}
              </div>
            </>
          )}
          {isActiveTab("funds") && (
            <>
              <div className="border-b-2 w-full flex justify-between text-xs">
                <div className="w-full">
                  <h4>Coin</h4>
                </div>
                <div className="w-full">
                  <h4>Total Balance</h4>
                </div>
                <div className="w-full">
                  <h4>Available Balance</h4>
                </div>
                <div className="w-full">
                  <h4>In Order</h4>
                </div>
                <div className="w-full">
                  <h4>BTC Value</h4>
                </div>
              </div>
              <div className="h-full">
                {orders.length === 0 && (
                  <div className="flex h-full justify-center items-center text-gray-400">
                    <h3>You have no open orders!</h3>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ) : (
        <div className="flex h-full items-center justify-center">
          <h2>
            <span className="text-blue-900 font-bold font-mono">
              <Link href="/login">Log In</Link>
            </span>{" "}
            or{" "}
            <span className="text-blue-900 font-bold font-mono">
              <Link href="/register">Register Now</Link>
            </span>{" "}
            to trade
          </h2>
        </div>
      )}
    </>
  );
};

export default OrdersDetail;
