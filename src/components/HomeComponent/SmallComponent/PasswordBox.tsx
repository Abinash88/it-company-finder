import Div from "@/lib/Div";
import React, { useRef, useState } from "react";
import { FaEdit } from "react-icons/fa";
import MoreBox from "./MoreBox";
import { password } from "@/Data/Types";

const PasswordBox = ({ item }: { item: password }) => {
  const moreButton = useRef(null);
  const [OpenMoreBox, setOpenMoreBox] = useState<boolean>(false);
  const [MoreBoxData, setMoreBoxData] = useState<password | null>(null);

  const openModel = (data: password | null, bool: boolean) => {
    setMoreBoxData(data);
    setOpenMoreBox(bool);
  };

  const closeModel = () => {
    setOpenMoreBox(false);
  };

  return (
    <Div className="w-full  bg-red-100 flex items-center justify-between my-1 py-4  px-4 rounded-md">
      <h5 className="text-gray-600 text-[16px] w-1/2 font-semibold">
        {item.password}
      </h5>
      <Div className="flex items-center  relative space-x-1">
        <button ref={moreButton}>
          <FaEdit
            onClick={() => {
              openModel(OpenMoreBox ? null : item, !OpenMoreBox);
            }}
            className="text-gray-500 text-[29px] p-2 transition-all duration-300 hover:bg-gray-200 rounded-full"
          />
        </button>
        {OpenMoreBox && (
          <MoreBox closeModel={closeModel} MoreBoxData={MoreBoxData} moreButton={moreButton}/>
        )}
      </Div>
    </Div>
  );
};

export default PasswordBox;
