import Div from "@/lib/Div";
import React from "react";

export type spacingTypes = {
  space: string;
};

const Spacing = ({ space }: spacingTypes) => {
  return <Div className={` ${space}`}></Div>;
};

export default Spacing;
