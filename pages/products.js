import Card from "@/components/Card";
import {BiSolidError} from 'react-icons/bi';

export default function Products({ products }) {
  return (
    <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
      <div className="grid w-full grid-cols-2 gap-6 mx-auto md:grid-cols-3">
        {products.length > 0 ? (
          products.map((item) => {
            console.log(item);
            return <Card key={item._id} product={item} />;
          })
        ) : (
          <>
          {/* <div className="flex bg-red-900 w-full h-full"> */}
            <div className="bg-red-300 text-center absolute top-[50%] left-[35%] p-4 rounded-xl text-lg font-semibold font-mono text-white"><p className="flex gap-2 items-center">
              <BiSolidError color="yellow" size={30}/> Sorry! No products found in this category
              </p>
              <p className="text-sm">
                Register yourself and add some!
              </p>
              </div>
          {/* </div> */}
          </>
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps(ctx) {
  let products;
  const category = ctx.query.category;
  await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/get?category=${category}`,
    {
      method: "GET",
    }
  ).then(async (res) => {
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
