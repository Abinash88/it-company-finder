import { ModalDataTypes } from '@/front-end-components/model-sheet/modal-data';
import { ChildrenProps } from '@/lib/global';
import { SheetDirection } from '@/types/extended';
import React, { createContext, useContext, useState } from 'react';

export type FormProps = {
  id?: string | number;
  data?: object;
  key: ModalDataTypes;
  type: 'MODAL' | 'SHEET';
  isOpen?: boolean;
  isDirty?: boolean;
  side?: SheetDirection;
};

interface FormContextTypes {
  open: (props: FormProps) => void;
  close: (props: ModalDataTypes) => void;
  setFormData: React.Dispatch<React.SetStateAction<FormProps[]>>;
  formData: FormProps[];
  handleDirty: (dirty: boolean, key: string) => void;
}

const FormContext = createContext<FormContextTypes | null>(null);

const PopupFormContext = ({ children }: ChildrenProps) => {
  const [formData, setFormData] = useState<FormProps[]>([]);

  const open = (props: FormProps) => {
    setFormData((prev) => {
      const updateData = [...prev].filter((item) => item?.isOpen);
      return [
        ...updateData,
        {
          type: props?.type,
          data: props?.data,
          isDirty: props?.isDirty,
          id: props?.id,
          isOpen: true,
          side: props?.side,
          key: props?.key,
        },
      ];
    });
  };
  console.log(formData)
  const close = (key: ModalDataTypes) => {
    setFormData((prev) => {
      let data = [...prev];
      data = data?.map((item) => {
        if (key === item?.key) {
          return {
            ...item,
            isOpen: false,
          };
        }
        return item;
      });
      return data;
    });
  };

  const handleDirty = (dirty: boolean, key: string) => {
    setFormData((prev) => {
      let data = [...prev];
      data = data?.map((item) => {
        if (item?.key === key) {
          return { ...item, isDirty: dirty };
        }
        return item;
      });
      return data;
    });
  };

  return (
    <FormContext.Provider
      value={{
        open,
        close,
        setFormData,
        formData,
        handleDirty,
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
