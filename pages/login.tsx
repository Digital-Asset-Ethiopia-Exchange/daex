import { NextPage } from "next";
import { useState, Fragment } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Dialog, Transition } from "@headlessui/react";
import { countries } from "countries-list";
interface LoginInfo {
  email?: string;
  password: string;
  phoneNumber?: string;
}

const countriesList = Object.entries(countries).map((entry) => ({
  code: entry[0],
  info: entry[1],
}));

const Login: NextPage = () => {
  const [emailVisible, setEmailVisible] = useState(true);
  const [country, setCountry] = useState(countriesList[68]);
  const [countries, setCountries] = useState(countriesList);
  const [countryQuery, setCountryQuery] = useState("");
  const [areaCodeModalIsOpen, setAreaCodeModalIsOpen] = useState(false);

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

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    email: emailVisible
      ? Yup.string()
          .required("Email is required")
          .email("Email is invalid")
      : Yup.string().notRequired(),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    phoneNumber: !emailVisible
      ? Yup.string().matches(phoneRegExp, "Phone number is not valid")
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
                      className="h-full w-full border-gray-200 border rounded-md px-3 hover:border-blue-500 outline-none focus:border-blue-600"
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
                    autoComplete="password"
                    className="h-full w-full border-gray-200 border rounded-md px-3 hover:border-blue-500 outline-none focus:border-blue-600"
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

export default Login;
