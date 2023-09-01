import Card from "@/components/Card";
import { updateLoading } from "@/state/slices/loadingSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

export default function Products({products}) {
  // const [products, setProducts] = useState();
  // const dispatch = useDispatch();

  return (
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-2 gap-6 mx-auto md:grid-cols-3">
          {products.map((item) => {
            return <Card key={item.id} />;
          })}
        </div>
      </div>
  );
}

export async function getServerSideProps(ctx) {
  let products;
  const category = ctx.query.category;
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/product/get?category=${category}`, {
    method: "GET",
  }).then(async (res) => {
    return res.json().then((response) => {
      products = response.products;
    });
  });

  return {
    props: {
      products
    },
  };
}
