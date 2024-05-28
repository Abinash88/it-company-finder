"use client";

import { password } from "@/Data/Types";
import MyContext from "@/context/MyContext";
import { CheckPasswordCorrect } from "@/components/libary/lib";
import Button from "@/components/UI/Button";
import { OutClickToggle } from "@/lib/page";
import React, {
  useContext,
  useEffect,
  useRef,
} from "react";
import { FaEye, FaMapPin, FaTrash } from "react-icons/fa";

export type moreBtnTypes = {
  closeModel: () => void;
  setShowPinCodeBox: React.Dispatch<React.SetStateAction<boolean>>
  MoreBoxData: password | null;
  passwordIndex: number;
  boxIndex: number;
};

const MoreBox = (props: moreBtnTypes) => {
  const moreBoxes = useRef<HTMLDivElement>(null);
  const myappData = useContext(MyContext);

  useEffect(() => {
    OutClickToggle(moreBoxes, props.closeModel);
  }, [props]);


  return (
    <div
      ref={moreBoxes}
      className={` flex flex-col justify-center  absolute w-[100px]
       h-auto border py-1 z-10 right-9  rounded-sm top-0 bg-white shadow-lg`}
    >
      <Button
        onClick={() => {
          props.closeModel();
          // myappData?.DeletePassword(props.boxIndex, props.passwordIndex);
        }}
        className="flex hover:bg-black name hover:text-white py-1 items-center justify-start pl-2 space-x-1"
      >
        <FaTrash className="text-gray-500 name-hover:text-red-500 text-[20px]   transition-all duration-300 p-1 rounded-full" />
        <span className="text-[13px]">Delete</span>
      </Button>

      <Button
        onClick={() => {
          props.setShowPinCodeBox(!false);
          props.closeModel();
          CheckPasswordCorrect("string");
        }}
        className="flex hover:bg-black hover:text-white py-1  items-center justify-start pl-2 space-x-1"
      >
        <FaEye className="text-gray-500 text-[20px]  transition-all duration-300 p-1 rounded-full" />
        <span className="text-[13px]">Password</span>
      </Button>

      <Button
        onClick={() => {
          props.closeModel();
          // myappData?.DeletePassword(props.boxIndex, props.passwordIndex);
        }}
        className="flex hover:bg-black hover:text-white py-1  items-center justify-start pl-2 space-x-1"
      >
        <FaMapPin className="text-gray-500 text-[20px]   transition-all duration-300 p-1 rounded-full" />
        <span className="text-[13px]">Pin</span>
      </Button>

      <Button
        onClick={() => {
          props.closeModel();
          // myappData?.DeleteAll();
        }}
        className="flex hover:bg-black hover:text-white py-1  items-center justify-start pl-2 space-x-1"
      >
        <FaMapPin className="text-gray-500 text-[20px]   transition-all duration-300 p-1 rounded-full" />
        <span className="text-[13px]">Clear All</span>
      </Button>
    </div>
  );
};

MoreBox.displayName = "MoreBox";

export default MoreBox;
