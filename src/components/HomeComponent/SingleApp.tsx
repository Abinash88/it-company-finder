"use client";

import { MyAppDataTypes } from "@/Data/Types";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Div from "@/lib/Div";
import PopUpPassword from "./SmallComponent/PopUpPassword";

const SingleApp = ({
  data,
  index,
}: {
  data: MyAppDataTypes;
  index: number;
}) => {
  // const setpasswordBtn = useRef<HTMLButtonElement | null>(null);

  const [PopupData, setPopupData] = useState<MyAppDataTypes | null>(null);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  return (
    <Div
      className="h-[150px] flex flex-col space-y-3 relative cursor-pointer
     group justify-center items-center  rounded-md bg-gray-50"
    >
      <Div className="w-[50%] h-[50%] mx-auto  rounded-full">
        <Link target="_blank" href={data?.link}>
          <Image
            src={data?.image}
            className="rounded-full"
            alt={data?.name + "image"}
          />
        </Link>
      </Div>
      <Div className=" w-full  backdrop-blur-5   top-[-12px] rounded-md  left-0">
        <Div className="">
          <button
            id="setpasswordBtn"
            onClick={() => {
              setIsOpenPopup(!isOpenPopup);
            }}
            className="block mx-auto py-1 mt-2 px-4 text-[13px]
            rounded-md setPasswordBg hover:bg-gray-200 bg-gray-100
              transition-all duration-300 text-gray-600 font-semibold"
          >
            Set Password
          </button>
        </Div>
      </Div>
      {isOpenPopup ? (
        <PopUpPassword
          closeModelBox={setIsOpenPopup}
          index={index}
          PopupData={data}
        />
      ) : null}
    </Div>
  );
};

export default SingleApp;
