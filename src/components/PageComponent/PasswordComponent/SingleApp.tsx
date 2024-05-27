"use client";

import { MyAppDataTypes, PasswordMoreToolTypes } from "@/Data/Types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Div from "@/lib/Div";
import { InputField } from "@/components/UI/UiItems";
import PopupMenu from "./SmallComponent/PopupMenu";
import { HiOutlineTrash } from "react-icons/hi2";
import { BiDuplicate } from "react-icons/bi";
import { FaRegCopy, FaRegEdit, FaRegStar } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { MdLaunch } from "react-icons/md";
import { FaStar } from "react-icons/fa6";

const SingleApp = ({
  data,
  index,
}: {
  data: MyAppDataTypes;
  index: number;
}) => {

  const handleEdit = () => {
    alert('Edit')
  }

  const PasswordMoreTool: PasswordMoreToolTypes[] = ([
    {
      name: 'Edit',
      icon: <FaRegEdit />,
      clickFunc: handleEdit,
    },
    {
      name: 'Delete',
      icon: <HiOutlineTrash />,
      clickFunc: () => { }
    },
    {
      name: 'Duplicate',
      icon: <BiDuplicate />,
      clickFunc: () => { }
    },
    {
      name: 'Copy',
      icon: <FaRegCopy />,
      clickFunc: () => { }
    },
  ]);

  return (
    <Div
      className="h-[100px] w-full flex flex-row relative cursor-pointer
     group justify-start px-2 items-center gap-4  rounded-md bg-card"
    >
      <Div className="flex items-center">
        <Div className="w-[50px] flex flex-col gap-4 items-start justify-center h-full">
          <InputField type="checkbox" className="w-4 h-4" />
          <Div>
            <FaRegStar className="text-[18px] text-gray-500 " />
            {/* <FaStar className="text-[18px] text-blue-600"/> */}
          </Div>
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
          <h2 className="text-[15px] text-gray-600 font-normal">Facebook</h2>
          <h3 className="text-[11px] text-gray-600 font-normal">Password Catagory : <b className="text-gray-400 "> Website Url</b> </h3>
        </Div>
      </Div>
      <Div className=" flex-1 flex gap-4 px-4 items-center justify-end ">
        <FaRegCopy className="text-gray-600" />
        <MdLaunch className="text-gray-600" />
        <PopupMenu tools={PasswordMoreTool} />
        <MdDragIndicator className="text-[25px] !text-gray-500 ml-5 rotate-[90deg] mx-[-2px]" />
      </Div>
    </Div>
  );
};

export default SingleApp;
