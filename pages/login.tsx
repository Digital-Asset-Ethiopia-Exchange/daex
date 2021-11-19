import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";

const Login: NextPage = () => {
  const [emailVisible, setEmailVisible] = useState(true);

  return (
    <main className="flex flex-1 flex-col sm:flex-row justify-center items-center w-full h-screen px-4 sm:px-0 overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full w-full"></div>
      <div className="sm:flex sm:flex-col justify-center items-center h-screen w-full">
        <div className="flex flex-col sm:items-center w-full py-4 md:px-4 lg:px-12">
          <div>
            <h1 className="mb-6 text-4xl font-medium">DAEX Account Login</h1>
            <h2 className="mb-6">
              Welcome back! Login with your Email or Phone Number
            </h2>
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
        <form onSubmit={() => {}} className=" md:w-full md:p-4 lg:px-12">
          <div className="">
            {emailVisible && (
              <div className="mb-3">
                <div className=" mb-1 text-sm">Email</div>
                <div>
                  <div className="w-full h-12">
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      className="h-full w-full border-black border-2 rounded-md px-3"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            )}
            {!emailVisible && (
              <div className="mb-3">
                <div className=" mb-1 text-sm">Phone Number</div>
                <div className="">
                  <div className="w-full h-12">
                    <input
                      type="tel"
                      name="phoneNumber"
                      autoComplete="tel"
                      className="h-full w-full border-black border-2 rounded-md px-3"
                    />
                  </div>
                </div>
                <div></div>
              </div>
            )}
            <div className="mb-3">
              <div className=" mb-1 text-sm">Password</div>
              <div>
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
              <div></div>
            </div>
          </div>
          <button className="mt-2 w-full py-3 px-6 bg-turquoise-blue rounded-md">
            Login
          </button>
        </form>
        <div className="mt-4 font-medium text-sm text-yellow-600">
          <Link href="forgot-password">
            <a className="mt-2 block">Forgot Password?</a>
          </Link>
          <Link href="/register">
            <a className="mt-2 block">Register now</a>
          </Link>
        </div>
      </div>
      <div className="h-full w-full "></div>
    </main>
  );
};

export default Login;
