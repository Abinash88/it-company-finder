import Div from "@/lib/Div";
import Link from "next/link";
import React from "react";

const SettingLinks = () => {
  return (
    <Div className="w-[300px] h-full">
      <ul>
        <li>
          <Link href={"/setting/profile"}>Profile</Link>
        </li>
      </ul>
    </Div>
  );
};

export default SettingLinks;
