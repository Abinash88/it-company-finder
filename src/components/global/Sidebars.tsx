import { SidebarData } from "@/Data/StaticData";
import { SidebarDataTypes } from "@/Data/Types";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Div from "@/lib/Div";

const Sidebars = () => {
  const location = usePathname();

  return (
    <Div className="w-full h-full bg-sidebar">
      <Div className="h-full pt-3 ">
        <Link href={"/dashboard"} className="">
          <h3 className=" text-[20px] px-4  inline text-gray-50  font-semibold">
            Personal Manager
          </h3>
        </Link>

        <ul className=" flex flex-col gap-1 pt-4">
          {SidebarData?.map((item: SidebarDataTypes, index) => {
            return (
              <li
                key={index}
                className={`flex  rounded-md duration-300 transition-all ${location === (item?.link) && "bg-sidebar-foreground text-"
                  } hover:bg-sidebar-foreground group cursor-pointer w-full items-center`}
              >
                <Link
                  className="text-white px-4 py-2 w-full h-full flex items-center space-x-3 font-normal duration-300 transition-all text-[13px] "
                  href={item?.link}
                >
                  <span className="text-white text-[18px] duration-300 transition-all ">
                    {item?.icon}
                  </span>
                  <span>{item?.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Div>
    </Div>
  );
};

export default Sidebars;
