import { VariantTypes } from './global';

export interface _TModal {
  component: React.ComponentType;
  title?: string;
  description?: string;
  className: string;
  variant: VariantTypes;
  dirty?: boolean;
}
