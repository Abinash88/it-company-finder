import Div from "@/lib/Div";
import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import { useRouter } from "next/navigation";
import Topheader, { AuthInputBox, BottomText, EyeToggle, OrComponent, SubmitButton } from "./auth-component";

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
    <Div className="w-full  h-full px-10 pt-3 ">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          contextdata?.loginPostRequest(signUpDetails);
        }}
        className="w-full"
      >
        <Topheader title="Signup Here" subtitle="Welcome back please signup here..." />
        <br />
        <Div className="flex flex-col gap-3">
          <AuthInputBox onChange={(e) => { setSignUpData(e) }} name="name" label="User Name" placeholder="User name" type="text" />
          <AuthInputBox onChange={(e) => { setSignUpData(e) }} name="email" label="Email" placeholder="Email" type="email" />
          <Div className="relative">
            <AuthInputBox onChange={(e) => { setSignUpData(e) }} name="password" placeholder="password" label="Password" type="password" />
            <EyeToggle isPasswordSeen={isPasswordSeen} setIsPasswordSeen={setIsPasswordSeen} />
          </Div>
        </Div>
        <Div className="flex flex-col relative space-y-1">
          <br />
          <SubmitButton />
          <br />
          <OrComponent />
          <BottomText text="Already have a account?" type="login" />
        </Div>

      </form>

    </Div>
  );
};

export default Signup;
