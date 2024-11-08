import Div from '@/lib/Div';
import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import { ResponseMessageDataTypes } from '@/Data/interfaces/password.interface';
import { selectCategory } from '@/Data/StaticData';
import CustomAlert from '@/front-end-components/reusables/alerts/custom-alert';
import InputField from '@/front-end-components/reusables/custom-forms/input-field';
import FileDropZone from '@/front-end-components/reusables/drop-zone-file/file-drop-zone';
import ReactSelect from '@/front-end-components/reusables/react-select';
import { Button } from '@/front-end-components/ui/button';
import { Form, FormField } from '@/front-end-components/ui/form';
import FormInput from '@/front-end-components/ui/input/form-input';
import { PATH } from '@/lib/api-services/routes-path';
import { fetchRequest } from '@/lib/fetch';
import { headerServices } from '@/lib/helper';
import {
  AddPasswordValidation,
  PasswordValidationTypes,
} from '@/lib/schema/schema.password';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { SubmitHandler, useForm } from 'react-hook-form';
import PinCodeBox from '../../../PageComponent/PasswordComponent/SmallComponent/PinCodeBox';
import { parseToFormData } from '@/lib/utils';

export type popupPasswordTypes = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddPassword = () => {
  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false);
  const form = useForm<PasswordValidationTypes>({
    resolver: zodResolver(AddPasswordValidation),
    defaultValues: {
      category: '',
      description: '',
      password: '',
      password_name: '',
      url: '',
      siteImage: '',
    },
  });
  const { handleSubmit, reset, setValue, watch } = form;

  const { mutate } = useMutation({
    mutationFn: (data: FormData) =>
      fetchRequest<PasswordValidationTypes, ResponseMessageDataTypes<object[]>>(
        {
          url: PATH.ADD_PASSWORD,
          headers: headerServices(''),
          popup: false,
          method: 'POST',
          body: data,
        }
      ),
  });

  const onSubmitForm: SubmitHandler<PasswordValidationTypes> = (data) => {
    mutate({ ...parseToFormData(data) });
  };

  console.log(form.watch());

  return (
    <div
      id='PasswordOutBox'
      className={`z-50 relative cursor-normal flex mt-2 items-end justify-end w-full`}
    >
      <Form {...form}>
        <form
          className=' z-50 py-4 rounded-sm w-full md:w-full h-full  mx-auto'
          action=''
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <Div className='flex flex-col gap-4'>
            <Div className='flex gap-4 flex-1 flex-col'>
              <Div className='flex-1 flex flex-col gap-4'>
                <FormInput
                  form={form}
                  name='category'
                  label='Password Category'
                  render={({ ref: _ref, ...field }) => (
                    <ReactSelect {...field} options={selectCategory} />
                  )}
                />
                <Div className='flex gap-2 flex-col'>
                  <Div className='flex-1 flex flex-col gap-3'>
                    <FormInput
                      form={form}
                      name='password_name'
                      label='Password Name'
                      required
                      input={{
                        type: 'text',
                        placeholder: 'Enter password name',
                      }}
                    />
                  </Div>

                  <FormInput
                    form={form}
                    name='siteImage'
                    label='Image'
                    render={({ ...field }) => (
                      <FileDropZone
                        {...field}
                        value={watch('siteImage') || []}
                        onValueChange={(value) => {
                          setValue('siteImage', value, { shouldDirty: true });
                        }}
                      />
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
              <FormInput
                form={form}
                name='url'
                label='Site Url'
                required
                input={{
                  type: 'text',
                  placeholder: 'Enter Site url',
                }}
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
            <Button type='button' variant='destructive' onClick={() => {}}>
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

export default AddPassword;
