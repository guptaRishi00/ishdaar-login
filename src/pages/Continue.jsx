import React from "react";
import Wrapper from "../components/Wrapper";
import { Link } from "react-router";

function Continue() {
  return (
    <Wrapper>
      <div className="w-full">
        <div className="bg-white py-12">
          <div className="text-start mb-8">
            <h2 className="text-2xl font-medium text-[#013044] mb-2">
              Check Your Email
            </h2>
            <p className="text-sm text-gray-600">
              If an account is associated with user@mail.com, we've sent <br />
              password reset instructions to that address.
            </p>
          </div>

          <div className="space-y-6">
            <Link to={"/"}>
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md font-medium hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                Back to Login
              </button>
            </Link>

            <p className="mt-5">
              Didn’t receive an email?{" "}
              <span className="text-blue-500 cursor-pointer">Resend</span>
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Continue;
