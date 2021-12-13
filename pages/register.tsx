import { NextPage } from "next";
import { useState, useEffect, useMemo, Fragment } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import "yup-phone";
import { countries } from "countries-list";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";

interface RegistrationInfo {
  email?: string;
  password: string;
  phoneNumber?: string;
  referralId: string;
}

const countriesList = Object.entries(countries).map((entry) => ({
  code: entry[0],
  info: entry[1],
}));

const Register: NextPage = () => {
  const router = useRouter();
  console.log("Register Query", router.query);
  const [emailVisible, setEmailVisible] = useState(true);
  const [country, setCountry] = useState(countriesList[68]);
  const [countryModalIsOpen, setCountryModalIsOpen] = useState(true);
  const [residenceModalIsOpen, setResidenceModalIsOpen] = useState(false);

  function closeCountryModal() {
    setCountryModalIsOpen(false);
  }

  function closeResidencyModal() {
    setResidenceModalIsOpen(false);
  }

  function openModal() {
    setCountryModalIsOpen(true);
  }

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: emailVisible
      ? Yup.string().required("Email is required").email("Email is invalid")
      : Yup.string().notRequired(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    phoneNumber: !emailVisible
      ? Yup.string().phone()
      : Yup.string().notRequired(),
    referralId: Yup.string().required(
      "Referral Id is required. Currently access to DAEX is invitation only through a close friend."
    ),
  });

  const initialValues: any = useMemo(
    () => ({
      email: null,
      password: null,
      phoneNumber: null,
      referralId: router.query.referralID,
    }),
    [router.query.referralID]
  );
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data: RegistrationInfo) {
    // display form data on success
    console.log(data);
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  useEffect(() => {
    reset(initialValues);
  }, [reset, initialValues]);

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
                    disabled={router.query.referralID !== undefined}
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
      <Transition appear show={countryModalIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => {}}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  Where do you live?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Before we start, please enter your current location of
                    residence.
                  </p>
                </div>

                <div
                  onClick={() => {
                    setResidenceModalIsOpen(true);
                  }}
                  className="px-2 mt-6 flex justify-between items-center border rounded-sm h-10 hover:border-blue-900"
                >
                  <div className="flex items-center">
                    <div className="text-2xl mr-2">{country.info.emoji}</div>
                    <h2>{country.info.name}</h2>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="w-4 ml-2"
                  >
                    <path
                      d="M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center px-4 py-3 text-sm text-white font-medium bg-gray-800 border-transparent rounded-md hover:bg-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeCountryModal}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={residenceModalIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={() => {}}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-sm p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  Country/Area of Residence
                </Dialog.Title>
                <div className="mt-2">
                  <div className="pl-2 flex items-center border rounded-sm h-10 hover:border-blue-900 focus-within:border-blue-900">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-4 text-gray-400"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M17 11a6 6 0 10-12 0 6 6 0 0012 0zm-6-8a8 8 0 110 16 8 8 0 010-16z"
                          fill="#76808F"
                        ></path>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M20.586 22L15 16.414 16.414 15 22 20.586 20.586 22z"
                          fill="#76808F"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="search"
                      placeholder="Search Country name"
                      className="px-3 outline-none text-sm w-full h-full"
                    />
                  </div>
                </div>

                <div className="mt-2 max-h-80 overflow-scroll">
                  <div className="pb-6">
                    {countriesList.map((country, index) => (
                      <div
                        key={index}
                        className="px-6 h-full hover:bg-gray-100 cursor-pointer"
                        onClick={() => {
                          setCountry(country);
                          setResidenceModalIsOpen(false);
                        }}
                      >
                        <div className="py-4">
                          <div className="flex items-center text-3xl">
                            <div>{country.info.emoji}</div>
                            <div className="text-sm ml-4">
                              <h2 className="text-gray-500">
                                {country.info.name}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </main>
  );
};

export default Register;
