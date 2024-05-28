import React, { HTMLProps } from "react";

interface DivTypes extends React.AllHTMLAttributes<HTMLDivElement> { }



const Div = React.forwardRef<HTMLDivElement, DivTypes>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />
});

export default Div;