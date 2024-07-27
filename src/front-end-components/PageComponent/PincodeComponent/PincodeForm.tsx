"use client";

import Div from "@/lib/Div";
import Image from "next/image";
import React, { useRef, useState } from "react";
import SetPinVerification from "./SetPinVerification";

const PincodeForm = () => {
  const [Pincode, setPincode] = useState<string[]>(["", "", "", ""]);
  const [DoublePin, setDoublePin] = useState<string[]>(["", "", "", ""]);
  const inputBox: React.MutableRefObject<HTMLInputElement | null>[] = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];
  const DoubleinputBox: React.MutableRefObject<HTMLInputElement | null>[] = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];

  const [showChangePinBox, setShowChangePinBox] = useState<boolean>(false);

  const SetThePinCode = (value: string, index: number) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      setPincode((prev) => {
        const data = [...prev];
        data[index] = value;
        if (index < 3 && value.length === 1) {
          inputBox[index + 1]?.current?.focus();
        } else if (index > 0 && value.length === 0) {
          inputBox[index - 1]?.current?.focus();
        }
        return data;
      });
    }
  };

  // Changing the email verification and the pincode setup function
  const SetTheEmailVerification = () => {
    if (showChangePinBox) {
      return (
        <Div className="h-[600px] flex-col  flex items-center  w-full">
          <div className="mb-6">
            <h2 className="text-[22px] text-gray-400 ">Set new pincode</h2>
          </div>
          <form
            action=""
            className="flex  flex-col justify-start space-y-10 items-center space-x-2"
          >
            <div className="flex items-center space-x-2">
              {Pincode?.map((item, index) => {
                return (
                  <div key={index} className="w-[70px] h-[50px] bg-red-500">
                    <input
                      ref={(input) => (inputBox[index].current = input)}
                      type="number"
                      name="first"
                      onChange={(e) => {
                        SetThePinCode(e.target.value, index);
                      }}
                      value={item}
                      className="w-full py-1 h-full pl-7 text-[18px] border-2 outline-none"
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              <button className="px-10 py-3  bg-blue-700 rounded-sm shadow-xl transform hover:scale-105 transition-all duration-300  text-white ">
                Set Pin
              </button>
            </div>
          </form>
        </Div>
      );
    } else {
      return (
        <Div>
          <SetPinVerification />
        </Div>
      );
    }
  };

  return (
    <Div className=" w-full h-full p-5 bg-gray-100 rounded-md">
      <Div className="flex items-center flex-col w-full h-full space-y-10 justify-between ">
        <Div className="">
          <Image
            src={"/locked.jpg"}
            className="rounded-full overflow-hidden"
            alt=""
            width={200}
            height={200}
          />
        </Div>
        <Div className="h-full w-full">{SetTheEmailVerification()}</Div>
      </Div>
    </Div>
  );
};

export default PincodeForm;
