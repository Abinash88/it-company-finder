import { _TModal } from '@/types/extended';
import AddPassword from './all-modal/password-modal/add-password';

export type ModalDataTypes = 'ADD_PASSWORD_FORM' | 'UPDATE_PASSWORD_FORM';

export const MODAL_DATA: { [key in ModalDataTypes]: _TModal } = {
  ADD_PASSWORD_FORM: {
    component: AddPassword,
    title: 'Add Password',
    description: '',
    className: 'max-w-md',
    variant: 'form',
  },
  UPDATE_PASSWORD_FORM: {
    component: AddPassword,
    title: 'Update Password',
    description: '',
    className: '',
    variant: 'form',
  },
};
