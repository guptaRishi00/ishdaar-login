import React, { useState } from "react";
import Wrapper from "../components/Wrapper";

function VerifyMail() {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, value) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Auto-focus next input
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };
  return (
    <Wrapper>
      <div className="py-10 bg-white">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Verify Your Email
        </h1>

        <p className="text-gray-600 mb-2">
          We've sent a One-Time Password (OTP) to your{" "}
          <span className="font-medium">user@mail.com</span>
        </p>

        <p className="text-gray-600 mb-8">
          Please enter the 6-digit code below to verify your email.
        </p>

        <div className="flex gap-3">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-12 text-center text-lg font-medium border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:outline-none"
              maxLength={1}
            />
          ))}
        </div>

        <button className="mt-10 w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md font-medium hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
          Back To Log In
        </button>

        <p className="mt-4 text-sm text-gray-500 ">
          Didn't receive an email?{" "}
          <button className="text-blue-500 hover:text-blue-600 underline">
            Resend
          </button>
        </p>
      </div>
    </Wrapper>
  );
}

export default VerifyMail;
