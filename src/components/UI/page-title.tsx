import { cn } from "@/lib/utils";
import React from "react";

export interface TitleBoxTypes {
  title: string;
  className?: string;
};

const PageTitle = ({ title, className, ...props }: TitleBoxTypes) => {
  return (
    <h3 {...props} className={cn(`block text-[16px] md:text-[17px] lg:text-[24px] font-normal text-gray-700 ${className}`)}>{title}</h3>
  );
};

export default PageTitle;


