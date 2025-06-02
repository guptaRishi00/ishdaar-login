import React from "react";
import Left from "./login/left";
import Header from "./Header";
import Carousel from "./Carousel";
import Login from "../pages/Login";

function LoginWrapper() {
  return (
    <div className="flex items-center justify-between px-5 py-5 gap-8">
      <div className="bg-yellow-500 w-[43%]">
        <Header title={"Create a New Account"} link={"/register"} />
        <Login />
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

export default LoginWrapper;
