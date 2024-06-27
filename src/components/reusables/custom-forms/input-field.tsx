import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import FormWrapper from './form-wrapper'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { SearchIcon } from 'lucide-react'
import { formatNumber } from '@/lib/helper'
import Div from '@/lib/Div'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

type InputFieldType = {
  label?: string
  type?:
    | 'text'
    | 'textarea'
    | 'email'
    | 'password'
    | 'number'
    | 'date'
    | 'time'
    | 'file'
    | 'search'
  required?: boolean
  disabled?: boolean
  className?: string
  placeholder?: string
  name: string
  error?: string
  register?: UseFormRegisterReturn
  onChange?: (e: React.WheelEventHandler<HTMLInputElement>) => void
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
)

const InputField = ({
  type,
  name,
  className,
  disabled,
  error,
  label,
  placeholder,
  required,
  ...rest
}: InputFieldType) => {
  const [ShowPassword, setShowPassword] = useState<boolean>(false)

  const inputFormType = () => {
    switch (type) {
      case 'textarea':
        return (
          <Textarea
            {...rest.register}
            id={rest.register?.name || name}
            name={name}
            placeholder={placeholder}
            disabled={disabled}
            rows={5}
            className={cn(error && 'border border-red-500')}
            {...(rest as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        )
      case 'search':
        return (
          <div className='border flex items-center rounded-md gap-3'>
            <SearchIcon className='' />
            <Input
              {...rest.register}
              id={rest.register?.name || name}
              name={name}
              {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          </div>
        )
      default:
        return (
          <div className={cn(type === 'password' ? `relative ` : ``)}>
            <Input
              name={name}
              id={rest.register?.name || name}
              placeholder={placeholder}
              disabled={disabled}
              type={ShowPassword ? 'text' : type}
              {...rest.register}
              {...(rest as React.InputHTMLAttributes<HTMLInputElement>)}
              {...(type === 'number' && {
                onKeyDown: formatNumber,
                onWheel: (e): void => {
                  e.currentTarget.blur()
                },
              })}
            />
            {type === 'password' && (
              <Div
                onClick={() => setShowPassword(!ShowPassword)}
                className='absolute right-[10px] cursor-pointer text-gray-500 top-[30%]'
              >
                {ShowPassword ? (
                  <FaEyeSlash className='' />
                ) : (
                  <FaEye className='' />
                )}
              </Div>
            )}
          </div>
        )
    }
  }

  return (
    <FormWrapper required={required} label={label} className={className}>
      {inputFormType()}
    </FormWrapper>
  )
}

export default InputField
