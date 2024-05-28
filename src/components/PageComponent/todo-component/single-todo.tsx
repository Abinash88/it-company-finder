"use client";

import { PasswordMoreToolTypes } from "@/Data/Types";
import React from "react";
import Div from "@/lib/Div";
import { InputField } from "@/components/UI/UiItems";
import { HiOutlineTrash } from "react-icons/hi2";
import { BiDuplicate } from "react-icons/bi";
import { FaRegCopy, FaRegEdit, FaRegStar } from "react-icons/fa";
import { MdDragIndicator } from "react-icons/md";
import { copyToClipboard } from "@/lib/utils";
import PopupMenu from "../PasswordComponent/SmallComponent/PopupMenu";
import { TodoDataTypes } from "@/BackendLib/lib/types";

const SingleTodo = ({
  data,
  // setNotePopup
}: {
  data: TodoDataTypes;
  // setNotePopup: React.Dispatch<React.SetStateAction<StaticNotesDataTypes | undefined>>
}) => {

  const handleEdit = () => {
  }

  const NotesMoreTool: PasswordMoreToolTypes[] = ([
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
      className="h-[100px] w-full flex my-3 flex-row relative cursor-pointer
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
      </Div>

      <Div className=" h-full  backdrop-blur-5 top-[-12px] rounded-md  left-0">
        <Div onClick={() => { }} className="h-full mt-5 flex flex-col gap-1 ">
          <h2 className="text-[15px] text-gray-600 font-normal">{data?.name}</h2>
          <p className="text-[11px]   w-[80%] text-gray-600 font-normal">{data?.description.substring(0, 200)}... </p>
        </Div>
      </Div>
      <Div className=" flex-1 flex gap-4 px-4 items-center justify-end ">
        <FaRegCopy onClick={() => { copyToClipboard(data?.description) }} className="text-gray-600 
        hover:bg-gray-100 text-[22px] rounded-md p-[3px]" />
        <PopupMenu tools={NotesMoreTool} />
        <MdDragIndicator className="text-[25px] !text-gray-500 ml-5 rotate-[90deg] mx-[-2px]" />
      </Div>
    </Div>
  );
};

export default SingleTodo;
