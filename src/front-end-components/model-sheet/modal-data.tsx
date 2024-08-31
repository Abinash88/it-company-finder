import { _TModal } from '@/types/extended';
import PopUpPassword from '../PageComponent/PasswordComponent/SmallComponent/password-form';

export type ModalDataTypes = 'ADD_PASSWORD_FORM' | 'UPDATE_PASSWORD_FORM';

export const MODAL_DATA: { [key in ModalDataTypes]: _TModal } = {
  ADD_PASSWORD_FORM: {
    component: PopUpPassword,
    title: 'Add Password',
    description: '',
    className: 'max-w-4xl',
    variant: 'form',
  },
  UPDATE_PASSWORD_FORM: {
    component: PopUpPassword,
    title: 'Update Password',
    description: '',
    className: '',
    variant: 'form',
  },
};
