import Div from "@/lib/Div";
import { IconType } from "react-icons";
import React, { ReactNode } from "react";
import Link from "next/link";
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/lib/utils";


const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'hover:bg-primary/70 bg-primary text-primary-foreground',
        destructive:
          'hover:bg-destructive/90 bg-destructive text-destructive-foreground',
        outline:
          'border border-input bg-accent hover:bg-accent hover:text-accent-foreground',
        secondary:
          'hover:bg-secondary/80 bg-secondary text-secondary-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 text-[12px]',
        lg: 'h-12 rounded-md px-8',
        icon: 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface buttonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  btnName: string;
  ButtonClick: () => void;
  icon?: ReactNode;
  href: string;
};

const Button = React.forwardRef<HTMLButtonElement, Omit<buttonTypes, 'href'>>(({
  btnName,
  ButtonClick,
  icon,
  variant,
  className,
  size,
  ...rest
}, ref) => {
  return (
    <button ref={ref} {...rest} onClick={ButtonClick} className={cn(buttonVariants({ variant, size, className }))}>
      {icon && <span className="text-[18px] text-gray-600">{icon}</span>}
      <span className="text-[14px] font-normal text-gray-500">
        {btnName}
      </span>
    </button>
  );
})

export default Button;
Button.displayName = 'Button';


export interface LinksTypes extends React.LinkHTMLAttributes<HTMLLinkElement>, VariantProps<typeof buttonVariants> {
  btnName: string;
  ButtonClick: () => void;
  icon?: ReactNode;
  href: string;
};

export const LinkBtn = React.forwardRef<HTMLLinkElement, LinksTypes>(({
  btnName,
  ButtonClick,
  icon,
  size,
  variant,
  className,
  href,
}: LinksTypes) => {
  return (
    <Link
      href={href}
      onClick={ButtonClick}
      className={cn(buttonVariants({ size, variant, className }))}
    >
      <span className="text-[18px] text-gray-600">{icon}</span>
      <span className="text-[14px] font-normal text-gray-500">
        {btnName}
      </span>
    </Link>
  );
})


LinkBtn.displayName = 'LinkBtn';
export interface InputField extends React.InputHTMLAttributes<HTMLInputElement> {

}

export const InputField = React.forwardRef<HTMLButtonElement, InputField>(({ ...props }) => {

  return (
    <input {...props} />
  )
})

InputField.displayName = 'InputField'