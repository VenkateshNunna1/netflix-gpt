import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { validation } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handleSignIn = () => {
    return setIsSignIn(!isSignIn);
  };
  useEffect(() => {
    console.log("venky");
    return console.log("rey");
  });
  const handleSubmit = () => {
    const emailMsg = validation.emailValidation(email.current.value);
    const passwordMsg = validation.passwordValidation(password.current.value);
    console.log(emailMsg);
    console.log(passwordMsg);
    setEmailError(emailMsg);
    setPasswordError(passwordMsg);
    if (emailMsg && passwordMsg) {
      console.log("ganesh");
      return;
    }
    if (isSignIn) {
      console.log("hello", isSignIn);
      console.log("venkatesh");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in

          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
        });
    }
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
        <form
          className="w-[400px] h-[540px] bg-black bg-opacity-80 absolute  py-8 px-10   mt-20 rounded-md"
          onSubmit={(event) => {
            return event.preventDefault();
          }}
        >
          <h1 className="text-white text-4xl font-bold opacity-100">
            {isSignIn ? "Sign Up" : "Sign In"}
          </h1>
          {isSignIn ? (
            <input
              type="text"
              placeholder="Name"
              className="w-full px-2 py-3 mt-10 mb-2 rounded-sm bg-black bg-opacity-10 border border-gray-500 text-white"
            />
          ) : (
            ""
          )}

          <input
            type="text"
            placeholder="Email or Mobile Number"
            ref={email}
            className={
              isSignIn
                ? "my-2  w-full px-2 py-3  rounded-sm bg-black bg-opacity-10 border border-gray-500 text-white"
                : "mt-10 mb-2 w-full px-2 py-3  rounded-sm bg-black bg-opacity-10 border border-gray-500 text-white"
            }
            onChange={() => {
              const emailMsg = validation.emailValidation(email.current.value);
              setEmailError(emailMsg);
            }}
          />
          <p className="text-red-600">{emailError}</p>

          <input
            type="password"
            ref={password}
            placeholder="Password"
            className="w-full px-2 py-3 mt-2 mb-2 rounded-sm  bg-black bg-opacity-10 border border-gray-500 text-white"
            onChange={() => {
              const passwordMsg = validation.passwordValidation(
                password.current.value
              );
              setPasswordError(passwordMsg);
            }}
          />
          <p className="text-red-600">{passwordError}</p>
          {isSignIn && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-2 py-3 mt-2 mb-3 rounded-sm  bg-black bg-opacity-10 border border-gray-500 text-white"
            />
          )}

          <button
            className="bg-red-700 w-full p-2 text-white font-semibold rounded-sm"
            onClick={handleSubmit}
          >
            {isSignIn ? "Sign up " : "Sign in "}
          </button>
          <h1 className="text-white my-10 cursor-pointer">
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
