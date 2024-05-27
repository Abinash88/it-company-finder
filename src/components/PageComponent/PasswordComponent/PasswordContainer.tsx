"use client";

import { MyAppDataTypes } from "@/Data/Types";
import React, { useContext, useState } from "react";
import SingleApp from "./SingleApp";
import Div from "@/lib/Div";
import MyContext from "@/components/context/MyContext";
import PopUpPassword from "./SmallComponent/PopUpPassword";
import { cn } from "@/lib/utils";
import GlobalTopSearch from "./SmallComponent/GlobalTopSearch";
import PageTitle from "@/components/UI/page-title";

const PasswordContainer = () => {
  const MyAppData = useContext(MyContext);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  return (
    <Div className="w-full h-full ">
      <Div className="w-full px-6 flex items-center  h-[50px]">
        <PageTitle title="Add Password" />
      </Div>
      <Div className="h-full">
        <Div className="w-full px-6 py-4 bg-background rounded-tr-lg h-full">
          <GlobalTopSearch isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
          <Div className={cn(`w-full fixed z-20 h-full left-0  transition-all ${isOpenPopup ? 'top-[0px]' : 'top-[150%]'} right-0 `)}>

            <Div className="w-full h-full ">
              <PopUpPassword
                closeModelBox={setIsOpenPopup}
              />
            </Div>
          </Div>
        </Div>
        <Div className="w-full  overflowstyle overflow-y-auto gap-2 flex flex-col ">
          {MyAppData?.SocialData?.map((data: MyAppDataTypes, index) => {
          return <SingleApp key={data?.id} index={index} data={data} />;
        })}
        </Div>
      </Div>
    </Div>
  );
};

export default PasswordContainer;
