import Div from "@/lib/Div";
import { IconType } from "react-icons";
import React, { ReactNode } from "react";
import Link from "next/link";

export type buttonTypes = {
  btnName: string;
  btnCss: string;
  ButtonClick: () => void;
  icon: ReactNode;
  href: string;
};

function Button({
  btnName,
  btnCss,
  ButtonClick,
  icon,
}: Omit<buttonTypes, "href">) {
  return (
    <Div className="">
      <button onClick={ButtonClick} className={`${btnCss} rounded-md  flex `}>
        <span className="text-[20px] text-gray-600">{icon}</span>
        <span className="text-[16px] text-gray-500 font-semibold">
          {btnName}
        </span>
      </button>
    </Div>
  );
}

export default Button;

export function LinkBtn({
  btnName,
  btnCss,
  ButtonClick,
  icon,
  href,
}: buttonTypes) {
  return (
    <Div className="">
      <Link
        href={href}
        onClick={ButtonClick}
        className={`${btnCss} rounded-md flex`}
      >
        <span className="text-[20px] text-gray-600">{icon}</span>
        <span className="text-[16px] text-gray-500 font-semibold">
          {btnName}
        </span>
      </Link>
    </Div>
  );
}

export interface InputField extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const InputField = React.forwardRef<HTMLButtonElement, InputField>(({ ...props }) => {

  return (
    <input {...props} />
  )
})

InputField.displayName = 'InputField'