import { SidebarData } from "@/Data/StaticData";
import { SidebarDataTypes } from "@/Data/Types";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Div from "@/lib/Div";
import { cn } from "@/lib/utils";
import { HiBars3BottomLeft } from "react-icons/hi2";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SidebarLink from "./sidebar-link";
import MyContext from "@/context/MyContext";

const Sidebars = () => {
  const location = usePathname();
  const router = useRouter();
  const toggle = useContext(MyContext);

  useEffect(() => {
    router.prefetch('/account');
  })

  return (
    <Div className={cn(` overflow-hidden hover:w-[250px] ${toggle?.toggleSidebar ? 'w-[70px]' : 'w-[250px]'}  transition-all duration-500 h-full shadow-xl relative bg-background`)}>
      <Div className="h-full pt-3 ">
        <Div className="flex h-[50px] justify-between items-center ">
          <Link href={"/dashboard"} className="flex flex-col items-center justify-center  w-[120px]">
            <Image src={'/white-logo.png'} alt="logo" width={500} height={500} className="size-full object-contain" />
          </Link>
        </Div>

        <ul className=" flex flex-col gap-1 pt-8">
          {SidebarData?.map((item: SidebarDataTypes) => (
            <SidebarLink item={item} key={item?.name} />
          ))}
        </ul>
      </Div>
    </Div >
  );
};

export default Sidebars;
