import { _TModal } from '@/types/extended';
import PopUpPassword from '../PageComponent/PasswordComponent/SmallComponent/password-form';

export type ModalDataTypes = 'ADD_PASSWORD_FORM';

export const MODAL_DATA: { [key in ModalDataTypes]: _TModal } = {
  ADD_PASSWORD_FORM: {
    component: PopUpPassword,
    title: 'Add Password',
    description: '',
    className: '',
    variant: 'form',
  },
};
