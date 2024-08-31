'use client';

import React, { Fragment } from 'react';
import ModalDialog from './modal-box';
import { PopupContext } from '@/context/popup-form-context';
import { _TModal } from '@/types/extended';
import { ModalDataTypes } from './modal-data';
import SheetBox from './sheet-box';
import { UseFormReturn } from 'react-hook-form';

type MainModelTypes = {
  MODAL_DATA: {
    [key in ModalDataTypes]: _TModal;
  };
};

const MAINMODAL = ({ MODAL_DATA }: MainModelTypes) => {
  const { open, close, formData, handleDirty } = PopupContext();

  const existsModels = formData?.filter((item) => item) || [];
  const safeExtract = (
    modals: typeof MODAL_DATA,
    key: ModalDataTypes | undefined
  ) => {
    if (!key) return null;
    const matchComp = modals[key];
    return matchComp;
  };

  return existsModels?.map((item, index) => {
    const toggle = item?.isOpen;
    const data = item?.data;
    const id = item?.id;
    const key = item?.key;
    const type = item?.type;
    const side = item?.side;
    const ModelComp = key ? safeExtract(MODAL_DATA, key)?.component : Fragment;
    const modalsData = safeExtract(MODAL_DATA, key);
    // const FormModal = component && component;

    const closeModal = (closeKey?: ModalDataTypes) => {
      if (closeKey || key) {
        close(key);
      }
    };

    const handleDirtyFields = (
      form: UseFormReturn<any, unknown, undefined>
    ) => {
      if (form && key) {
        handleDirty(
          Object.keys(form.formState.dirtyFields || {}).length > 0,
          key
        );
      }
    };

    if (type === 'MODAL')
      return (
        <ModalDialog
          className={modalsData?.className}
          description={modalsData?.description}
          title={modalsData?.title}
          close={closeModal}
          key={index}
          toggleModal={toggle}
        >
          {ModelComp && (
            <ModelComp
              open={open}
              close={closeModal}
              setDirty={handleDirtyFields}
              data={data}
              initiator={id}
              key={index}
            />
          )}
        </ModalDialog>
      );

    return (
      <SheetBox close={closeModal} toggleModal={toggle} side={side} key={index}>
        {ModelComp && (
          <ModelComp
            open={open}
            close={closeModal}
            setDirty={handleDirtyFields}
            data={data}
            initiator={id}
            key={index}
          />
        )}
      </SheetBox>
    );
  });
};

export default MAINMODAL;
