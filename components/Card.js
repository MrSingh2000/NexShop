import Image from "next/image";
import React from "react";

function Card({myProfile}) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-2 hover:border-custom-pink transform transition-all duration-300 hover:scale-105">
      <Image
        className="object-cover h-48 w-full rounded-t-lg"
        src="/assets/product1.jpg"
        alt="Product"
        layout="responsive"
        width={500}
        height={300}
      />
      <div className="px-4 py-5">
        <h1 className="text-lg font-semibold text-custom-pink mb-2">
          Short Headline
        </h1>
        <p className="text-gray-600 text-sm mb-3">
          Discover our collection of beautifully crafted themes and templates
          built with Tailwind CSS and Next.js.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-custom-pink font-semibold text-lg">$19.99</span>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
            {myProfile ? 'Edit' : 'Buy Now'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
