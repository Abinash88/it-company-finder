import dynamic from "next/dynamic";
const MyApp = dynamic(
  () => import("@/components/PageComponent/HomeComponent/PasswordContainer")
);
import React from "react";

const page = () => {

  return (
    <div className="w-full h-full">
      
    </div>
  );
};

export default page;
