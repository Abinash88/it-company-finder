import * as React from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form'
import { PasswordValidationTypes } from '@/lib/schema/schema.password'

type OptionsTypes = { value: string; label: string }

type CustomSelectTypes<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> = {
  options: OptionsTypes[]
  field: ControllerRenderProps<TFieldValues, TName>
  className?: string
  placeholder?: string
  defaultValue?: string
}

export const CustomSelect = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  options,
  field,
  className,
  placeholder,
  defaultValue,
}: CustomSelectTypes<TFieldValues, TName>) => {
  const getContent = () => {
    if (options.length) {
      return (
        <>
          {options?.map((item) => (
            <SelectItem key={item?.value} className='text-xs' value={item?.value}>
              {item?.value}
            </SelectItem>
          ))}
        </>
      )
    }
    return <p className='text-gray-600 text-sm text-center'>No options</p>
  }

  return (
    <Select
      defaultValue={defaultValue}
      value={field?.value}
      onValueChange={field.onChange}
    >
      <SelectTrigger className='w-full'>
        <SelectValue className='text-xs' placeholder={placeholder || 'Select options'} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>{getContent()} </SelectGroup>
      </SelectContent>
    </Select>
  )
}
