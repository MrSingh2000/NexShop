import Card from "@/components/Card";
import Sellprompt from "@/components/Sellprompt";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Profile({ products }) {
  const dispatch = useDispatch();
  const authToken = useSelector((store) => store.authToken.value);
  const user = useSelector((store) => store.user);
  const router = useRouter();
  if(typeof window !== "undefined" && !authToken){
    if(!localStorage.getItem('authToken'))
      router.push('auth/signin');
    else
      dispatch(updateAuthToken(localStorage.getItem('authToken')));
  }
  const [showSellPrompt, setShowSellPrompt] = useState(false);

  const handleSellPrompt = () => {
    setShowSellPrompt((prev) => !prev);
  };
  console.log('user: ', user)

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="bg-pink-300 font-serif px-16 py-5 my-3 rounded-2xl text-white">
        <div className="text-xl font-serif font-semibold">Welcome {user.name}</div>
        <div className="text-lg font-serif">email: {user.email}</div>
        <div>
          <button
            onClick={handleSellPrompt}
            className="w-full mt-3 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition duration-300"
          >
            Sell
          </button>
        </div>
      </div>
      <div className="bg-pink-100 rounded-xl text-center">
        <p className="text-sm font-semibold">My Products</p>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
          <div className="grid w-full grid-cols-2 gap-6 mx-auto md:grid-cols-3">
            {products.map((product) => {
              return <Card key={product._id} product={product} myProfile={true} />;
            })}
          </div>
        </div>
      </div>
      {showSellPrompt ? (
        <Sellprompt handleSellPrompt={handleSellPrompt} type="add"/>
      ) : null}
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
      products = response.products;
    });
  });
  return {
    props: {
      products,
    },
  };
}
