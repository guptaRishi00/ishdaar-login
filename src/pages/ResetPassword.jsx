import React from "react";
import Wrapper from "../components/Wrapper";
import { Check } from "lucide-react";
import { Link } from "react-router";

function ResetPassword() {
  return (
    <Wrapper>
      <div className="w-full">
        <div className="bg-white py-12">
          <div className="text-start mb-8">
            <h2 className="text-2xl font-medium text-[#013044] mb-2">
              Reset Your Password
            </h2>
            <p className="text-sm text-gray-600">
              Enter your new password below, Make sure it’s strong and secure.{" "}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                New Password
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="********************"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="********************"
              />
            </div>

            <div className="max-w-2xl mx-auto pb-5 bg-white">
              {/* Horizontal Password Requirements */}
              <div className="flex items-center justify-between space-x-6">
                {/* 8 characters - completed */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-300 rounded-full">
                    <Check className="w-3 h-3 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-700">8 characters</span>
                </div>

                {/* Upper case - completed */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-300 rounded-full">
                    <Check className="w-3 h-3 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-700">Upper case</span>
                </div>

                {/* Lower case - completed */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-5 h-5 border-2 border-gray-300 rounded-full">
                    <Check className="w-3 h-3 text-gray-300" />
                  </div>
                  <span className="text-sm text-gray-700">Lower case</span>
                </div>

                {/* Special - not completed */}
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-400">Special</span>
                </div>

                {/* Number - not completed */}
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>
                  <span className="text-sm text-gray-400">Number</span>
                </div>
              </div>
            </div>

            <Link to="/verify-mail">
              <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md font-medium hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default ResetPassword;
