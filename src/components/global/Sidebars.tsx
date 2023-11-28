import { SidebarData } from "@/Data/StaticData";
import { SidebarDataTypes } from "@/Data/Types";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Div from "@/lib/Div";

const Sidebars = () => {
  const location = usePathname();

  return (
    <Div className="w-full h-full ">
      <Div className="h-full">
        <ul className="  h-full ">
          {SidebarData?.map((item: SidebarDataTypes, index) => {
            return (
              <li
                key={index}
                className={`flex  rounded-md duration-300 transition-all my-3 ${
                  location === (item?.link) && "bg-gray-100"
                } hover:bg-gray-100 group cursor-pointer w-full items-center `}
              >
                <Link
                  className="text-gray-600 px-4 py-2  w-full h-full flex items-center space-x-3 font-semibold duration-300 transition-all text-[15px] group-hover:text-gray-600"
                  href={item?.link}
                >
                  <span className="text-gray-600 text-[22px] duration-300 transition-all group-hover:text-gray-600">
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
