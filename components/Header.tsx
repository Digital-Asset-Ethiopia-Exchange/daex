/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  { name: "Trade", href: "/trade" },
  { name: "Deposit", href: "/deposit" },
  { name: "Wallet", href: "/wallet" },
  { name: "Orders", href: "/orders" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header: React.FC = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-4">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link href="/">
                  <div className="flex-shrink-0 flex items-center cursor-pointer">
                    <div className="block lg:hidden h-8 w-auto">
                      <Image
                        src="/DAEX-Badge-Small.svg"
                        alt="Workflow"
                        height={32}
                        width={64}
                      />
                    </div>
                    <div className="hidden lg:block h-8 w-auto cursor-pointer">
                      <Image
                        src="/DAEX-Badge.svg"
                        alt="Workflow"
                        width={256}
                        height={32}
                      />
                    </div>
                  </div>
                </Link>
                {user && (
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <Link key={item.name} href={item.href}>
                          <a
                            className={classNames(
                              isActive(item.href)
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:text-white",
                              "px-3 py-2 rounded-md text-sm"
                            )}
                            aria-current={
                              isActive(item.href) ? "page" : undefined
                            }
                          >
                            {item.name}
                          </a>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                {user && (
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          className="h-8 w-8 rounded-full"
                          src="/User-Icon.svg"
                          alt="User Icon"
                          height={24}
                          width={24}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                )}
                {!user && (
                  <div className="hidden sm:block sm:ml-6">
                    <Link href="/login">
                      <a className="text-white p-2 rounded mr-4">Login</a>
                    </Link>
                    <Link href="/register">
                      <a className="text-black bg-turquoise-blue p-2 rounded">
                        Register
                      </a>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {!user && (
                <>
                  <Link href="/login">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium bg-gray-900 text-white"
                      aria-current={isActive("/login") ? "page" : undefined}
                    >
                      Login
                    </a>
                  </Link>
                  <Link href="/register">
                    <a
                      className="block px-3 py-2 rounded-md text-base font-medium bg-turquoise-blue text-black"
                      aria-current={isActive("/register") ? "page" : undefined}
                    >
                      Register
                    </a>
                  </Link>
                </>
              )}

              {user &&
                navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        isActive(item.href)
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
