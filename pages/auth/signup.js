import { updateAuthToken } from "@/state/slices/authTokenSlice";
import { updateLoading } from "@/state/slices/loadingSlice";
import { updateUser } from "@/state/slices/userSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function SignUp() {
  const [data, setData] = useState({ name: "", email: "", password: "" });
  const dispatch = useDispatch();
  const router = useRouter();
  const authToken = useSelector((store) => store.authToken.value);

  useEffect(() => {
    if (typeof window !== "undefined")
      if (!authToken) {
        if (localStorage.getItem("authToken")) {
          dispatch(updateAuthToken(localStorage.getItem("authToken")));
          router.push("/");
        }
      }
  }, [authToken, router]);

  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(updateLoading(true));
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: data.name,
        email: data.email,
        password: data.password,
      }),
    }).then(async (res) => {
      return res.json().then((response) => {
        if (response.error) {
          showToast(response.error, "error");
          return;
        }
        showToast("Welcome ", response.user.fullName);
        dispatch(updateAuthToken(response.authToken));
        localStorage.setItem("authToken", response.authToken);
        dispatch(
          updateUser({
            fullName: response.user.fullName,
            email: response.user.email,
          })
        );
        router.push("/");
      });
    });
    dispatch(updateLoading(false));
  };

  return (
    <>
      <section className="flex justify-center items-center">
        <div className="flex min- overflow-hidden">
          <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="w-full max-w-xl mx-auto lg:w-96">
              <div>
                <Link className="text-custom-pink text-medium" href="/">
                  NexShop
                </Link>
                <h2 className="mt-6 text-3xl font-extrabold text-custom-purple">
                  Sign up.
                </h2>
              </div>

              <div className="mt-8">
                <div className="mt-6">
                  <form className="space-y-6">
                    <div className="flex">
                      <div className="px-1">
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Full Name{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required={true}
                            placeholder="Full Name"
                            value={data.name}
                            onChange={(e) => handleChange(e)}
                            className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>
                      <div className="px-1">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-neutral-600"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-1">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required={true}
                            placeholder="Your Email"
                            value={data.email}
                            onChange={(e) => handleChange(e)}
                            className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        className="block text-sm font-medium text-neutral-600"
                      >
                        {" "}
                        Password{" "}
                      </label>
                      <div className="mt-1">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          required={true}
                          placeholder="Your Password"
                          value={data.password}
                          onChange={(e) => handleChange(e)}
                          className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          placeholder="Your password"
                          className="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"
                        />
                        <label
                          htmlFor="remember-me"
                          className="block ml-2 text-sm text-neutral-600"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>

                      <div className="text-sm">
                        <Link
                          href="/auth/signin"
                          className="font-medium text-custom-pink hover:text-custom-purple"
                        >
                          {" "}
                          Forgot your password?{" "}
                        </Link>
                      </div>
                    </div>

                    <div>
                      <button
                        onClick={(e) => handleSubmit(e)}
                        className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-pink-300 rounded-xl hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        Sign Up
                      </button>
                    </div>
                  </form>
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-neutral-600">
                        {" "}
                        Or register with NexShop{" "}
                      </span>
                    </div>
                  </div>
                  <Link href="/auth/signin">
                    <button className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-pink-300 rounded-xl hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
