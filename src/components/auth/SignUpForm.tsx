"use client";

import React, { useContext, useEffect, useState } from "react";
import LoginForm from "./LoginForm";
import Signup from "./Signup";
import Div from "@/lib/Div";
import MyContext from "../../context/MyContext";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const SignUpForm = () => {
  const contextData = useContext(MyContext);
  const [chooseLogin, setChooseLogin] = useState(false);
  const router = useRouter();
  const path = usePathname();
  const param = useSearchParams();
  const type = param.get('type');

  useEffect(() => {
    if (contextData?.isSignUp && contextData?.isSignUp) {
      setChooseLogin(true);
    }
  }, [contextData?.isSignUp]);

  useEffect(() => {
    if (path.includes('/account') && !type) router.replace('/account?type=login')
  }, [])

  useEffect(() => {
    if (contextData?.userData && contextData?.userData?.data) {
      router.push("/")
    }
  }, [contextData?.userData, router]);

  return (
    <Div className="flex flex-col  justify-center items-center bg-gray-100 w-full h-screen">
      <Div className="  bg-white rounded-xl">
        {/* <Div className="w-full h-[90%] "> */}
        <Div className="w-full h-full relative flex justify-center">
          <Div
            className={`w-[420px]  ${type === 'login' ? "" : "hidden"
              }  h-full  transition duration-300`}
          >
            <LoginForm />
          </Div>
          <Div
            className={`w-[420px] ${type === 'signup' ? "" : "hidden"
              }   h-full transition duration-300`}
          >
            <Signup />
          </Div>
        </Div>
        {/* </Div> */}
      </Div>
    </Div>
  );
};

export default SignUpForm;
