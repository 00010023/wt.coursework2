import Link from "next/link";
import { useRouter } from "next/router";
import Transition from "./Transition";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Header = ({ subtitle, docsUrl }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const bulb = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
      />
    </svg>
  );
  const path = useRouter().pathname;
  const documentation = docsUrl;
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
    document.documentElement.setAttribute(
      "data-theme",
      theme === "light" ? "light" : "dark"
    );
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
      document.documentElement.setAttribute(
        "data-theme",
        theme === "light" ? "dark" : "light"
      );
    }
  };

  const homeDetectMenu = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="text-base leading-6 font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:text-gray-400 dark:focus:text-gray-600 transition ease-in-out duration-150">
            Home
          </a>
        </Link>
      );
    }
  };

  const homeDetectResponsive = () => {
    if (path !== "/") {
      return (
        <Link href="/">
          <a className="-m-3 mt-3 p-3 flex items-center space-x-3 rounded-md text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black transition ease-in-out duration-150">
            <svg
              className="flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
              />
            </svg>
            <div className="text-base leading-6 font-medium">Home</div>
          </a>
        </Link>
      );
    }
  };

  return (
    <div className="relative bg-white dark:bg-black">
      <div className="mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b border-gray-800 dark:border-gray-50 py-6 md:justify-start md:space-x-10">
          <div className="lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="flex items-center">
                <div className="text-black dark:text-white px-2 genemator-title">
                  Gendy's
                </div>
                {subtitle && (
                  <div className="text-black dark:text-white">
                    {">"} {subtitle}
                  </div>
                )}
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={switchTheme}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white focus:outline-none focus:bg-black focus:text-gray-500 dark:focus:bg-white dark:focus:text-gray-300 transition duration-150 ease-in-out mr-3"
            >
              {bulb}
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-white hover:bg-black dark:hover:text-black dark:hover:bg-white focus:outline-none focus:bg-black focus:text-gray-500 dark:focus:bg-white dark:focus:text-gray-300 transition duration-150 ease-in-out"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            {homeDetectMenu()}
            <Link href="/posts">
              <a className="text-base leading-6 font-medium text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:text-gray-400 dark:focus:text-gray-500 transition ease-in-out duration-150">
                Posts
              </a>
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <a
              href={documentation}
              target="_blank"
              className="whitespace-no-wrap text-base leading-6 font-medium genemator-title text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-200 focus:outline-none focus:text-gray-400 dark:focus:text-gray-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </a>
            <a
              onClick={switchTheme}
              className="whitespace-no-wrap text-base leading-6 font-medium genemator-title text-black dark:text-white hover:text-gray-700 dark:text-gray-200 focus:outline-none focus:text-gray-400 dark:focus:text-gray-600 select-none"
            >
              {bulb}
            </a>
          </div>
        </div>
      </div>
      <Transition
        show={menuOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg">
            <div className="rounded-lg border shadow-xs bg-white dark:bg-black">
              <div className="pt-5 pb-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-black dark:text-white genemator-title">
                      Gendy's
                    </div>{" "}
                    {subtitle && (
                      <div className="text-black dark:text-white">
                        {">"} {subtitle}
                      </div>
                    )}
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={() => setMenuOpen(false)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-white hover:text-white dark:hover:text-black hover:bg-black dark:hover:bg-white focus:outline-none focus:bg-white dark:focus:bg-black focus:text-black dark:focus:text-white transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div>
                  <nav className="grid row-gap-8">
                    {homeDetectResponsive()}
                    <Link href="/posts">
                      <a className="-m-3 mt-3 p-3 flex items-center space-x-3 rounded-md text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition ease-in-out duration-150">
                        <svg
                          className="flex-shrink-0 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
                          />
                        </svg>
                        <div className="text-base leading-6 font-medium">
                          Posts
                        </div>
                      </a>
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="space-y-6">
                  <a
                    href="https://doc.genemator.me"
                    className="w-full flex items-center justify-center px-4 py-2 border border text-base leading-6 font-medium rounded-md text-black dark:text-white genemator-title bg-transparent hover:bg-black dark:hover:bg-white hover:text-white hover:text-black focus:outline-none focus:border-white dark:focus:border-black focus:shadow-outline-white active:bg-white dark:active:bg-black transition ease-in-out duration-150"
                  >
                    @Gendy Docs
                  </a>
                  <span className="w-full flex rounded-md shadow-sm" />
                  <p className="text-center text-base leading-6 font-medium text-black dark:text-white">
                    Proudly crafted by{" "}
                    <a
                      href="https://genemator.me"
                      className="text-gray-700 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400 transition ease-in-out duration-150"
                    >
                      00010023 a.k.a Genemator
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
