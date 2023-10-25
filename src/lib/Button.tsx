import React, { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children:ReactNode;
}

const Button = (props:ButtonProps ) => {
  return <button {...props}>{props.children}</button>;
};

export default Button;
