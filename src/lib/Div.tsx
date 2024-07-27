import React from 'react';

interface DivTypes extends React.AllHTMLAttributes<HTMLDivElement> {}

const Div = React.forwardRef<HTMLDivElement, DivTypes>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />;
});

Div.displayName = 'Div';
export default Div;
