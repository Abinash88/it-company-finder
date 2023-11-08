import Div from "@/lib/Div";
import React from "react";

export type spacingTypes = {
  spaceY: string;
};

const Spacing = ({ spaceY }: spacingTypes) => {
  return <Div className={` ${spaceY} `}></Div>;
};

export default Spacing;
