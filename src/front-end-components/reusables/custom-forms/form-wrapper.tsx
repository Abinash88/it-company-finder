import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/front-end-components/ui/form';
import { cn } from '@/lib/utils';
import React from 'react';

type InputFieldWrapperType = {
  error?: string;
  label?: string;
  name: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
};

export const InputFieldWrapper = ({
  error,
  label,
  name,
  required,
  className,
  children,
}: InputFieldWrapperType) => {
  return (
    <FormItem className={cn(`flex flex-col gap-y-2`, className)}>
      {label && (
        <FormLabel
          htmlFor={name}
          className='text-xs font-normal text-gray-700 flex items-start gap-x-[0.5px]'
        >
          {label}
        </FormLabel>
      )}
      <div>{children}</div>
      <FormMessage />
    </FormItem>
  );
};

type FormWrapperTypes = {
  label?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
  name?: string;
};

const FormWrapper = ({
  label,
  children,
  className,
  required,
  name,
}: FormWrapperTypes) => {
  return (
    <>
      <FormItem className={cn(`space-y-2`, className)}>
        {label && (
          <FormLabel
            htmlFor={name}
            className={cn(`font-medium text-xs 3xl:text-sm gap-[2px] flex `)}
          >
            {label}
            {required && (
              <span className='text-red-600 font-normal text-sm leading-[8px]'>
                *
              </span>
            )}
          </FormLabel>
        )}
        <FormControl>{children}</FormControl>
        <FormMessage />
      </FormItem>
    </>
  );
};

export default FormWrapper;
