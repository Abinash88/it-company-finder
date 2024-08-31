import { UseFormReturn } from 'react-hook-form';
import { VariantTypes } from './global';
import { FormProps } from '@/context/popup-form-context';

export interface FormModalProps<T = object> {
  component: React.ComponentType<T>;
  title: string;
  description: string;
  className: string;
  variant: VariantTypes;
}

export interface FormPropertiesTypes<T = object> {
  setDirty: (form: UseFormReturn<any, unknown, undefined>) => void;
  close: () => void;
  open: (props: FormProps) => void;
  initiator?: string | number;
  data?: T;
}

export interface _TModal<
  T extends FormPropertiesTypes<object> = FormPropertiesTypes<object>,
> {
  component: React.ComponentType<T>;
  title?: string;
  description?: string;
  className: string;
  variant: VariantTypes;
  dirty?: boolean;
}

export type SheetDirection = 'bottom' | 'left' | 'right' | 'top';
