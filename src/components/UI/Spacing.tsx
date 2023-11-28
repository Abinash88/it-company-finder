import Div from "@/lib/Div";
import React from "react";

export type spacingTypes = {
  styleCss: string;
};

const Spacing = ({ styleCss }: spacingTypes) => {
  return <Div className={` ${styleCss}`}></Div>;
};

export default Spacing;
