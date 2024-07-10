import React, { ComponentProps, forwardRef } from 'react'
import Select, { GroupBase, SelectInstance } from 'react-select'

type TProps = ComponentProps<typeof Select>

export const CustomReactSelect = forwardRef<
  SelectInstance<unknown, boolean, GroupBase<unknown>>,
  TProps
>(({ ...props }, ref) => {
  return (
    <Select
      ref={ref}
      menuPortalTarget={document.body}
      styles={{
        menuPortal: (base) => ({
          ...base,
          zIndex: 999,
          pointerEvents: 'all',
        }),
      }}
      {...props}
    />
  )
})

CustomReactSelect.displayName = 'CustomReactSelect'
