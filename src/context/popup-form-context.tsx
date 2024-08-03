import { ModalDataTypes } from '@/front-end-components/model-sheet/modal-data';
import { ChildrenProps } from '@/lib/globa';
import React, { createContext, useContext, useState } from 'react';

interface FormProps {
  id?: string | number;
  data: unknown;
  type: ModalDataTypes;
}

interface FormContextTypes {
  open: () => void;
  close: () => void;
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFormData: React.Dispatch<React.SetStateAction<FormProps | null>>;
  formData: FormProps | null;
}

const FormContext = createContext<FormContextTypes | null>(null);

const PopupFormContext = ({ children }: ChildrenProps) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [formData, setFormData] = useState<FormProps | null>(null);

  const open = () => {
    setToggleModal(true);
  };

  const close = () => {
    setToggleModal(false);
  };

  return (
    <FormContext.Provider
      value={{
        open,
        close,
        toggleModal,
        setToggleModal,
        setFormData,
        formData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const PopupContext = (): FormContextTypes => {
  const modelContext = useContext(FormContext);
  if (!modelContext) {
    throw new Error('Popup context is not wrapped in the main layout');
  }
  return modelContext;
};

export default PopupFormContext;
