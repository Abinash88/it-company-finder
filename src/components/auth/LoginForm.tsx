import Div from "@/lib/Div";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  return (
    <Div className="w-full  h-full px-5 pt-7 ">
      <form action="" className="w-full  ">
        <h3 className="text-center text-[25px] font-extrabold text-gray-400">Login</h3>
        <Div className="flex flex-col mb-4 space-y-2 ">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="Email"
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>
        <Div className="flex flex-col  space-y-1">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>
        <button className="px-6 py-2 mt-6 mx-auto block bg-blue-600 text-white rounded-md w-full hover:bg-blue-700">
          Submit
        </button>
        <h4 className="text-center  mt-5">or</h4>
      </form>

      <Div className="flex flex-col space-y-2 justify-start mt-2">
        <button className="flex items-center justify-center px-8 rounded-md py-2 bg-gray-200  space-x-3">
          <FcGoogle className="" />
          <span> Login with Google</span>
        </button>

        <button className="flex items-center justify-center px-8 rounded-md py-2 bg-gray-200  space-x-3">
          <FaFacebook className="text-blue-600" />
          <span> Login with Facebook</span>
        </button>
      </Div>
    </Div>
  );
};

export default LoginForm;
