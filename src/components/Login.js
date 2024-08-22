import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignIn = () => {
    return setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header></Header>
      <div>
        <img
          src={
            "https://assets.nflxext.com/ffe/siteui/vlv3/031c42b9-0c81-4db5-b980-0160765188e9/27f1b15d-79ed-43ca-8982-7faa9e4aa388/IN-en-20240819-TRIFECTA-perspective_WEB_3c576fa6-cd23-46b6-ac3f-1ad2bb0f66fb_small.jpg"
          }
          alt="background-image"
          className="h-screen w-screen absolute -z-0 "
        />
      </div>
      <div className="flex justify-center">
        <form className="w-[400px] h-[540px] bg-black bg-opacity-80 absolute  py-8 px-10   mt-20 rounded-md ">
          <h1 class="text-white text-4xl font-bold opacity-100">
            {isSignIn ? "Sign Up" : "Sign In"}
          </h1>
          {isSignIn ? (
            <input
              type="text"
              placeholder="Name"
              class="w-full px-2 py-3 mt-10 mb-2 rounded-sm bg-black bg-opacity-10 border border-gray-500 text-white"
            />
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Email or Mobile Number"
            className={
              isSignIn
                ? "my-2  w-full px-2 py-3  rounded-sm bg-black bg-opacity-10 border border-gray-500 text-white"
                : "mt-10 mb-2 w-full px-2 py-3  rounded-sm bg-black bg-opacity-10 border border-gray-500 text-white"
            }
          />
          <input
            type="password"
            placeholder="Password"
            class="w-full px-2 py-3 mt-2 mb-3 rounded-sm  bg-black bg-opacity-10 border border-gray-500 text-white"
          />
          {isSignIn ? (
            <input
              type="password"
              placeholder="Confirm Password"
              class="w-full px-2 py-3 mt-2 mb-3 rounded-sm  bg-black bg-opacity-10 border border-gray-500 text-white"
            />
          ) : (
            ""
          )}

          <button className="bg-red-700 w-full p-2 text-white font-semibold rounded-sm">
            Sign In
          </button>
          <h1 class="text-white my-10 cursor-pointer">
            {isSignIn ? "Existing User ? " : "New to Netflix ? "}
            <span
              className="text-gray-600 text-md hover:text-red-700"
              onClick={handleSignIn}
            >
              {isSignIn ? "Sign in now" : "Sign up now"}
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
