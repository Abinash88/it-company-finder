import Div from "@/lib/Div";
import React, { useEffect, useRef, useState } from "react";

const SetPinVerification = () => {
  const [replaceLabel, setReplaceLabel] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const EmailRef = useRef<HTMLInputElement>(null);
  console.log(replaceLabel);

  const FocusInput = () => {
    EmailRef?.current?.focus();
  };

  // useEffect(() => {
  //   if (email.length >= 1) {
  //     setReplaceLabel(true);
  //   }
  // }, [email]);

  return (
    <Div className="h-full flex-col  flex items-center  w-[50%] mx-auto">
      <div className="mb-6 w-full">
        <h2 className="text-[24px] text-center font-normal text-gray-700 ">
          Verify email
        </h2>
      </div>
      <form
        action=""
        className="flex  w-full flex-col justify-start space-y-10 items-center space-x-2"
      >
        <div className="flex w-full items-start justify-center relative  space-y-2  flex-col">
          <label
            onClick={FocusInput}
            className={`${
              replaceLabel ? "left-[350px]" : ""
            } top-6 transition-all duration-300 text-gray-500 absolute left-4  text-[17px]  verifyLabel font-semibold`}
            htmlFor=""
          >
            Email
          </label>
          <input
            ref={EmailRef}
            type="email"
            onChange={(e) => {
              setEmail(e.target?.value);
            }}
            onBlur={() => {
              if (email.length >= 1) {
                setReplaceLabel(true);
              }else {
                setReplaceLabel(false);
              }
            }}
            onFocus={() => setReplaceLabel(true)}
            className="py-4 w-full h-full pr-[100px] bg-gray-200 verifyInput focus:outline-none rounded-sm px-4"
          />
        </div>
        <div className="mt-5">
          <button className="px-10 py-3  bg-blue-700 rounded-sm shadow-xl transform hover:scale-105 transition-all duration-300  text-white ">
            Submit
          </button>
        </div>
      </form>
    </Div>
  );
};

export default SetPinVerification;
