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
import { ControllerRenderProps } from 'react-hook-form'
import { PasswordValidationTypes } from '@/lib/schema/schema.password'

type CustomSelectTypes = {
  options: { value: string; label: string }[]
  field: ControllerRenderProps<PasswordValidationTypes>
  className?: string
}

export const CustomSelect = ({
  options,
  field,
  className,
}: CustomSelectTypes) => {
  return (
    <Select value={field?.value} onValueChange={field.onChange}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a fruit' />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          {options?.map((item) => (
            <SelectItem key={item?.value} value={item?.value}>
              {item?.value}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
