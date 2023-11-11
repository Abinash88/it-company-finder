import Spacing from "@/components/UI/Spacing";
import TitleBox from "@/components/UI/TitleBox";
import Div from "@/lib/Div";
import React, { ReactNode } from "react";
import SettingLinks from "./SettingLinks";
import RootLayout from "@/app/layout";

const SettingMain = () => {
  return (
    <RootLayout>
      <Div className="w-[95%] h-[95%] p-5 mx-auto rounded-md bg-gray-100">
        <TitleBox
          dynamicStyle="bg-gray-200 px-3 py-1 rounded-sm"
          title="Settings"
        />
        <Spacing space="h-[20px]" />
        <Div className="w-full flex h-full">
          <SettingLinks />
          <Div></Div>
        </Div>
      </Div>
    </RootLayout>
  );
};

export default SettingMain;
