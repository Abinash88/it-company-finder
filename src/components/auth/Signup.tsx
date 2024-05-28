import Div from "@/lib/Div";
import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Image from "next/image";

const Signup = () => {
  const contextdata = useContext(MyContext);
  const [signUpDetails, setSignUpDetails] = useState<{
    name: string;
    email: string;
    password: string;
  }>({
    name: "",
    email: "",
    password: "",
  });
  const [isPasswordSeen, setIsPasswordSeen] = useState<boolean>(false);

  const setSignUpData: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSignUpDetails((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  return (
    <Div className="w-full  h-full px-5 pt-7 ">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          contextdata?.signUpPostRequest(signUpDetails);
        }}
        className="w-full"
      >
        <h3 className="text-center text-[25px] font-extrabold text-gray-400">
          SignUp
        </h3>
        <Div className="flex flex-col mb-4 space-y-2 ">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="signName"
          >
            UserName
          </label>
          <input
            id="signName"
            type="text"
            value={signUpDetails.name}
            onChange={(e) => setSignUpData(e)}
            name="name"
            placeholder="User Name"
            required
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>

        <Div className="flex flex-col mb-4 space-y-2 ">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="signupEmail"
          >
            Email
          </label>
          <input
            id="signupEmail"
            type="email"
            value={signUpDetails.email}
            onChange={(e) => setSignUpData(e)}
            name="email"
            placeholder="Email"
            required
            className="px-4 py-2 focus:outline-none bg-gray-50 "
          />
        </Div>
        <Div className="flex flex-col relative space-y-1">
          <label
            className="text-[15px] font-normal text-gray-600"
            htmlFor="signPassword"
          >
            Password
          </label>
          <input
            id="signPassword"
            value={signUpDetails.password}
            onChange={(e) => setSignUpData(e)}
            name="password"
            type={isPasswordSeen ? "text" : "password"}
            required
            placeholder="Password"
            className="pl-4 pr-8 py-2  focus:outline-none bg-gray-50 "
          />
          <Div
            onClick={() => setIsPasswordSeen(!isPasswordSeen)}
            className="absolute cursor-pointer right-4 top-8"
          >
            {isPasswordSeen ? (
              <AiFillEyeInvisible className="text-gray-600 text-[22px]" />
            ) : (
              <AiFillEye className="text-gray-600 text-[22px]" />
            )}
          </Div>
        </Div>
        <button
          className="px-6 py-2 mt-6 mx-auto flex justify-center bg-blue-600 text-white rounded-md w-full hover:bg-blue-700"
        >
          {contextdata?.signUpLoading ? (
            <Image src={"/loading.gif"} alt="" width={25} height={25} />
          ) : (
            <span> Submit</span>
          )}
        </button>
        <h4 className="text-center  mt-5">or</h4>
      </form>
    </Div>
  );
};

export default Signup;
