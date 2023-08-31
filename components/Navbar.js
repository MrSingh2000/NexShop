import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  const [openHamburger, setOpenHamburger] = useState(false);

  return (
    <>
      <div className="w-full border-b-2">
        <div className="flex flex-col p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between ">
            <Link href="/">
              <Image
                src={"/assets/logo.png"}
                height={60}
                width={60}
                alt="logo"
              />
            </Link>
            <button
              className="rounded-lg md:hidden focus:outline-none focus:shadow-outline"
              onClick={() => setOpenHamburger((prev) => !prev)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-8 h-8">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                  style={{ display: "none" }}
                ></path>
              </svg>
            </button>
          </div>

          <nav
            className={`flex-col items-center flex-grow ${
              openHamburger
                ? "block bg-pink-300 border-custom-pink absolute w-11/12 top-[70px] px-2 rounded-xl"
                : "hidden"
            } pb-4 border-blue-600 md:pb-0 md:flex md:justify-between md:flex-row lg:border-l-2 lg:pl-2`}
          >
            <div className="flex flex-col md:inline bg-transparent">
              <Link
                className="bg-transparent text-white py-5 md:border-0 border-b-2 md:px-4 md:py-2 text-lg md:text-sm mt-2 md:text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
                href="/"
              >
                Home
              </Link>
              <Link
                className="bg-transparent text-white py-5 md:border-0 border-b-2 md:px-4 md:py-2 text-lg md:text-sm mt-2 md:text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
                href="/about"
              >
                About
              </Link>
              <Link
                className="bg-transparent text-white py-5 md:border-0 border-b-2 md:px-4 md:py-2 text-lg md:text-sm mt-2 md:text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline"
                href="contact"
              >
                Contact
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 list-none lg:ml-auto md:mt-0 mt-6">
              <Link href="/auth/signin">
                <button className="items-center block px-10 py-2.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 bg-white md:bg-transparent border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Sign in
                </button>
              </Link>
              <Link href="/auth/signup">
                <button className="items-center block px-10 py-3 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign up
                </button>
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="border-b-2">
        <div className="p-5 overflow-y-auto whitespace-nowrap scroll-hidden bg-gray-50">
          <ul className="inline-flex items-center list-none">
            <li>
              <Link
                href="/products?category=all"
                className="px-4 py-1 mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=all"
                className="px-4 py-1 mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600"
              >
                Footwear
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=all"
                className="px-4 py-1 mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600"
              >
                Clothing
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=all"
                className="px-4 py-1 mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600"
              >
                Electronics
              </Link>
            </li>
            <li>
              <Link
                href="/products?category=all"
                className="px-4 py-1 mr-1 text-base text-gray-500 transition duration-500 ease-in-out transform rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600"
              >
                Others
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
