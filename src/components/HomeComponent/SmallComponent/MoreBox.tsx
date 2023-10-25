"use client";

import { password } from "@/Data/Types";
import Button from "@/lib/Button";
import { OutClickToggle } from "@/lib/page";
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { FaEdit, FaMapPin, FaTrash } from "react-icons/fa";

export type moreBtnTypes = {
  closeModel: () => void;
  MoreBoxData: password | null;
  moreButton: React.RefObject<HTMLButtonElement>;
};

const MoreBox = forwardRef((props: moreBtnTypes) => {
  const moreBoxes = useRef<HTMLDivElement>(null);

  useEffect(() => {
    OutClickToggle(moreBoxes, props.moreButton, props.closeModel);
  }, [props]);

  return (
    <div
      ref={moreBoxes}
      className={` flex flex-col justify-center  absolute w-[100px]
       h-auto border py-1 z-10 right-9  rounded-sm top-0 bg-white shadow-lg`}
    >
      <Button className="flex hover:bg-black group hover:text-white py-1 items-center justify-start pl-2 space-x-1">
        <FaTrash className="text-gray-500 group-hover:text-red-500 text-[20px]   transition-all duration-300 p-1 rounded-full" />
        <span className="text-[13px]">Delete</span>
      </Button>

      <Button className="flex hover:bg-black hover:text-white py-1  items-center justify-start pl-2 space-x-1">
        <FaEdit className="text-gray-500 text-[20px]  transition-all duration-300 p-1 rounded-full" />
        <span className="text-[13px]">Edit</span>
      </Button>

      <Button className="flex hover:bg-black hover:text-white py-1  items-center justify-start pl-2 space-x-1">
        <FaMapPin className="text-gray-500 text-[20px]   transition-all duration-300 p-1 rounded-full" />
        <span className="text-[13px]">Pin</span>
      </Button>
    </div>
  );
});

MoreBox.displayName = "MoreBox";

export default MoreBox;
