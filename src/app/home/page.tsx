import MyContext from "@/components/context/MyContext";
import dynamic from "next/dynamic";
const MyApp = dynamic(
  () => import("@/components/PageComponent/HomeComponent/MyApp")
);
import React, { useContext } from "react";

const page = () => {

  return (
    <div className="w-full bg-red-500 h-full">
      <MyApp />
    </div>
  );
};

export default page;
