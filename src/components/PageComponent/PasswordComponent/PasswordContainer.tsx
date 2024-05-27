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
import UseHandleSearch from "@/components/Hooks/use-handle-search";

const PasswordContainer = () => {
  const MyAppData = useContext(MyContext);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [text, setText] = useState('');
  const { searched } = UseHandleSearch<MyAppDataTypes>({ searchText: text, data: MyAppData?.SocialData || [], searchItem: 'name' })
  return (
    <Div className="w-full h-full ">
      <Div className="w-full px-6 flex items-center  h-[50px]">
        <PageTitle title="Add Password" />
      </Div>
      <Div className="h-[calc(100vh-100px)] bg-background rounded-tr-lg">
        <Div className="w-full px-6 py-4   ">
          <GlobalTopSearch setText={setText} isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
          <Div className={cn(`w-full fixed z-20 h-full left-0  transition-all ${isOpenPopup ? 'top-[0px]' : 'top-[150%]'} right-0 `)}>

            <Div className="w-full h-full ">
              <PopUpPassword
                closeModelBox={setIsOpenPopup}
              />
            </Div>
          </Div>
        </Div>
        <Div className="w-full h-full overflowstyle overflow-y-auto">
          <Div className="px-6 gap-2 flex flex-col ">
            {searched?.map((data: MyAppDataTypes, index) => {
              return <SingleApp key={data?.id} index={index} data={data} />;
            })}
          </Div>
        </Div>

      </Div>
    </Div>
  );
};

export default PasswordContainer;
