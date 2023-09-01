import Card from "@/components/Card";
import { updateAuthToken } from "@/state/slices/authTokenSlice";
import { Inter } from "next/font/google";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      dispatch(updateAuthToken(localStorage.getItem("authToken")));
      document.cookie = `authToken=${localStorage.getItem('authToken')}`;
    }
  }, []);

  return (
    <div>
      <div className="p-3">
        <Image
          src={"/assets/banner1.jpg"}
          height={570}
          width={1200}
          alt="banner"
          unoptimized
          layout="responsive"
        />
      </div>
      <ul className="flex">
        <li className="p-3">
          <Image
            src={"/assets/banner5.jpg"}
            unoptimized
            layout="responsive"
            alt="banner"
            height={570}
            width={1200}
          />
        </li>
        <li className="p-3">
          <Image
            src={"/assets/banner3.jpg"}
            unoptimized
            layout="responsive"
            alt="banner"
            height={570}
            width={1200}
          />
        </li>
        <li className="p-3">
          <Image
            src={"/assets/banner4.jpg"}
            unoptimized
            layout="responsive"
            alt="banner"
            height={570}
            width={1200}
          />
        </li>
      </ul>
      <div>
        <section>
          <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
            <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-3">
              <Card />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
