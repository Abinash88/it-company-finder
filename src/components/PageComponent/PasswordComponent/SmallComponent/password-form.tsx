import React, { useContext, useRef, useState } from 'react'
import Div from '@/lib/Div'
import { FaDownload } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

import MyContext from '@/context/MyContext'
import PinCodeBox from './PinCodeBox'
import Button from '@/components/ui/UiItems'
import Image from 'next/image'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import ImageFunction from '@/components/global/image_function'
import { selectCategory } from '@/Data/StaticData'
import {
  AddPasswordValidation,
  PasswordValidationTypes,
} from '@/lib/schema/schema.password'
import useFileHandler from '@/Hooks/UseHandleFile'
import { Form, FormField } from '@/components/ui/form'
import InputField from '@/components/reusables/custom-forms/input-field'
import { ComboboxDemo } from '@/components/reusables/combo-list-box'
import FormWrapper, {
  InputFieldWrapper,
} from '@/components/reusables/custom-forms/form-wrapper'
import { CustomSelect } from '@/components/reusables/custom-select'
import CustomAlert from '@/components/reusables/alerts/custom-alert'

export type popupPassword = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUpPassword = (props: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null)
  const MyAppData = useContext(MyContext)
  const siteFileInputRef = useRef<HTMLInputElement | null>(null)

  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false)
  const form = useForm<PasswordValidationTypes>({
    resolver: zodResolver(AddPasswordValidation),
    defaultValues: {
      category: '' || '',
      description: '' || '',
      password: '' || '',
      password_name: '' || '',
      url: '' || '',
    },
  })
  const { register, handleSubmit, formState, reset } = form

  const { fileLists, handleFile, blobImage, clearFile, valueData } =
    useFileHandler()
  const onSubmitForm: SubmitHandler<PasswordValidationTypes> = (data) => {
    console.log(data)
  }
  const handleImageClick = () => {
    if (siteFileInputRef && siteFileInputRef.current)
      siteFileInputRef?.current?.click()
  }

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
                      <CustomSelect
                        options={selectCategory}
                        field={field}
                        className=''
                      />
                    </FormWrapper>
                  )}
                />
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
              </Div>
            </Div>

            <CustomAlert  />

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
            <Button type='submit' variant='default' className='flex gap-2'>
              <span>Add Password</span>
              <AiOutlinePlus className='text-[17px]' />
            </Button>
            <Button
              type='button'
              variant='destructive'
              onClick={() => {
                props.closeModelBox(false)
              }}
            >
              Cancel
            </Button>
            <Button
              type='button'
              variant='outline'
              onClick={() => {
                reset()
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
  )
}

export default PopUpPassword
