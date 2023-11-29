"use client"

import Div from "@/lib/Div";
import Image from "next/image";
import React, { useRef, useState } from "react";

const PincodeForm = () => {
    
    const [Pincode, setPincode] = useState<string[]>(["","","","",""]);

    const inputBox:React.MutableRefObject<HTMLInputElement | null>[] = [
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
        useRef<HTMLInputElement | null>(null),
    ]


    const SetThePinCode = (value:string, index:number) => {

    }

  return (
    <Div className=" w-full h-full p-5 bg-gray-100 rounded-md">
      <Div className="flex items-center flex-col w-full h-full space-y-10 justify-between ">
        <Div className="">
          <Image src={"/locked.jpg"} className="rounded-full overflow-hidden" alt="" width={200} height={200} />
        </Div>
        <Div className="h-[600px] flex justify-center w-full">
        <form action="" className="flex items-center space-x-2">
          {Pincode?.map((item, index) => {
            return (
              <div key={index} className="w-[40px] h-[20px]">
                <input
                  ref={(input) => (inputBox[index].current = input)}
                  type="number"
                  name="first"
                  onChange={(e) => {
                    SetThePinCode(e.target.value, index);
                  }}
                  value={item}
                  className="w-full py-1 pl-3 text-[18px] border-2 outline-none"
                />
              </div>
            );
          })}
        </form>
        </Div>
      </Div>
    </Div>
  );
};

export default PincodeForm;
