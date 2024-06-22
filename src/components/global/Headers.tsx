import Div from "@/lib/Div";
import Image from "next/image";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import AccountBox from "./AccountBox";
import MyContext from "../../context/MyContext";
import { useRouter } from "next/navigation";
import { HiBars3 } from "react-icons/hi2";
import { isServer } from "@/lib/utils";

const Headers = () => {
  const [openAccountBox, setOpenAccountBox] = useState<boolean>(false);
  const removeBox = useRef<HTMLDivElement>(null);
  const accountData = useContext(MyContext);
  const router = useRouter()
  const search = useRef<HTMLInputElement | null>(null);


  useEffect(() => {
    // accountData?.GetUserData();
  }, []);



  useEffect(() => {
    if (accountData && !accountData?.userData?.data?.id) {
      // router.refresh();
      // router.push('/account')
    }
  }, [accountData, router]);


  const openAccount = () => {
    setOpenAccountBox(!openAccountBox);
  };

  const closeAccount = () => {
    setOpenAccountBox(false);
  };


  const handleCtrlShiftSKey = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
      e.preventDefault();
      console.log('ani')
      search?.current?.focus();
    }
  }, [])

  useEffect(() => {
    if (isServer()) return;
    window.addEventListener('keydown', handleCtrlShiftSKey)
    return () => window.removeEventListener('keydown', handleCtrlShiftSKey)
  }, []);

  return (
    <>
      <div
        onClick={closeAccount}
        ref={removeBox}
        className={`${!openAccountBox && "hidden"
          } absolute w-full h-screen z-10 left-0 top-0`}
      ></div>
      <Div className="w-full py-1 bg-white shadow-xl z-10 relative">
        <Div className="w-full h-full px-6 flex justify-between items-center">
          <Div className="w-[60%]">
            <HiBars3 onClick={() => { accountData?.setToggleSidebar(!accountData.toggleSidebar) }}
              className="text-gray-600 absolute  text-[26px] rounded-sm p-[1px] z-20 left-[20px] top-3 hover:bg-gray-100 cursor-pointer" />

            <Div className="w-full ml-16 relative">
              <BsSearch className="absolute top-[8px] left-2 text-[18px] text-[#415b7ffe] cursor-pointer" />
              <input
                type="search"
                ref={search}
                className="w-full pr-4 pl-10 text-gray-600 placeholder:text-gray-500 placeholder:text-[12px] 
                text-[12px] py-2 rounded-md border border-transparent focus:outline-none"
                placeholder="Search here... (ctrl+shift+s)"
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
