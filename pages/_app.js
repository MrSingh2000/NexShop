import LoadingLayout from "@/components/LoadingLayout";
import Navbar from "@/components/Navbar";
import { showToast } from "@/helpers";
import { store } from "@/state/store";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }) {
  const Router = useRouter();
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Provider store={store}>
        <Navbar />
        <LoadingLayout loading={loading}>
          <Component {...pageProps} />
        </LoadingLayout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Provider>
    </>
  );
}
