import Div from "@/lib/Div";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Button, { LinkBtn } from "../UI/Button";
import Spacing from "../UI/Spacing";
import { FaCog, FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import MyContext from "../context/MyContext";
import { userData } from "@/Data/Types";
import { useRouter } from "next/navigation";

const AccountBox = ({
  closeAccount,
  userdata,
}: {
  closeAccount: () => void;
  userdata: userData;
}) => {
  const accountData = useContext(MyContext);
  const router = useRouter();

  const LogOutFunc = () => {
    accountData?.LogoutFunc();
    router.push("/account")
    closeAccount();
  };

  return (
    <Div className="absolute  z-10 flex p-4 right-[0px] w-[300px] h-[350px] bg-white shadow-md rounded-md">
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
        <Spacing styleCss={"h-[18px]"} />
        <Div className="w-full border-b pb-2 text-center">
          <h5 className="font-semibold  text-gray-600 text-[16px]">
            {userdata?.data?.name}
          </h5>
          <h6 className="font-normal text-gray-500 text-[14px]">
            {userdata?.data?.email}
          </h6>
        </Div>
        <Spacing styleCss={"h-[20px]"} />
        <Div className="w-full flex flex-col gap-2">
          <LinkBtn
            ButtonClick={closeAccount}
            icon={<FaUser />}
            href="/account"
            variant={'ghost'}
            className="w-full hover:bg-gray-100 pl-3 py-3 justify-start items-center space-x-3"
            btnName="Account"
          />
          <LinkBtn
            ButtonClick={closeAccount}
            href="/setting"
            variant={'ghost'}
            icon={<FaCog />}
            className="w-full hover:bg-gray-100 pl-3 py-3 justify-start items-center space-x-3"
            btnName="Setting"
          />
          <Button
            icon={<FiLogOut />}
            size='sm'
            variant={'default'}
            ButtonClick={() => {
              LogOutFunc();
            }}
            className="w-full hover:bg-gray-100 pl-3 py-3 justify-start items-center space-x-3"
            btnName="LogOut"
          />
        </Div>
      </Div>
    </Div>
  );
};

export default AccountBox;
