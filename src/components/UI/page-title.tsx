import Div from "@/lib/Div";
import { cn } from "@/lib/utils";
import React from "react";

export interface TitleBoxTypes  {
  title: string;
  className?: string;
};

const PageTitle = ({ title, className, ...props }: TitleBoxTypes) => {
  return (
      <h3 {...props} className={cn(`block text-[16px] md:text-[18px] lg:text-[20px] font-normal text-[#2C3544] ${className}`)}>{title}</h3>
  );
};

export default PageTitle;


