"use client";

import { MyAppDataTypes, password } from "@/Data/Types";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import MyContext from "../context/MyContext";
import { FaEdit, FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import { OutClickToggle } from "@/lib/page";
import Div from "@/lib/Div";
import MoreBox from "./SmallComponent/MoreBox";
import PasswordBox from "./SmallComponent/PasswordBox";
import PopUpPassword from "./SmallComponent/PopUpPassword";

const SingleApp = ({
  data,
  index,
}: {
  data: MyAppDataTypes;
  index: number;
}) => {
  const setpasswordBtn = useRef<HTMLButtonElement | null>(null);

  const [PopupData, setPopupData] = useState<MyAppDataTypes | null>(null);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
 

  const openModelBox = (data:MyAppDataTypes | null, bool:boolean) => {
    setPopupData(data)
    setIsOpenPopup(bool);
  }

  const closeModelBox = () => {
    setIsOpenPopup(false);
  }


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
            ref={setpasswordBtn}
            onClick={() =>{
              openModelBox(isOpenPopup ? null:data, !isOpenPopup)
            }}
            
            className="block mx-auto py-1 mt-2 px-4 text-[13px]
            rounded-md setPasswordBg hover:bg-gray-200 bg-gray-100  transition-all duration-300 text-gray-600 font-semibold"
          >
            Set Password
          </button>
        </Div>
      </Div>
      {
        isOpenPopup && <PopUpPassword setpasswordBtn={setpasswordBtn} closeModelBox={closeModelBox} index={index} PopupData={PopupData}/>
      }
      {/* <div
        ref={passwordOutBox}
        id="PasswordOutBox"
        className={`${
          OpenPasswordBox ? "" : "hidden"
        } fixed cursor-normal flex bg-red-500 items-center justify-center  z-20 w-full h-screen transparentBg top-[-12px] left-0`}
      >
        <div
          ref={RemovePasswordBox}
          id="RemovingPasswordBox"
          className="h-[470px] p-4  rounded-md w-[450px] popupPasswrodBox "
        >
          <h2 className="text-center border-b pb-1  font-semibold text-purple-700 text-[17px]">
            Set New Password
          </h2>
          <Div
            className={`${
              data?.passwords.length >= 3
                ? "h-[160px] overflow-auto overflowstyle"
                : "h-auto"
            } w-full flex flex-col items-start  mt-5 `}
          >
            {data?.passwords?.map((item: password, id) => {
              return (
                <div key={id}>
                  <PasswordBox item={item} />
                </div>
              );
            })}
          </Div>
          <Div className="">
            <Div className="mt-5 flex flex-col relative">
              <label
                className="text-[13px] text-start text-gray-500"
                htmlFor="PassWordName"
              >
                Password Name
              </label>
              <input
                type="text"
                id="PassWordName"
                value={passwordName}
                onChange={(e) => {
                  setPasswordName(e.target.value);
                }}
                className="py-3 text-[13px] px-3 pr-10 rounded-lg bg-transparent shadow-lg
                 shadow-gray-300 border focus:outline-none mt-1"
                placeholder="Password Name"
              />
            </Div>
            <Div className="mt-3 flex flex-col relative">
              <label
                className="text-[13px] text-start text-gray-500"
                htmlFor="addPassword"
              >
                Password
              </label>

              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="addPassword"
                value={password}
                type={ShowPassword ? "text" : "password"}
                className="py-3 px-3 text-[13px] pr-10 rounded-lg bg-transparent shadow-lg
                 shadow-gray-300 border focus:outline-none mt-1"
                placeholder="Eg. A3u-ioVa_343"
              />
              <Div
                onClick={() => setShowPassword(!ShowPassword)}
                className="absolute right-[10px] cursor-pointer text-gray-500 top-[58%]"
              >
                {ShowPassword ? (
                  <FaEyeSlash className="" />
                ) : (
                  <FaEye className="" />
                )}
              </Div>
            </Div>
          </Div>

          <Div className=""></Div>
          <button
            onClick={() => {
              MyAppData?.GetSavePassword(password, passwordName, index);
            }}
            className="px-6 py-2 flex space-x-2 items-center rounded-md 
             hover:bg-purple-700 text-[13px] font-normal text-purple-700
              hover:text-white mx-auto border border-purple-300 mt-5 transition-all duration-300"
          >
            <FaPlus className=" " />
            <span> Add Password</span>
          </button>
        </div>
      </div> */}
    </Div>
  );
};

export default SingleApp;
