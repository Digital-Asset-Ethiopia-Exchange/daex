import { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "yup-phone";

interface UserInfo {
  email?: string,
  password: string,
  phoneNumber?: string,
  referralId: string
}

const Register: NextPage = () => {
  const [emailVisible, setEmailVisible] = useState(true);

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: emailVisible
      ? Yup.string().required("Email is required").email("Email is invalid")
      : Yup.string().notRequired(),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phoneNumber: !emailVisible
      ? Yup.string()
          .phone()
      : Yup.string().notRequired(),
    referralId: Yup.string().required(
      "Referral Id is required. Currently access to DAEX is invitation only through a friend."
    ),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data: UserInfo) {
    // display form data on success
    console.log(data);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <main className="flex flex-1 flex-col sm:flex-row justify-center items-center w-full h-screen px-4 sm:px-0 overflow-hidden">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex flex-col sm:items-center w-full py-4">
          <div>
            <h1 className="mb-6 text-2xl font-medium">Create DAEX Account</h1>
            <h2 className="mb-6">Register with your email or mobile</h2>
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
      </div>
      <div className="sm:flex sm:flex-col justify-center items-center h-screen w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" md:w-full md:p-4 lg:p-12"
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
                    className="h-full w-full border-black border-2 rounded-md px-3"
                    {...register("password")}
                  />
                </div>
              </div>
              <div className="text-red-600">{errors.password?.message}</div>
            </div>
            <div className="mb-3">
              <div className=" mb-1 text-sm">Referral ID</div>
              <div>
                <div className="w-full h-12">
                  <input
                    type="text"
                    className="h-full w-full border-black border-2 rounded-md px-3"
                    {...register("referralId")}
                  />
                </div>
              </div>
              <div className="text-red-600">{errors.referralId?.message}</div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-3 px-6 bg-turquoise-blue rounded-md"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 font-medium text-sm text-yellow-600">
          <Link href="forgot-password">
            <a className="mt-2 block">Forgot Password?</a>
          </Link>
          <div className="flex space-x-2 items-center">
            <h5 className="text-black">Already have an account?</h5>
            <Link href="/login">
              <a className="mt-2 text-md block">Login now</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="h-full w-full "></div>
    </main>
  );
};

export default Register;
