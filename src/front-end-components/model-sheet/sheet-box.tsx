import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '../ui/sheet';
import { cn } from '@/lib/utils';
import { SheetDirection } from '@/types/extended';

interface SheetDialogTypes {
  children: React.ReactNode;
  toggleModal?: boolean;
  title?: string;
  description?: string;
  className?: string;
  side?: SheetDirection;
  close: () => void;
}

const SheetBox = ({
  children,
  toggleModal,
  description,
  title,
  className,
  side,
  close,
}: SheetDialogTypes) => {
  return (
    <Sheet open={toggleModal} onOpenChange={close}>
      <SheetContent side={side} className={cn('h-screen overflow-y-auto ', className)}>
        {title && <SheetTitle>{title}</SheetTitle>}
        {description && <SheetDescription>{description}</SheetDescription>}
        <SheetHeader></SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};

export default SheetBox;
