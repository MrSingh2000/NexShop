import React from "react";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const LoadingLayout = ({ loading, children }) => {
  let isLoading = useSelector((store) => store.isLoading.value);
  return (
    <div>
      {/* Render loading spinner if isLoading is true */}
      {isLoading || loading ? <Loader /> : children}
    </div>
  );
};

export default LoadingLayout;
