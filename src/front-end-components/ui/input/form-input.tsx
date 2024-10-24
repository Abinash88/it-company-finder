import React from 'react';
import type {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
  UseFormStateReturn,
} from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel } from '../form';
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
  input?: InputProps;
}

const FormInput = <T extends FieldValues>({
  form,
  label,
  name,
  render,
  input,
}: FormInputProps<T>) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field, fieldState, formState }) => (
        <FormItem className=''>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {render ? (
              render(field, fieldState, formState)
            ) : (
              <Input {...field} {...input} />
            )}
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormInput;
