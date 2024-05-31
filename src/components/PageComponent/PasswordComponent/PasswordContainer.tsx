"use client";

import { MyAppDataTypes } from "@/Data/Types";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import SingleApp from "./single-password";
import Div from "@/lib/Div";
import MyContext from "@/context/MyContext";
import PasswordForm from "./SmallComponent/password-form";
import { cn } from "@/lib/utils";
import GlobalTopSearch from "./SmallComponent/GlobalTopSearch";
import PageTitle from "@/components/UI/page-title";
import UseHandleSearch from "@/Hooks/use-handle-search";
import { DragEndEvent } from "@dnd-kit/core";


const PasswordContainer = () => {
  const MyAppData = useContext(MyContext);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [text, setText] = useState('');
  const { searched } = UseHandleSearch<MyAppDataTypes>({ searchText: text, data: MyAppData?.SocialData || [], searchItem: 'name' })
  const [searchData, setSearchData] = useState<MyAppDataTypes[]>([]);

  useEffect(() => {
    setSearchData(searched)
  }, [searched]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = searched.findIndex(item => item.id === active.id);
      const newIndex = searched.findIndex(item => item.id === over?.id);

      setSearchData((items) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(oldIndex, 1);
        updatedItems.splice(newIndex, 0, movedItem);
        return updatedItems;
      });
    }
  };




  return (
    <Div className="w-full h-full">
      <Div className="w-[90%] mx-auto px-6 py-2 flex items-center  justify-center my-6 ">
        <PageTitle title="Password" />
      </Div>
      <Div className=" bg-background rounded-tr-lg">
        <Div className="w-full px-6 py-4">
          <GlobalTopSearch setText={setText} isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
          <Div className={cn(`w-full fixed z-20 h-full transition-all ${isOpenPopup ? 'right-[0px]' : 'right-[-150%]'} top-0 `)}>

            <Div className="w-full h-full ">
              <PasswordForm
                closeModelBox={setIsOpenPopup}
              />
            </Div>
          </Div>
        </Div>
        <Div className="w-full px-6">
          {searchData?.map((data: MyAppDataTypes) =>
          (
            <SingleApp data={data} />
          )
          )}
        </Div>
      </Div>
    </Div>
  );
};

export default PasswordContainer;
