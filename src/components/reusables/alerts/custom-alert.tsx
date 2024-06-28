import React from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface CustomAlertTypes {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  desc: string

}

const CustomAlert = ({ isOpen, setIsOpen, title, desc }: CustomAlertTypes) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title || `Are you absolutely sure?`}</DialogTitle>
          <DialogDescription>
            {desc || `This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.`}
          </DialogDescription>
          <DialogClose>Close</DialogClose>
          
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default CustomAlert
