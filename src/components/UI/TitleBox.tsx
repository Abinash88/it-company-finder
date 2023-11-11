import Div from "@/lib/Div";
import React from "react";

export type TitleBoxTypes = {
  title: string;
  dynamicStyle: string;
};

const TitleBox = ({ title, dynamicStyle }: TitleBoxTypes) => {
  return (
    <Div className="">
      <h3 className={`${dynamicStyle}  block  text-[18px] font-semibold text-slate-500`}>{title}</h3>
    </Div>
  );
};

export default TitleBox;
