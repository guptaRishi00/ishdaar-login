import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router";

function Left() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { username, password });
  };

  return (
    <div className="w-full">
      <div className="bg-white py-12">
        <div className="text-start mb-8">
          <h2 className="text-2xl font-medium text-[#013044] mb-2">
            Password Recovery
          </h2>
          <p className="text-sm text-gray-600">
            Enter your Details to access certificate dashboard
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="user@mail.com"
            />
          </div>

          <Link to={"/check-mail"}>
            <button className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-2 px-4 rounded-md font-medium hover:from-blue-600 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Left;
