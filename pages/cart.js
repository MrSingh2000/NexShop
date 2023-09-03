import { showToast } from "@/helpers";
import { updateAuthToken } from "@/state/slices/authTokenSlice";
import { removeProduct } from "@/state/slices/cartSlice";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  // authentication
  const router = useRouter();
  const authToken = useSelector((store) => store.authToken.value);

  if (typeof window !== "undefined" && !authToken) {
    if (!localStorage.getItem("authToken")) router.push("auth/signin");
    else dispatch(updateAuthToken(localStorage.getItem("authToken")));
  }
  const cart = useSelector((store) => store.cart.products);

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeProduct(item));
    showToast("Item Romoved from cart");
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6 sm:p-8 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Shopping Cart</h2>
        <table className="table-auto w-full">
          <thead className="border-b-2">
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>hidden</th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <tr key={index} className="border-b-2">
                  <td className="text-lg text-center col-span-1">
                    {item.name}
                  </td>
                  <td className="text-lg col-span-2 text-center">
                    ₹{item.price}
                  </td>
                  <td className="col-span-1 text-center">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded-lg my-2"
                      onClick={() => handleRemoveFromCart(item)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="text-center">
                  <p className="py-3 text-custom-purple">Click on Buy to add products to the cart</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <p className="mt-4 text-xl font-semibold">
          Total Price: ₹{calculateTotalPrice()}
        </p>
      </div>
    </div>
  );
};

export default ShoppingCart;
