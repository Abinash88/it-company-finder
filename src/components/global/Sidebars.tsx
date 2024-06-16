import { SidebarData } from "@/Data/StaticData";
import { SidebarDataTypes } from "@/Data/Types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Div from "@/lib/Div";
import { cn } from "@/lib/utils";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Sidebars = () => {
  const location = usePathname();
  const [toggle, setToggle] = useState(false)
  const router = useRouter();


  useEffect(() => {
    router.prefetch('/account');
  })

  return (
    <Div className={cn(` ${toggle ? 'w-[80px]' : 'w-[250px]'}  transition-all duration-500 h-full relative bg-sidebar`)}>
      <Div className="h-full pt-3 ">
        <Div className="flex h-[50px] justify-center  items-center ">
          <Link href={"/dashboard"} className="flex flex-col items-center justify-center  w-[120px]">
            <Image src={'/white-logo.png'} alt="logo" width={500} height={500} className="size-full object-contain" />
          </Link>
          <FaBars onClick={() => { setToggle(!toggle) }} className="text-gray-600 absolute top-4 text-[18px] z-20 right-[-50px] cursor-pointer" />
        </Div>

        <ul className=" flex flex-col gap-1 pt-4">
          {SidebarData?.map((item: SidebarDataTypes, index) => {
            return (
              <li
                key={index}
                className={`flex  rounded-md duration-300 transition-all ${location === (item?.link) && "bg-sidebar-foreground text-"
                  } hover:bg-sidebar-foreground group cursor-pointer w-full items-center`}
              >
                <Link
                  className={cn(` px-4 py-2 w-full h-full flex items-center  space-x-3 font-normal duration-300 transition-all text-[13px] ${toggle ? 'justify-center' : ''} transition-all duration-500 `)}
                  href={item?.link}
                >
                  <span className={cn(` text-gray-400  duration-300 transition-all ${toggle ? 'text-[20px]' : 'text-[18px]'}`)}>
                    {item?.icon}
                  </span>
                  <span className={cn(`text-gray-200 ${toggle ? 'hidden' : ''}`)}>{item?.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Div>
    </Div >
  );
};

export default Sidebars;
