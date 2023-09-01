import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.products);

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between border-b py-3"
            >
              <span className="text-lg">{item.name}</span>
              <span className="text-lg">${item.price.toFixed(2)}</span>
              <button
                className="text-red-500 hover:text-red-700"
                // onClick={}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xl font-semibold">
          Total Price: ${}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
