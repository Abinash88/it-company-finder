import * as React from 'react'

import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: LucideIcon
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='w-full relative'>
        <div className=''>
          {props.icon && (
            <props.icon
              size={20}
              className='absolute opacity-65 left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground'
            />
          )}
        </div>
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            props.icon && 'pl-10',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
