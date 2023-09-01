import Card from "@/components/Card";
import Sellprompt from "@/components/Sellprompt";
import { useState } from "react";
import { useSelector } from "react-redux";
import Dropzone from "@/components/Dropzone";

export default function Profile({ products }) {
  const [showSellPrompt, setShowSellPrompt] = useState(false);

  const handleSellPrompt = () => {
    setShowSellPrompt((prev) => !prev);
  };

  const handleSell = () => {};

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-yellow-300 px-16 py-5 my-3 rounded-2xl">
        <div className="text-xl font-serif font-semibold">Welcome user</div>
        <div className="text-lg font-serif">email: mail@mail.com</div>
        <div>
          <button
            onClick={handleSellPrompt}
            className="w-full mt-3 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
          >
            Sell
          </button>
        </div>
      </div>
      <div className="bg-red-200 text-center">
        <p className="text-sm font-semibold">My Products</p>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-2 gap-6 mx-auto md:grid-cols-3">
            {products.map((product) => {
              return <Card key={product.id} myProfile={true} />;
            })}
          </div>
        </div>
      </div>
      {showSellPrompt ? (
        <Sellprompt handleSellPrompt={handleSellPrompt} type="add" />
      ) : null}
      <Dropzone />
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let products = [];
  const authToken = ctx.req.cookies.authToken;
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/myshop`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "authToken": authToken,
    },
  }).then(async (res) => {
    return res.json().then((response) => {
      console.log(response);
      products = response.products;
    });
  });
  return {
    props: {
      products,
    },
  };
}
