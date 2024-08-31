import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../ui/dialog';
import { cn } from '@/lib/utils';

interface ModalDialogTypes {
  children: React.ReactNode;
  toggleModal?: boolean;
  title?: string;
  description?: string;
  className?: string;
  close: () => void;
}

const ModalDialog = ({
  children,
  toggleModal,
  description,
  title,
  close,
  className,
}: ModalDialogTypes) => {
  return (
    <Dialog open={toggleModal} onOpenChange={close}>
      <DialogContent className={cn('h-[90vh] overflow-y-auto', className)}>
        <DialogHeader>
          <DialogTitle>{title && title}</DialogTitle>
          <DialogDescription>{description && description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalDialog;
