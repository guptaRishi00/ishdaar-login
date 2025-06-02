import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import Register from "../pages/Register";

function RegisterWrapper() {
  return (
    <div className="flex items-center justify-between px-5 py-5 gap-8">
      <div className="bg-yellow-500 w-[43%]">
        <Header title={"Login"} link="/" />
        <Register />
      </div>
      <div className="flex-1 h-full relative overflow-hidden py-5 flex justify-center">
        <img src="/bg.png" alt="" className="" />
        <div className="absolute bottom-25">
          <Carousel />
        </div>
      </div>
    </div>
  );
}

export default RegisterWrapper;
