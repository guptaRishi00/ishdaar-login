import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";

function Wrapper({ children }) {
  return (
    <div className="flex  justify-between px-5 py-5 gap-8">
      <div className="mt-20 w-[43%]">
        <Header title={"Password Recovery"} link={"/register"} />
        {children}
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

export default Wrapper;
