import React from 'react';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
  UseFormStateReturn,
} from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../form';
import { Input, type InputProps } from '../input';

interface FormInputProps<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>;
  label?: string;
  render?: (
    props: ControllerRenderProps<T, Path<T>>,
    fieldState: ControllerFieldState,
    formState: UseFormStateReturn<T>
  ) => React.ReactNode;
  name: Path<T>;
  input?: Omit<InputProps, keyof ControllerRenderProps<FieldValues, string>> & {
    disabled?: boolean;
  };
  required?: boolean;
}

const FormInput = <T extends FieldValues>({
  form,
  label,
  name,
  render,
  input,
  required,
}: FormInputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <FormItem className=''>
          <FormLabel className='flex gap-1 3xl:text-sm text-xs font-medium items-center'>
            {label}
            {required && <span className='text-red-600 '>*</span>}
          </FormLabel>
          <FormControl>
            {render ? (
              render(field, fieldState, formState)
            ) : (
              <Input {...field} {...input} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
