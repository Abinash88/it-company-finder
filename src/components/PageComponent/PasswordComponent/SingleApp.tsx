"use client";

import { MyAppDataTypes } from "@/Data/Types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Div from "@/lib/Div";
import { InputField } from "@/components/UI/UiItems";
import { BsThreeDots } from "react-icons/bs";
import PopupMenu from "./SmallComponent/PopupMenu";

const SingleApp = ({
  data,
  index,
}: {
  data: MyAppDataTypes;
  index: number;
}) => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Div
      className="h-[150px] w-full flex flex-row relative cursor-pointer
     group justify-start px-2 items-center gap-4  rounded-md bg-gray-50  "
    >
      <Div className="flex items-center">
        <Div className="w-[50px] h-full">
          <InputField type="checkbox" className=" " />
        </Div>
        <Div className="w-[50px] h-[50px]  rounded-full">
          <Link target="_blank" href={data?.link}>
            <Image
              src={data?.image}
              className="rounded-md size-full"
              width={500}
              height={500}
              alt={data?.name + "image"}
            />
          </Link>
        </Div>
      </Div>

      <Div className=" h-full  backdrop-blur-5   top-[-12px] rounded-md  left-0">
        <Div className="h-full mt-5 flex flex-col gap-1 ">
          <h2 className="text-[13px] text-gray-600 font-light">Facebook</h2>
          <h3 className="text-[11px] text-gray-600 font-normal">Password Catagory : <b className="text-gray-400 "> Website Url</b> </h3>
        </Div>
      </Div>
      <Div className=" h-full flex-1 flex relative justify-end backdrop-blur-5 rounded-md  ">
        <Div className="h-full pr-5 flex flex-row   gap-2 items-center ">
          <BsThreeDots onClick={() => { setToggleMenu(!toggleMenu) }} className="text-gray-500  p-[7px] text-[30px] rounded-full hover:bg-gray-100 " />
        </Div>
        {toggleMenu &&
          <Div className="absolute w-[100px] rounded-sm h-[120px] bg-white shadow-lg right-[50px] top-4 z-40">
            <Div onClick={() => {setToggleMenu(false)}} className="fixed top-0 left-0 right-0 w-full h-screen z-20"></Div>
            <PopupMenu />
          </Div>
        }
      </Div>
    </Div>
  );
};

export default SingleApp;
