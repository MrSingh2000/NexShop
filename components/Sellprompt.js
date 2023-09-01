import { showToast } from "@/helpers";
import { updateLoading } from "@/state/slices/loadingSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Sellprompt(props) {
  const dispatch = useDispatch();
  const { handleSellPrompt, type } = props;
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    imageUrl: "",
  });
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const showDropdown = () => {
    setCategoryDropdown((prev) => !prev);
  };

  const handleInput = (e) => {
    setProductDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCategoryChange = (val) => {
    setProductDetails((prev) => {
      return { ...prev, category: val };
    });
    showDropdown();
  };

  const handleFile = (e) => {
    console.log(e.target.files[0]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateLoading(true));
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...productDetails,
        price: parseInt(productDetails.price),
      }),
    });
    dispatch(updateLoading(false));
    showToast("Product added!");
    handleSellPrompt();
  };

  return (
    <div className="inset-0 backdrop-blur-md fixed top-0 left-0">
      <div className="max-w-[21rem] p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800 absolute top-[10%] left-[42%]">
        {type === "delete" ? (
          <div className="w-full h-full text-center">
            <div className="flex flex-col justify-between h-full">
              <svg
                width="40"
                height="40"
                className="w-12 h-12 m-auto mt-4 text-indigo-500"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
              </svg>
              <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                Remove card
              </p>
              <p className="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
                Are you sure you want to delete this card ?
              </p>
              <div className="flex items-center justify-between w-full gap-4 mt-8">
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Delete
                </button>
                <button
                  onClick={handleSellPrompt}
                  type="button"
                  className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : type === "edit" ? (
          <div className="w-full h-full text-center">
            <div className="flex flex-col justify-between h-full">
              <svg
                width="40"
                height="40"
                className="w-12 h-12 m-auto mt-4 text-indigo-500"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"></path>
              </svg>
              <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                Remove card
              </p>
              <p className="px-6 py-2 text-xs text-gray-600 dark:text-gray-400">
                Are you sure you want to delete this card ?
              </p>
              <div className="flex items-center justify-between w-full gap-4 mt-8">
                <button
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Delete
                </button>
                <button
                  onClick={handleSellPrompt}
                  type="button"
                  className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full text-center">
            <div className="flex flex-col justify-between h-full">
              <label class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg cursor-pointer">
                Choose File
                <input onChange={(e) => handleFile(e)} type="file" class="hidden" />
              </label>
              <p className="mt-4 text-xl font-bold text-gray-800 dark:text-gray-200">
                Product Details
              </p>
              <div>
                {/* Block 1 */}
                <div className="flex items-center">
                  {/* Product Title */}
                  <div className="text-start p-1">
                    <label
                      for="name-with-label"
                      className="text-gray-700 text-lg font-mono"
                    >
                      Title
                    </label>
                    <input
                      type="text"
                      id="name-with-label"
                      className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      name="name"
                      placeholder="Product Name"
                      value={productDetails.name}
                      onChange={(e) => handleInput(e)}
                    />
                  </div>
                  {/* Product Category */}
                  <div className="relative inline-block text-left p-1 top-[13px]">
                    <div>
                      <button
                        type="button"
                        onClick={showDropdown}
                        className=" border border-gray-300 bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                        id="options-menu"
                      >
                        {productDetails.category
                          ? productDetails.category
                          : "Category"}
                        <svg
                          width="20"
                          height="20"
                          fill="currentColor"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
                        </svg>
                      </button>
                    </div>
                    {categoryDropdown ? (
                      <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1 "
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <div
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer"
                            onClick={() => handleCategoryChange("footwear")}
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Footwear</span>
                            </span>
                          </div>
                          <div
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer"
                            onClick={() => handleCategoryChange("clothing")}
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Clothing</span>
                            </span>
                          </div>
                          <div
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer"
                            onClick={() => handleCategoryChange("electronics")}
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Electronics</span>
                            </span>
                          </div>
                          <div
                            className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 cursor-pointer"
                            onClick={() => handleCategoryChange("others")}
                            role="menuitem"
                          >
                            <span className="flex flex-col">
                              <span>Others</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="text-start p-1">
                  <label
                    for="name-with-label"
                    className="text-gray-700 text-lg font-mono"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    id="name-with-label"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="description"
                    placeholder="Describe your product here."
                    value={productDetails.description}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
                <div className="text-start p-1">
                  <label
                    for="name-with-label"
                    className="text-gray-700 text-lg font-mono"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="name-with-label"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="price"
                    placeholder="₹ 0.00"
                    value={productDetails.price}
                    onChange={(e) => handleInput(e)}
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-full gap-4 mt-8">
                <button
                  onClick={(e) => handleSubmit(e)}
                  type="button"
                  className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Add
                </button>
                <button
                  onClick={handleSellPrompt}
                  type="button"
                  className="py-2 px-4  bg-white hover:bg-gray-100 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-indigo-500 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sellprompt;
