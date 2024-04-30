"use client";

import { MyAppDataTypes } from "@/Data/Types";
import React, { useContext, useState } from "react";
import SingleApp from "./SingleApp";
import Div from "@/lib/Div";
import MyContext from "@/components/context/MyContext";
import Image from "next/image";
import PopUpPassword from "./SmallComponent/PopUpPassword";
import Button, { InputField } from "@/components/UI/UiItems";
import { FaPlus, FaSearch } from "react-icons/fa";
import { cn } from "@/lib/utils";

const MyApp = () => {
  const MyAppData = useContext(MyContext);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  return (
    <Div className="w-full h-full overflowstyle overflow-y-auto">
      <Div className="w-full h-[90px]">
        <Div className="w-full flex items-center gap-3 pr-4">
          <Button icon={<FaPlus className="text-[16px]" />}
            ButtonClick={() => { setIsOpenPopup(!isOpenPopup) }} size="md" variant={'default'}
            className="text-[12px] flex gap-2 " btnName="Add" />
          <Div className="flex items-center gap-2">
            <InputField type="search" className="" placeholder="Search Password" />
            <FaSearch className="text-[20px] cursor-pointer text-gray-500 "/>
          </Div>
        </Div>
        <Div className={cn(`w-full fixed z-20 h-full left-0  transition-all ${isOpenPopup ? 'top-[0px]' : 'top-[150%]'} right-0 `)}>

          <Div className="w-full h-full ">
            <PopUpPassword
              closeModelBox={setIsOpenPopup}
            />
          </Div>
        </Div>
      </Div>
      <Div className="w-full  gap-2 flex flex-col  h-[87%] ">
        {MyAppData?.SocialData?.map((data: MyAppDataTypes, index) => {
          return <SingleApp key={data?.id} index={index} data={data} />;
        })}
      </Div>
    </Div>
  );
};

export default MyApp;
