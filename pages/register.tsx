import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const Register: NextPage = () => {
  const [emailVisible, setEmailVisible] = useState(true);

  return (
    <main className="flex flex-1 flex-col sm:flex-row justify-center items-center w-full border h-screen px-4 sm:px-0">
      <div className="flex flex-col justify-center items-center border h-full w-full">
        <div className="border flex flex-col sm:items-center w-full py-4">
          <div>
            <h1 className="mb-6 text-2xl font-medium">Create DAEX Account</h1>
            <h2 className="mb-6">Register with your email or mobile</h2>
            <div>
              <a
                onClick={() => setEmailVisible(true)}
                className={
                  "border-2 rounded-md py-3 px-6 text-sm font-medium cursor-pointer" +
                  (emailVisible ? "border-2 border-black" : "")
                }
              >
                Email
              </a>
              <a
                onClick={() => {
                  setEmailVisible(false);
                }}
                className={
                  "border-2 rounded-md py-3 px-6 ml-4 text-sm font-medium cursor-pointer" +
                  (!emailVisible ? "border-2 border-black" : "")
                }
              >
                Mobile
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:flex sm:flex-col justify-center items-center border h-screen w-full">
        <form className="border md:w-full md:p-4 lg:p-12">
          <div className="">
            {emailVisible && (
              <div className="mb-3">
                <div className="border mb-1 text-sm">Email</div>
                <div className="border">
                  <div className="w-full h-12">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="h-full w-full border-black border-2 rounded-md px-3"
                    />
                  </div>
                </div>
                <div className="border"></div>
              </div>
            )}
            {!emailVisible && (
              <div className="mb-3">
                <div className="border mb-1 text-sm">Phone Number</div>
                <div className="border">
                  <div className="w-full h-12">
                    <input
                      type="tel"
                      name="phoneNumber"
                      autoComplete="tel"
                      className="h-full w-full border-black border-2 rounded-md px-3"
                    />
                  </div>
                </div>
                <div className="border"></div>
              </div>
            )}
            <div className="mb-3">
              <div className="border mb-1 text-sm">Password</div>
              <div className="border">
                <div className="w-full h-12">
                  <input
                    type="password"
                    name="password"
                    autoComplete="password"
                    className="h-full w-full border-black border-2 rounded-md px-3"
                  />
                  <div></div>
                </div>
              </div>
              <div className="border"></div>
            </div>
            <div className="mb-3">
              <div className="border mb-1 text-sm">Referral ID</div>
              <div className="border">
                <div className="w-full h-12">
                  <input
                    type="text"
                    name="text"
                    autoComplete="off"
                    className="h-full w-full border-black border-2 rounded-md px-3"
                  />
                </div>
              </div>
              <div className="border"></div>
            </div>
          </div>
          <button className="border mt-2 w-full py-3 px-6 bg-turquoise-blue rounded-md">
            Create Account
          </button>
        </form>
        <div className="mt-4 font-medium text-sm border text-yellow-600">
          <Link href="forgot-password">
            <a className="mt-2 border block">Forgot Password?</a>
          </Link>
          <div className="flex space-x-2 items-center">
            <h5 className="border text-black">Already have an account?</h5>
            <Link href="/login">
              <a className="mt-2 text-md border block">Login now</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="border h-full w-full "></div>
    </main>
  );
};

export default Register;
