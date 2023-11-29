import SignUpForm from "@/components/auth/SignUpForm";
import Div from "@/lib/Div";
import React from "react";

const index = () => {
  return (
    <Div className="w-full  overflow-hidden flex-1 p-4 h-full ">
      <SignUpForm />
    </Div>
  );
};

export default index;
