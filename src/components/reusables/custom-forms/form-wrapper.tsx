import { FormControl, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
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
}: InputFieldWrapperType) => {}

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
          <FormLabel className={cn(``)}>
            {label}
            {required && <span className='text-gray-500'>*</span>}
          </FormLabel>
        )}
        <FormControl>{children}</FormControl>
        <FormMessage/>
      </FormItem>
    </>
  )
}

export default FormWrapper
