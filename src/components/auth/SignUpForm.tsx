"use client";

import React, { useContext, useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import Div from "@/lib/Div";
import MyContext from "../context/MyContext";
import { useRouter } from "next/navigation";

const SignUpForm = () => {
  const contextData = useContext(MyContext);
  const [chooseLogin, setChooseLogin] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (contextData?.isSignUp && contextData?.isSignUp) {
      setChooseLogin(true);
    }
  }, [contextData?.isSignUp]);

  useEffect(() => {
    contextData?.GetUserData();
    //eslint-disable-next-line
  }, []);


  useEffect(() => {
    if (contextData?.userData && contextData?.userData?.data) {
      router.push("/")
    }
  }, [contextData?.userData, router]);

  return (
    <Div className="flex flex-col  justify-center items-center w-full h-screen">
      <Div className="w-[450px] overflow-hidden overflh p-4  h-[500px] bg-gray-100 rounded-md">
        <Div className="flex items-center justify-between">
          <button
            onClick={() => setChooseLogin(false)}
            className={`${!chooseLogin ? "border-green-600 text-green-600" : ""
              } text-gray-600 w-[50%] border-b-4 font-semibold text-[17px]`}
          >
            SIGN UP
          </button>
          <button
            onClick={() => setChooseLogin(true)}
            className={`${chooseLogin ? "border-green-600 text-green-600" : ""
              } text-gray-600 w-[50%] border-b-4 font-semibold text-[17px]`}
          >
            LOGIN
          </button>
        </Div>
        <Div className="w-full h-[90%] ">
          <Div className="w-full h-full relative flex justify-center">
            <Div
              className={`w-[450px]  ${chooseLogin ? "" : "left-[450px]"
                } absolute h-full transition duration-300`}
            >
              <LoginForm />
            </Div>
            <Div
              className={`w-[450px] ${chooseLogin ? "right-[450px]" : ""
                }  absolute h-full transition duration-300`}
            >
              <Signup />
            </Div>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default SignUpForm;
