import Div from "@/lib/Div";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import AccountBox from "./AccountBox";
import MyContext from "../context/MyContext";
import { useRouter } from "next/navigation";

const Headers = () => {
  const [openAccountBox, setOpenAccountBox] = useState<boolean>(false);
  const removeBox = useRef<HTMLDivElement>(null);
  const accountData = useContext(MyContext);
  const router = useRouter()

  useEffect(() => {
    // accountData?.GetUserData();
  }, []);



  useEffect(() => {
    if (accountData && !accountData?.userData?.data?.id) {
      // router.refresh();
      // router.push('/account')ss
    }
  }, [accountData, router]);


  const openAccount = () => {
    setOpenAccountBox(!openAccountBox);
  };

  const closeAccount = () => {
    setOpenAccountBox(false);
  };


  return (
    <>
      <div
        onClick={closeAccount}
        ref={removeBox}
        className={`${!openAccountBox && "hidden"
          } absolute w-full h-screen   z-10 left-0 top-0`}
      ></div>
      <Div className="w-full py-1 bg-gradient-to-r  from-[#856FB4] via-primary to-[#AC72C0] ">
        <Div className="w-full h-full px-6 flex justify-between items-center">
          <Div className="w-[60%]">
            <Div className="w-full relative">
              <BsSearch className="absolute top-[8px] left-2 text-[18px] text-gray-100 cursor-pointer" />
              <input
                type="search"
                className="w-full pr-4 pl-10 text-gray-100 placeholder:text-gray-200 placeholder:text-[12px] 
                text-[12px] py-2 rounded-md bg-[#85a4cc96] focus:outline-none"
                placeholder="Search here..."
              />
            </Div>
          </Div>

          <Div className="account relative">
            <Div
              onClick={openAccount}
              className="w-[40px] bg-white rounded-full cursor-pointer h-[40px]"
            >
              <Image
                src={"/defaultuser.jpeg"}
                width={100}
                height={100}
                className="rounded-full"
                alt="Default user"
              ></Image>
            </Div>

            <Div>
              {openAccountBox && <AccountBox userdata={accountData?.userData} closeAccount={closeAccount} />}
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Headers;
