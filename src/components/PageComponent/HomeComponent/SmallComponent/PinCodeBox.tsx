import React, { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";

export type pincodeBoxTypes = {
  setShowPinCodeBox: React.Dispatch<React.SetStateAction<boolean>>;
  showPinCodeBox:boolean;
};

const PinCodeBox = ({ setShowPinCodeBox,showPinCodeBox }: pincodeBoxTypes) => {
  const [pinCode, setPinCode] = useState(["", "", "", ""]);
  const pinInputs: React.MutableRefObject<HTMLInputElement | null>[] = [
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
    useRef<HTMLInputElement | null>(null),
  ];
  

  useEffect(() => {
    pinInputs[0].current?.focus();
  },[showPinCodeBox])

  const GetThePinCode = (value: string, index: number) => {
    if (/^\d*$/.test(value) && value.length <= 1) {
      setPinCode((item) => {
        const newpins = [...item];
        newpins[index] = value;

        if (index < 3 && value?.length === 1) {
          pinInputs[index + 1]?.current?.focus();
        } else if (index > 0 && value?.length === 0) {
          pinInputs[index - 1]?.current?.focus();
        }

        return newpins;
      });
    }
  };

  useEffect(() => {
    if (pinCode.join("").length === 4) {
      console.log("pin submmited");
    }
  }, [pinCode]);

  return (
    <div
      className={` flex flex-col justify-center  absolute 
     border py-1 z-10  h-full w-full rounded-sm right-[50%] 
    translate-y-[-50%] transform translate-x-[50%]  top-[50%]
       items-center bgColorDark shadow-lg`}
    >
      <div
        onClick={() => setShowPinCodeBox(!showPinCodeBox)}
        className="absolute top-2 right-3 transform  text-gray-100  p-2 rounded-full transition duration-300 rotate-[140deg] hover:bg-gray-200"
      >
        <FaPlus className="text-gray-100 hover:text-gray-600 text-[19px]" />
      </div>
      <div className="w-[80%]  flex flex-col items-center justify-center">
        <div className="items-center mb-5">
          <h4 className="text-center font-semibold text-white text-[18px]">
            Enter the Pin code
          </h4>
          <h6 className="text-center text-white font-light text-[13px]">
            To see the password
          </h6>
        </div>
        <form action="" className="flex items-center space-x-2">
          {pinCode?.map((item, index) => {
            return (
              <div key={index} className="w-[40px] h-[20px]">
                <input
                  ref={(input) => (pinInputs[index].current = input)}
                  type="number"
                  name="first"
                  onChange={(e) => {
                    GetThePinCode(e.target.value, index);
                  }}
                  value={item}
                  className="w-full py-1 pl-3 text-[18px] border-2 outline-none"
                />
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

export default PinCodeBox;
