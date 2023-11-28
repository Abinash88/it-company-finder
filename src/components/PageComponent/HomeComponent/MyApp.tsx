"use client";

import { MyAppDataTypes } from "@/Data/Types";
import React, { useContext } from "react";
import SingleApp from "./SingleApp";
import Div from "@/lib/Div";
import MyContext from "@/components/context/MyContext";

const MyApp = () => {
  const MyAppData = useContext(MyContext);

  return (
    <Div className="w-full h-full">
      <div
        className={`${
          MyAppData?.loadingUserData ? "" : "hidden"
        } z-50 fixed w-full h-screen top-0 left-0 right-0 bg-white`}
      ></div>
      <Div className="w-full overflow-auto overflowstyle px-4 myAppGrid h-full ">
        {MyAppData?.SocialData?.map((data: MyAppDataTypes, index) => {
          return <SingleApp key={data?.id} index={index} data={data} />;
        })}
      </Div>
    </Div>
  );
};

export default MyApp;
