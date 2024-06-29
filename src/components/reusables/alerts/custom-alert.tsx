import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Image, { StaticImageData } from 'next/image'
import Button from '@/components/ui/UiItems'

interface CustomAlertTypes {
  isOpen?: boolean
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
  title?: string
  desc?: string
  cancelName?: string
  imageSrc?: string | StaticImageData;
}

const CustomAlert = ({
  isOpen,
  setIsOpen,
  title,
  desc,
  cancelName,
  imageSrc,
}: CustomAlertTypes) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='!max-w-sm'>
        <DialogHeader className='gap-3'> 
          <Image src={imageSrc || '/choose.jpg'} className='h-[240px] m-auto w-[240px]' alt='' width={900} height={900} />
          <DialogTitle className='text-center text-gray-500 text-xl'>{title || `Are you absolutely sure?`}</DialogTitle>
          <DialogDescription className='text-center '>
            {desc ||
              `This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.`}
          </DialogDescription>
          <Button size={'md'} >{cancelName || 'Confirm'}</Button>
          <DialogClose className='text-sm'>{cancelName || 'Cancel'}</DialogClose>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CustomAlert
