import { useState } from "react";
import Link from "next/link";

const AssetSummary = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <div className="text-white">
        <h1>Assets</h1>
      </div>
      <div className="text-sm py-6 ">
        <Link href="/deposit">
          <button
            disabled={!user}
            className={`${
              !user && "text-gray-300"
            } bg-white px-3 py-2 rounded-sm`}
          >
            Deposit
          </button>
        </Link>
        <Link href="/withdraw">
          <button
            disabled={!user}
            className={`${
              !user && "text-gray-300"
            } bg-white px-3 py-2 rounded-sm ml-4`}
          >
            Withdraw
          </button>
        </Link>
      </div>
      {user && (
        <div className="text-white ">
          <div className="text-xs flex justify-between">
            <h2>USDT Available:</h2>
            <h3>0.0000000</h3>
          </div>
          <div className="text-xs flex justify-between mt-2">
            <h2>ETB Available:</h2>
            <h3>0.0000000</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default AssetSummary;
