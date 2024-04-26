"use client";

import { MyAppDataTypes } from "@/Data/Types";
import React, { useContext } from "react";
import SingleApp from "./SingleApp";
import Div from "@/lib/Div";
import MyContext from "@/components/context/MyContext";
import Image from "next/image";

const MyApp = () => {
  const MyAppData = useContext(MyContext);

  return (
    <Div className="w-full h-full">
      <Div className="w-full overflow-auto overflowstyle px-4 myAppGrid h-full ">
        {MyAppData?.SocialData?.map((data: MyAppDataTypes, index) => {
          return <SingleApp key={data?.id} index={index} data={data} />;
        })}
      </Div>
    </Div>
  );
};

export default MyApp;
