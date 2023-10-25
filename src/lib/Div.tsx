import React, { HTMLProps } from "react";

const Div:React.FC<HTMLProps<HTMLDivElement>> = (props ) => {
  return <div {...props}>{props.children}</div>;
};

export default Div;
