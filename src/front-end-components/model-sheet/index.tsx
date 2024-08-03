import React, { useMemo } from 'react';
import ModalDialog from './modal-box';
import { PopupContext } from '@/context/popup-form-context';
import { _TModal } from '@/types/extended';
import { ModalDataTypes } from './modal-data';

type MainModelTypes = {
  [key in ModalDataTypes]: _TModal;
};

const MAINMODAL = ({ ADD_PASSWORD_FORM }: MainModelTypes) => {
  console.log(ADD_PASSWORD_FORM);
  const { open, toggleModal, close, formData } = PopupContext();
  // const FormModal = component && component;
  const modalData = useMemo(() => {
    if (formData) {
    
      // Object.entries()
    }
  }, []);

  // modalData.

  return (
    <ModalDialog toggleModal={toggleModal}>
      {/* <FormModal 
      // close={close}  setIsDirty={setIsDirty} open={open} key={1}
      /> */}
      <div className=''>hello there</div>
    </ModalDialog>
  );
};

export default MAINMODAL;
