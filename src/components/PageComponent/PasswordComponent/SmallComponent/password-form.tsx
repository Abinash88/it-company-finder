import React, { useContext, useRef, useState } from 'react'
import Div from '@/lib/Div'
import { FaDownload, FaEye, FaEyeSlash } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'

import MyContext from '@/context/MyContext'
import PinCodeBox from './PinCodeBox'
import Button, { LabelContent } from '@/components/ui/UiItems'
import Image from 'next/image'
import PageTitle from '@/components/ui/page-title'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Add_password_data_types } from '@/Backend/lib/types'
import FormError from '@/components/ui/form_error'
import ImageFunction from '@/components/global/image_function'
import { selectCatagory } from '@/Data/StaticData'
import RemoveBox from '@/components/ui/remove'
import {
  AddPasswordValidation,
  PasswordValidationTypes,
} from '@/lib/schema/schema.password'
import useFileHandler from '@/Hooks/UseHandleFile'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import InputField from '@/components/reusables/custom-forms/input-field'

export type popupPassword = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>
}

const PopUpPassword = (props: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null)
  const [ShowPassword, setShowPassword] = useState<boolean>(false)
  const MyAppData = useContext(MyContext)
  const siteFileInputRef = useRef<HTMLInputElement | null>(null)
  const [storeInputFile, setStoreInputFile] = useState<FileList>()

  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false)
  const form = useForm<PasswordValidationTypes>({
    resolver: zodResolver(AddPasswordValidation),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = form

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
      className={`z-50   relative cursor-normal flex  items-end justify-end  w-full h-full`}
    >
      <Form {...form}>
        <form
          className=' z-50 p-4 rounded-sm w-full md:w-full h-full px-8 mx-auto  '
          action=''
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <Div className='flex flex-col md:gap-4'>
            <Div className='flex gap-4 flex-1'>
              <Div className='flex-1'>
                <Div className=' flex-1 flex flex-col md:flex-row relative gap-[4px] md:gap-2'>
                  <Div className='w-full md:w-[130px] flex items-center'>
                    <LabelContent
                      className='text-gray-600'
                      htmlFor='passwordCatagory'
                    >
                      {' '}
                      Password Catagory
                    </LabelContent>
                  </Div>
                  <Div className='flex-1'>
                    <select
                      {...register('catagory')}
                      id='passwordCatagory'
                      className='add_password_input'
                    >
                      {selectCatagory?.map((item) => {
                        return (
                          <option key={item?.id} value={item?.catagory}>
                            {item?.catagory}
                          </option>
                        )
                      })}
                    </select>
                    {errors && <FormError error={errors?.catagory?.message} />}
                  </Div>
                </Div>

                <Div className='flex-1'>
                  <FormField
                    control={form.control}
                    name='password_name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type='text'
                            className=''
                            placeholder='Password Name'
                          />
                        </FormControl>
                        <FormDescription>
                          {errors && (
                            <FormError error={errors?.password_name?.message} />
                          )}
                        </FormDescription>
                      </FormItem>
                    )}
                  />
                </Div>
              </Div>

              <Div className='w-[100px] md:w-[80px] md:h-[80px] h-[100px] flex  relative gap-[4px] md:gap-2'>
                <Div className=' h-full w-full relative rounded-md border bg-gray-100 flex items-center justify-center'>
                  {!blobImage ? (
                    <Div
                      className='w-full h-full flex items-center justify-center'
                      onClick={handleImageClick}
                    >
                      <FaDownload className='text-gray-500' />
                    </Div>
                  ) : (
                    <Div className='w-full h-full flex items-center justify-center relative group '>
                      <ImageFunction
                        moreStyle='group-hover:opacity-100 opacity-0'
                        trashImage={clearFile}
                        uploadImage={handleImageClick}
                      />
                      <Image
                        src={blobImage}
                        alt='social image'
                        width={200}
                        height={200}
                        className='w-full h-full  object-contain rounded-sm'
                      />
                    </Div>
                  )}
                </Div>
                <input
                  id='PassWordName'
                  onChange={(e) => {
                    handleFile(e)
                  }}
                  ref={siteFileInputRef}
                  type='file'
                  className='py-[10px] hidden'
                  placeholder='Password Name'
                />
              </Div>
            </Div>

            <Div className='flex-1'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <InputField
                    {...field}
                    name='password'
                    type='password'
                    label='Password'
                    placeholder='Password'
                  />
                  // <FormItem>
                  //   <FormLabel>Password</FormLabel>
                  //   <FormControl>
                  //     <Input
                  //       {...field}
                  //       type={ShowPassword ? 'text' : 'password'}
                  //       className=''
                  //       placeholder='Password'
                  //     />
                  //   </FormControl>
                  //   <FormDescription>
                  //     <Div
                  //       onClick={() => setShowPassword(!ShowPassword)}
                  //       className='absolute right-[10px] cursor-pointer text-gray-500 top-[30%]'
                  //     >
                  //       {ShowPassword ? (
                  //         <FaEyeSlash className='' />
                  //       ) : (
                  //         <FaEye className='' />
                  //       )}
                  //     </Div>
                  //     {errors && (
                  //       <FormError error={errors?.password_name?.message} />
                  //     )}
                  //   </FormDescription>
                  // </FormItem>
                )}
              />
            </Div>

            <Div className=' mt-2 flex-1 flex flex-col md:flex-row relative gap-[4px] md:gap-2'>
              <FormField
                control={form.control}
                name='url'
                render={({ field }) => {
                  <FormItem>
                    <FormLabel>Site URL</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder='site URL' type='text' />
                    </FormControl>
                    <FormDescription></FormDescription>
                  </FormItem>
                }}
              />
            </Div>
          </Div>

          <Div className='h-8'></Div>
          <Div className='flex w-full justify-start gap-4 items-center'>
            <Button
              size='lg'
              type='submit'
              variant='default'
              className='flex gap-2'
            >
              <span>Add Password</span>
              <AiOutlinePlus className='text-[17px]' />
            </Button>
            <Button
              type='button'
              variant='destructive'
              onClick={() => {
                props.closeModelBox(false)
              }}
              size='md'
            >
              Cancel
            </Button>
            <Button
              type='button'
              variant='destructive'
              onClick={() => {
                reset()
              }}
              size='md'
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
