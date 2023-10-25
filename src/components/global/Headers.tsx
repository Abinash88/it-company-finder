import Div from "@/lib/Div";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Headers = () => {
  return (
    <Div className="w-full h-[60px] border-b border-gray-300 ">
      <Div className="w-full h-full px-4 flex justify-between items-center">
        <Link href={"/"}>
          <h3 className="border-b-2 inline border-blue-600 text-blue-600 font-semibold">
            Password Manager
          </h3>
        </Link>

        <Div className="w-[60%]">
          <Div className="w-full relative ">
            <BsSearch className="absolute top-3 left-2 text-[20px] text-gray-600 cursor-pointer" />
            <input
              type="text"
              className="w-full pr-4 pl-10 text-gray-700 text-[15px] py-2 rounded-md bg-gray-50 focus:outline-none"
              placeholder="Search here..."
            />
          </Div>
        </Div>

        <Div className="account">
          <Div className="w-[40px] bg-white rounded-full cursor-pointer h-[40px]">
            <Image
              src={"/defaultuser.jpeg"}
              width={100}
              height={100}
              className="rounded-full"
              alt="Default user"
            ></Image>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Headers;
