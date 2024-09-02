import { FormField, FormItem } from '@/front-end-components/ui/form';
import React from 'react';
import {
  ControllerRenderProps,
  FieldValues,
  Path,
  UseFormReturn,
} from 'react-hook-form';
import InputField from '../custom-forms/input-field';

type InputType =
  | 'text'
  | 'search'
  | 'icon_search'
  | 'number'
  | 'checkbox'
  | 'textarea';

interface TFormProps<T extends FieldValues> {
  form: UseFormReturn<T, any, undefined>;
  type: InputType;
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
  const fieldRenderer = (field: ControllerRenderProps<T, Path<T>>) => {
    switch (type) {
      case 'text':
        return (
          <InputField
            {...field}
            disabled={disabled}
            name={name}
            placeholder={placeholder}
            required
            label={label}
          />
        );
    }
  };

  return (
    <div>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => {
          return <FormItem>{fieldRenderer(field)}</FormItem>;
        }}
      />
    </div>
  );
};

//  <FormWrapper label='Password Category' required>
//     <CustomReactSelect
//       options={selectCategory}
//       {...field}
//       className=''
//     />
//   </FormWrapper>

export default CustomInput;
