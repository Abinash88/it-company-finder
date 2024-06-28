import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

const CustomSheet = ({
  children,
  isOpenPopup,
  setIsOpenPopup,
  title,
  resetWhileClose,
}: {
  children: React.ReactNode
  isOpenPopup: boolean
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  resetWhileClose: () => void
}) => {
  return (
    <Sheet
      open={isOpenPopup}
      onOpenChange={() => {
        setIsOpenPopup(!isOpenPopup)
        resetWhileClose();
      }}
    >
      <SheetContent className='sm:max-w-xl h-screen overflow-auto'>
        <SheetHeader>
          <SheetTitle className=' border-b pb-2'>{title}</SheetTitle>
          <SheetDescription className=''>{children}</SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}

export default CustomSheet
