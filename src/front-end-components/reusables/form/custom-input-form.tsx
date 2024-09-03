import { FormField, FormItem } from '@/front-end-components/ui/form';
import React from 'react';
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from 'react-hook-form';
import InputField, { InputTypeTypes } from '../custom-forms/input-field';

interface TFormProps<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>;
  type: InputTypeTypes;
  name: Path<T>;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
}

const CustomInput = <T extends FieldValues>({
  form,
  type,
  name,
  disabled,
  placeholder,
  label,
}: TFormProps<T>) => {
  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          return (
            <FormItem>
              <InputField
                {...field}
                disabled={disabled}
                name={name}
                placeholder={placeholder}
                required
                type={type}
                label={label}
              />
            </FormItem>
          );
        }}
      />
    </div>
  );
};



export default CustomInput;
