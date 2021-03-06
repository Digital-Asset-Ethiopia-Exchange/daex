import { NextPage } from "next";
import { useState, useMemo, Fragment } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "yup-phone";
import { countries } from "countries-list";
import { Dialog, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import axios from "axios";

interface RegistrationData {
  email?: string;
  password: string;
  phoneNumber?: string;
  referredById: string;
  country: string;
}

const countriesList = Object.entries(countries).map((entry) => ({
  code: entry[0],
  info: entry[1],
}));

const Register: NextPage = () => {
  const router = useRouter();

  const [emailVisible, setEmailVisible] = useState(true);
  const [country, setCountry] = useState(countriesList[68]);
  const [countries, setCountries] = useState(countriesList);
  const [countryQuery, setCountryQuery] = useState("");
  const [countryModalIsOpen, setCountryModalIsOpen] = useState(true);
  const [residenceModalIsOpen, setResidenceModalIsOpen] = useState(false);
  const [areaCodeModalIsOpen, setAreaCodeModalIsOpen] = useState(false);

  function closeCountryModal() {
    setCountryModalIsOpen(false);
  }

  function closeResidencyModal() {
    setResidenceModalIsOpen(false);
  }

  function openModal() {
    setCountryModalIsOpen(true);
  }

  const registerUser = async (data: RegistrationData) => {
    try {
      const { data: any } = await axios.post("/api/auth/register", data);
      return data;
    } catch (error) {
      return error;
    }
  };

  const filterCountries = (e: any) => {
    const query = e.target.value;

    if (query !== "") {
      const results = countries.filter((country) => {
        return country.info.name.toLowerCase().startsWith(query.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setCountries(results);
    } else {
      setCountries(countriesList);
      // If the text field is empty, show all countries
    }

    setCountryQuery(query);
  };

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: emailVisible
      ? Yup.string()
          .required("Email is required")
          .email("Email is invalid")
      : Yup.string().notRequired(),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    phoneNumber: !emailVisible
      ? Yup.string().phone()
      : Yup.string().notRequired(),
    referredById: Yup.string().required(
      "Referral Id is required. Currently access to DAEX is invitation only through a close friend."
    ),
  });

  const initialValues: any = useMemo(
    () => ({
      email: null,
      password: null,
      phoneNumber: null,
      referredById: router.query.referredById,
    }),
    [router.query.referredById]
  );

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data: RegistrationData) {
    // display form data on success
    data.country = country.code;
    registerUser(data);
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
                className={`rounded-md py-3 px-6 text-sm font-medium cursor-pointer
                  ${emailVisible && "bg-gray-200"}`}
              >
                Email
              </a>
              <a
                onClick={() => {
                  setEmailVisible(false);
                  reset();
                }}
                className={`rounded-md py-3 px-6 ml-4 text-sm font-medium cursor-pointer +
                  ${!emailVisible && "bg-gray-200"}`}
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
          className="md:w-full md:p-4 lg:p-12"
        >
          <div className="">
            {emailVisible && (
              <div className="mb-3">
                <div className=" mb-1 text-sm">Email</div>
                <div>
                  <div className="w-full h-12">
                    <input
                      type="email"
                      className="h-full w-full border-gray-300 border rounded-md px-3 outline-none focus:border-blue-900"
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
                <div className="w-full h-12 flex space-x-3">
                  <div
                    className="w-1/2 cursor-pointer"
                    onClick={() => setAreaCodeModalIsOpen(true)}
                  >
                    <div className="w-full flex items-center justify-around border px-3 h-12 rounded-md text-sm hover:border-blue-900">
                      <div className="flex items-center">
                        <div className="text-2xl">{country.info.emoji}</div>
                        <h1 className="text-black text-center ml-2">
                          +{country.info.phone}
                        </h1>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="w-4"
                      >
                        <path
                          d="M11 5.632v1.4L8.2 10 5.4 7.032v-1.4H11z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <input
                    type="tel"
                    autoComplete="tel"
                    className="h-full w-full border-gray-200 border rounded-md px-3 hover:border-blue-500 outline-none focus:border-blue-600"
                    {...register("phoneNumber")}
                  />
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
                    autoComplete="current-password"
                    className="h-full w-full border-gray-300 border rounded-md px-3 outline-none focus:border-blue-900"
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
                    className="h-full w-full border-gray-300 border rounded-md px-3 outline-none focus:border-blue-900"
                    {...register("referredById")}
                    disabled={router.query.referredById !== undefined}
                  />
                </div>
              </div>
              <div className="text-red-600">{errors.referredById?.message}</div>
            </div>
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-3 px-6 bg-turquoise-blue rounded-md"
          >
            Create Account
          </button>
        </form>
        <div className="w-full md:px-4 lg:px-12">
          <div className="font-medium text-sm text-yellow-600">
            <Link href="forgot-password">
              <a className="block">Forgot Password?</a>
            </Link>
            <div className="flex space-x-2 items-center">
              <h5 className="text-black">Already have an account?</h5>
              <Link href="/login">
                <a className="text-md block">Login now</a>
              </Link>
            </div>
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
                  className="px-2 mt-6 flex justify-between items-center border rounded-sm h-10 hover:border-blue-900 cursor-pointer"
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
                      value={countryQuery}
                      onChange={filterCountries}
                      placeholder="Search Country name"
                      className="px-3 outline-none text-sm w-full h-full"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="mt-2 max-h-80 overflow-scroll">
                  <div className="">
                    {countries && countries.length > 0 ? (
                      countries.map((country, index) => (
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
                      ))
                    ) : (
                      <div className="flex flex-col justify-center items-center py-16 pr-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 96 96"
                          fill="none"
                          className="w-24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M64 8H26v80h58V28L64 8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4z"
                            fill="url(#not-found-data-light_svg__paint0_linear)"
                          ></path>
                          <path d="M62 71l4-4 4 4-4 4-4-4z" fill="#fff"></path>
                          <path
                            d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z"
                            fill="#E6E8EA"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.171 73.171l14.5-14.5 5.657 5.658-14.5 14.5-5.657-5.657z"
                            fill="url(#not-found-data-light_svg__paint1_linear)"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"
                            fill="url(#not-found-data-light_svg__paint2_linear)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="not-found-data-light_svg__paint0_linear"
                              x1="84"
                              y1="10.162"
                              x2="84"
                              y2="88"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F5F5F5"></stop>
                              <stop offset="1" stopColor="#E6E8EA"></stop>
                            </linearGradient>
                            <linearGradient
                              id="not-found-data-light_svg__paint1_linear"
                              x1="4.171"
                              y1="68.75"
                              x2="24.328"
                              y2="68.75"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#929AA5"></stop>
                              <stop offset="1" stopColor="#76808F"></stop>
                            </linearGradient>
                            <linearGradient
                              id="not-found-data-light_svg__paint2_linear"
                              x1="15"
                              y1="48"
                              x2="55"
                              y2="48"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#929AA5"></stop>
                              <stop offset="1" stopColor="#76808F"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                        <h1 className="text-gray-600">No results found!</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
      <Transition appear show={areaCodeModalIsOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={() => setAreaCodeModalIsOpen(false)}
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
                  Select area code
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
                      value={countryQuery}
                      onChange={filterCountries}
                      placeholder="Search"
                      className="px-3 outline-none text-sm w-full h-full"
                      autoFocus
                    />
                  </div>
                </div>

                <div className="mt-2 max-h-80 overflow-scroll">
                  <ul className="">
                    {countries && countries.length > 0 ? (
                      countries.map((country, index) => (
                        <li
                          key={index}
                          className="px-6 h-full hover:bg-gray-100 cursor-pointer"
                          onClick={() => {
                            setCountry(country);
                            setAreaCodeModalIsOpen(false);
                          }}
                        >
                          <div className="py-4">
                            <div className="flex space-x-4">
                              <div className="flex items-center">
                                <h1 className="text-3xl">
                                  {country.info.emoji}
                                </h1>
                              </div>
                              <div className="text-sm w-full">
                                <h2 className="text-gray-500">
                                  {country.info.name}
                                </h2>
                                <h3 className="text-gray-400">
                                  {country.info.native}
                                </h3>
                              </div>
                              <div className=" flex items-center text-sm">
                                <h3>+{country.info.phone}</h3>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <div className="flex flex-col justify-center items-center py-16 pr-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 96 96"
                          fill="none"
                          className="w-24"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M64 8H26v80h58V28L64 8zM36 37h38v4H36v-4zm0 9h38v4H36v-4zm38 9H36v4h38v-4z"
                            fill="url(#not-found-data-light_svg__paint0_linear)"
                          ></path>
                          <path d="M62 71l4-4 4 4-4 4-4-4z" fill="#fff"></path>
                          <path
                            d="M86 50l3-3 3 3-3 3-3-3zM47 21l3-3 3 3-3 3-3-3zM84 28H64V8l20 20z"
                            fill="#E6E8EA"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.171 73.171l14.5-14.5 5.657 5.658-14.5 14.5-5.657-5.657z"
                            fill="url(#not-found-data-light_svg__paint1_linear)"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M51 48c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zm4 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z"
                            fill="url(#not-found-data-light_svg__paint2_linear)"
                          ></path>
                          <defs>
                            <linearGradient
                              id="not-found-data-light_svg__paint0_linear"
                              x1="84"
                              y1="10.162"
                              x2="84"
                              y2="88"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#F5F5F5"></stop>
                              <stop offset="1" stopColor="#E6E8EA"></stop>
                            </linearGradient>
                            <linearGradient
                              id="not-found-data-light_svg__paint1_linear"
                              x1="4.171"
                              y1="68.75"
                              x2="24.328"
                              y2="68.75"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#929AA5"></stop>
                              <stop offset="1" stopColor="#76808F"></stop>
                            </linearGradient>
                            <linearGradient
                              id="not-found-data-light_svg__paint2_linear"
                              x1="15"
                              y1="48"
                              x2="55"
                              y2="48"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#929AA5"></stop>
                              <stop offset="1" stopColor="#76808F"></stop>
                            </linearGradient>
                          </defs>
                        </svg>
                        <h1 className="text-gray-600">No results found!</h1>
                      </div>
                    )}
                  </ul>
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
