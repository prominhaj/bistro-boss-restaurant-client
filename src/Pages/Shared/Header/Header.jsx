import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Link, NavLink } from "react-router-dom";
import header_logo from "../../../assets/header-logo.png";
import { TiShoppingCart } from "react-icons/ti";
import { Badge } from "primereact/badge";

const Header = () => {
  const navigation = [
    { name: "Home", to: "/" },
    { name: "Contact Us", to: "/contact" },
    { name: "Dashboard", to: "/dashboard" },
    { name: "Our Menu", to: "/menu" },
    { name: "Our Shop", to: "/shop" },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <header className="fixed z-50 w-full">
      <Disclosure as="nav" className="bg-neutral-900 bg-opacity-50 py-6">
        {({ open }) => (
          <>
            <div className="container mx-auto px-5">
              <div className="relative flex items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white bg-gray-700 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center lg:justify-between">
                  <div className="flex items-center">
                    <Link to="/">
                      <img
                        className="lg:max-w-[220px] max-w-[160px] h-auto"
                        src={header_logo}
                        alt="Your Company"
                      />
                    </Link>
                  </div>
                  <div className="hidden lg:block">
                    <div className="flex items-center gap-3">
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.to}
                          className={({ isActive, isPending }) =>
                            isPending
                              ? "pending"
                              : isActive
                              ? "text-yellow-300 text-xl font-bold font-['Inter'] uppercase"
                              : "text-white text-xl font-bold font-['Inter'] uppercase"
                          }
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button className="bg-[#006837] relative p-[5px] rounded-full border border-[#F7931E]">
                    <TiShoppingCart className="text-white text-3xl" />
                    <span className="absolute -bottom-2">
                      <Badge value="0" severity="danger"></Badge>
                    </span>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-4">
                    <div>
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                </div>
              </div>
            </div>

            <Disclosure.Panel className="lg:hidden">
              <div className="container mx-auto space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-yellow-300 bg-gray-900 rounded-md px-3 py-2 text-base font-medium block font-['Inter'] uppercase"
                        : "text-white rounded-md px-3 py-2 font-medium text-base block font-['Inter'] uppercase"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Header;
