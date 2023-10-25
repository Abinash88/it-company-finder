import Div from "@/lib/Div";
import React from "react";

const Signup = () => {
  return (
    <Div className="w-full  h-full px-5 pt-7 ">
      <form action="" className="w-full  ">
        <h3 className="text-center text-[25px] font-extrabold text-gray-400">
          SignUp
        </h3>
        <Div className="flex flex-col mb-4 space-y-2 ">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="name"
          >
            UserName
          </label>
          <input
            id="name"
            type="text"
            placeholder="User Name"
            required
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>

        <Div className="flex flex-col mb-4 space-y-2 ">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            required
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
            required
            placeholder="Password"
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>
        <button className="px-6 py-2 mt-6 mx-auto block bg-blue-600 text-white rounded-md w-full hover:bg-blue-700">
          Submit
        </button>
        <h4 className="text-center  mt-5">or</h4>
      </form>
    </Div>
  );
};

export default Signup;
