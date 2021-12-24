import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const AssetSummary: React.FC = ({ baseCurrency, quoteCurrency }: any) => {
  const { data: session } = useSession();

  return (
    <>
      <div className="text-white">
        <h1>Assets</h1>
      </div>
      <div className="text-sm py-6 ">
        <Link href="/deposit/crypto" passHref>
          <button
            disabled={session === undefined}
            className={`${
              !session && "text-gray-300"
            } bg-white px-3 py-2 rounded-sm`}
          >
            Deposit
          </button>
        </Link>
        <Link href="/withdraw/crypto" passHref>
          <button
            disabled={session == undefined}
            className={`${
              !session && "text-gray-300"
            } bg-white px-3 py-2 rounded-sm ml-4`}
          >
            Withdraw
          </button>
        </Link>
      </div>
      {session && (
        <div className="text-white ">
          <div className="text-xs flex justify-between">
            <h2>{baseCurrency} Available:</h2>
            <h3>0.0000000</h3>
          </div>
          <div className="text-xs flex justify-between mt-2">
            <h2>{quoteCurrency} Available:</h2>
            <h3>0.0000000</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default AssetSummary;
