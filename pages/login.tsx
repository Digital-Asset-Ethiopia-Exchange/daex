import { NextPage } from "next";
import { useState, Fragment } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import "yup-phone";
interface LoginInfo {
  email?: string;
  password: string;
  phoneNumber?: string;
}

const Login: NextPage = () => {
  const [emailVisible, setEmailVisible] = useState(true);
  
  const validationSchema = Yup.object().shape({
    email: emailVisible
      ? Yup.string().required("Email is required").email("Email is invalid")
      : Yup.string().notRequired(),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phoneNumber: !emailVisible
      ? Yup.string().phone()
      : Yup.string().notRequired(),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data: LoginInfo) {
    // display form data on success
    console.log(data);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

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
                onClick={() => {
                  setEmailVisible(true);
                  reset();
                }}
                className={`border-2 rounded-md py-3 px-6 text-sm font-medium cursor-pointer
                  ${emailVisible && "border-2 border-black"}`}
              >
                Email
              </a>
              <a
                onClick={() => {
                  setEmailVisible(false);
                  reset();
                }}
                className={`border-2 rounded-md py-3 px-6 ml-4 text-sm font-medium cursor-pointer +
                  ${!emailVisible && "border-2 border-black"}`}
              >
                Mobile
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="md:w-full md:p-4 lg:px-12"
        >
          <div className="">
            {emailVisible && (
              <div className="mb-3">
                <div className=" mb-1 text-sm">Email</div>
                <div>
                  <div className="w-full h-12">
                    <input
                      type="email"
                      className="h-full w-full border-black border-2 rounded-md px-3"
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="text-red-600">{errors.email?.message}</div>
              </div>
            )}
            {!emailVisible && (
              <div className="mb-3">
                <div className=" mb-1 text-sm">Phone Number</div>
                <div>
                  <div className="w-full h-12">
                    <input
                      type="tel"
                      autoComplete="tel"
                      className="h-full w-full border-black border-2 rounded-md px-3"
                      {...register("phoneNumber")}
                    />
                  </div>
                </div>
                <div className="text-red-600">
                  {errors.phoneNumber?.message}
                </div>
              </div>
            )}
            <div className="mb-3">
              <div className=" mb-1 text-sm">Password</div>
              <div>
                <div className="w-full h-12">
                  <input
                    type="password"
                    autoComplete="password"
                    className="h-full w-full border-black border-2 rounded-md px-3"
                    {...register("password")}
                  />
                </div>
              </div>
              <div className="text-red-600">{errors.password?.message}</div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-3 px-6 bg-turquoise-blue rounded-md"
          >
            Login
          </button>
        </form>
        <div className="w-full md:p-4 lg:px-12 font-medium text-sm text-yellow-600">
          <Link href="forgot-password">
            <a className="block">Forgot Password?</a>
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
