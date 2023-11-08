import Div from "@/lib/Div";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button, { LinkBtn } from "../UI/Button";
import Spacing from "../UI/Spacing";
import { FaCog, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

const AccountBox = ({
  closeAccount,
}: {
  closeAccount:() => void;
}) => {
  return (
    <Div className="absolute  z-10 flex  p-4 right-[0px] w-[300px] h-[350px] bg-white shadow-md rounded-md">
      <Div className="w-full h-full flex items-center flex-col">
        <Div className="">
          <Image
            src="/defaultuser.jpeg"
            width={60}
            height={60}
            className="rounded-full"
            alt="user"
          ></Image>
        </Div>
        <Spacing spaceY={"h-[18px]"} />
        <Div className="w-full border-b pb-2 text-center">
          <h5 className="font-semibold  text-gray-600 text-[16px]">
            {"Abinash Subedi"}
          </h5>
          <h6 className="font-normal text-gray-500 text-[14px]">
            {"subediabinash@gmail.com"}
          </h6>
        </Div>
        <Spacing spaceY={"h-[20px]"} />
        <Div className="w-full">
          <LinkBtn
            ButtonClick={closeAccount}
            icon={<FaUser />}
            href="/account"
            btnCss="w-full hover:bg-gray-100 pl-3 py-3 h-full items-center space-x-3"
            btnName="Account"
          />
          <LinkBtn
            ButtonClick={closeAccount}
            href="/setting"
            icon={<FaCog />}
            btnCss="w-full hover:bg-gray-100 pl-3 py-3 h-full items-center space-x-3"
            btnName="Setting"
          />
          <Button
            icon={<FiLogOut />}
            ButtonClick={closeAccount}
            btnCss="w-full hover:bg-gray-100 pl-3 py-3 h-full items-center space-x-3"
            btnName="LogOut"
          />
        </Div>
      </Div>
    </Div>
  );
};

export default AccountBox;
