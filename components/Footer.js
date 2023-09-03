import React from "react";
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">NexShop</h3>
          <p className="text-sm">Your Ultimate Shopping Destination</p>
        </div>

        <div className="flex space-x-4">
          <div>
            <h4 className="text-lg font-semibold">Categories</h4>
            <ul className="mt-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Shoes
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Customer Service</h4>
            <ul className="mt-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Shipping
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white">
                  Returns
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 py-4 text-center">
        <p>&copy; {new Date().getFullYear()} NexShop. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
