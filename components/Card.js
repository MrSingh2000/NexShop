import { showToast } from "@/helpers";
import { addProduct, removeProduct } from "@/state/slices/cartSlice";
import { updateLoading } from "@/state/slices/loadingSlice";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Card({ myProfile, product, key }) {
  const dispatch = useDispatch();
  const authToken = useSelector((store) => store.authToken.value);
  const router = useRouter();
  const handleButtonClick = async () => {
    if (myProfile) {
      dispatch(updateLoading(true));
      await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/product?id=${product._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authToken: authToken,
          },
        }
      )
        .then((res) => {
          router.push("/");
          showToast(res.message);
        })
        .catch((err) => {
          showToast(err.error);
        });
      dispatch(updateLoading(false));
    } else {
      dispatch(addProduct(product));
      showToast("Product added to cart");
    }
  };

  return (
    <div
      key={key}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:border-2 hover:border-custom-pink transform transition-all duration-300 hover:scale-105"
    >
      <div className="h-[20rem] overflow-hidden flex items-center">
        <Image
          className="object-cover rounded-t-lg"
          src={product?.imageUrl}
          alt="Product"
          layout="fixed"
          width={500}
          height={300}
        />
      </div>
      <div className="px-4 py-5">
        <h1 className="text-lg font-semibold text-custom-pink mb-2">
          {product?.name}
        </h1>
        <p className="hidden md:block text-gray-600 text-sm mb-3">
          {product?.description.substr(0, 180)}...
        </p>
        <p className="block md:hidden text-gray-600 text-sm mb-3">
          {product?.description.substr(0, 80)}...
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <span className="text-custom-pink font-semibold text-lg">
            ₹{product?.price}
          </span>
          <button
            onClick={handleButtonClick}
            className="px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300"
          >
            {myProfile ? "Delete" : "Buy Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
