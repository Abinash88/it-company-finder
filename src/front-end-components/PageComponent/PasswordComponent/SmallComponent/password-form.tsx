import React, { useState } from 'react';
import Div from '@/lib/Div';
import { AiOutlinePlus } from 'react-icons/ai';

import PinCodeBox from './PinCodeBox';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { selectCategory } from '@/Data/StaticData';
import {
  AddPasswordValidation,
  PasswordValidationTypes,
} from '@/lib/schema/schema.password';
import { Form, FormField } from '@/front-end-components/ui/form';
import InputField from '@/front-end-components/reusables/custom-forms/input-field';
import FormWrapper from '@/front-end-components/reusables/custom-forms/form-wrapper';
import CustomAlert from '@/front-end-components/reusables/alerts/custom-alert';
import FileDropZone from '@/front-end-components/reusables/file-drop-zone';
import { CustomReactSelect } from '@/front-end-components/reusables/custom-select';
import { Button } from '@/front-end-components/ui/button';

export type popupPassword = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopUpPassword = (props: popupPassword) => {
  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false);
  const form = useForm<PasswordValidationTypes>({
    resolver: zodResolver(AddPasswordValidation),
    defaultValues: {
      category: 'paymentCard',
      description: 'asdfas',
      password: 'asdfasd',
      password_name: 'asdfawe',
      url: 'asdfager',
      siteImage:
        'blob:http://localhost:3000/bdeaff7a-15b3-4a6c-be0e-ed71719e2e58',
    },
  });
  const { handleSubmit, reset, setValue, watch } = form;

  const onSubmitForm: SubmitHandler<PasswordValidationTypes> = (data) => {
    console.log(data);
  };

  return (
    <div
      id='PasswordOutBox'
      className={`z-50 relative cursor-normal flex  items-end justify-end  w-full h-full`}
    >
      <Form {...form}>
        <form
          className=' z-50 p-4 rounded-sm w-full md:w-full h-full px-8 mx-auto  '
          action=''
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <Div className='flex flex-col gap-4'>
            <Div className='flex gap-4 flex-1 flex-col'>
              <Div className='flex-1 flex flex-col gap-4'>
                <FormField
                  control={form.control}
                  name='category'
                  render={({ field }) => (
                    <FormWrapper label='Password Category' required>
                      <CustomReactSelect
                        options={selectCategory}
                        {...field}
                        className=''
                      />
                    </FormWrapper>
                  )}
                />
                <Div className='flex gap-2 flex-col'>
                  <Div className='flex-1 flex flex-col gap-3'>
                    <FormField
                      control={form.control}
                      name='password_name'
                      render={({ field }) => (
                        <InputField
                          {...field}
                          name=''
                          placeholder='Password Name'
                          required
                          label='Password Name'
                        />
                      )}
                    />
                  </Div>
                  <FormField
                    control={form.control}
                    name='siteImage'
                    render={({ field }) => (
                      <FormWrapper>
                        <FileDropZone
                          {...field}
                          files={watch('siteImage') || []}
                          setFiles={(value) => {
                            setValue('siteImage', value, { shouldDirty: true });
                          }}
                        />
                      </FormWrapper>
                    )}
                  />
                </Div>
              </Div>
            </Div>

            <CustomAlert />

            <Div className='flex-1'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <InputField
                    {...field}
                    name='password'
                    type='password'
                    required
                    label='Password'
                    placeholder='Password'
                  />
                )}
              />
            </Div>

            <Div className=' flex-1'>
              <FormField
                control={form.control}
                name='url'
                render={({ field }) => (
                  <InputField
                    {...field}
                    name='url'
                    label='Url'
                    type='text'
                    required
                    placeholder='Site Url'
                  />
                )}
              />
            </Div>

            <Div className=' flex-1'>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <InputField
                    {...field}
                    type='textarea'
                    name='description'
                    label='Description'
                    placeholder='Description'
                  />
                )}
              />
            </Div>
          </Div>

          <Div className='h-8'></Div>
          <Div className='flex w-full justify-start gap-4 items-center'>
            <Button
              icon={<AiOutlinePlus className='text-[17px]' />}
              type='submit'
              variant='default'
              className='flex  items-center gap-2'
            >
              <span>Add Password</span>
            </Button>
            <Button
              type='button'
              variant='destructive'
              onClick={() => {
                props.closeModelBox(false);
              }}
            >
              Cancel
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={() => {
                reset();
              }}
            >
              Reset
            </Button>
            {showPinCodeBox && (
              <PinCodeBox
                showPinCodeBox={showPinCodeBox}
                setShowPinCodeBox={setShowPinCodeBox}
              />
            )}
          </Div>
        </form>
      </Form>
    </div>
  );
};

export default PopUpPassword;
