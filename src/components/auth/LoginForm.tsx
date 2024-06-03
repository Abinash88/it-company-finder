
'use client'

import Div from "@/lib/Div";
import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import Topheader, { AuthInputBox, BottomText, EyeToggle, MoreLogin, OrComponent, SubmitButton } from "./auth-component";

const LoginForm = () => {
  const contextdata = useContext(MyContext);
  const [loginDetails, setLoginDetails] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [isPasswordSeen, setIsPasswordSeen] = useState<boolean>(false);

  const setLoginUpData: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setLoginDetails((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  return (
    <Div className="w-full h-full px-10 pt-3 ">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          contextdata?.loginPostRequest(loginDetails);
        }}
        className="w-full"
      >
        <Topheader title="Login Here" subtitle="Welcome back please login here..." />
        <MoreLogin />
        <br />
        <OrComponent />
        <br />
        <Div className="flex flex-col gap-3">
          <AuthInputBox onChange={(e) => { setLoginUpData(e) }} name="email" label="Email" placeholder="Email" type="email" />
          <Div className="relative">
            <AuthInputBox onChange={(e) => { setLoginUpData(e) }} name="password" placeholder="password" label="Password" type="password" />
            <EyeToggle isPasswordSeen={isPasswordSeen} setIsPasswordSeen={setIsPasswordSeen} />
          </Div>
        </Div>
        <Div className="flex flex-col relative space-y-1">
          <br />
          <SubmitButton />
          <br />
          <OrComponent />
          <BottomText text="Don't have a account?" type="signup" />
        </Div>

      </form>

    </Div>
  );
};

export default LoginForm;
