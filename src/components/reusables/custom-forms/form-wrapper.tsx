import { FormControl, FormItem, FormMessage } from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import React from 'react'

type InputFieldWrapperType = {
  error: string
  label: string
  name: string
  required: boolean
  className: string
  children: React.ReactNode
}

export const InputFieldWrapper = ({
  error,
  label,
  name,
  required,
  className,
  children,
}: InputFieldWrapperType) => {
  return(
    <fieldset className={cn(`flex flex-col gap-y-1`, className)}>
      {label && 
      <Label
        htmlFor={name}
        className='text-sm font-normal flex items-start gap-x-[0.5px]'
        required={required}
      >{label}</Label>
      }
      <div>{children}</div>
      {error && <p className='text-xs text-red-500'>{error}</p> }
    </fieldset>
  )
}

type FormWrapperTypes = {
  label?: string
  children: React.ReactNode
  className?: string
  required?: boolean
}

const FormWrapper = ({
  label,
  children,
  className,
  required,
}: FormWrapperTypes) => {
  return (
    <>
      <FormItem className={cn(`space-y-2`, className)}>
        {label && (
          <Label className={cn(``)}>
            {label}
            {required && <span className='text-gray-500'>*</span>}
          </Label>
        )}
        <FormControl>{children}</FormControl>
        <FormMessage/>
      </FormItem>
    </>
  )
}

export default FormWrapper

