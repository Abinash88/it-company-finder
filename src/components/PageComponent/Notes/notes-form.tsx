import React, { useRef } from 'react'
import Div from '@/lib/Div'
import { AiOutlinePlus } from 'react-icons/ai'

import PageTitle from '@/components/ui/page-title'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { add_notes_data_types } from '@/Backend/lib/types'
import FormError from '@/components/ui/form_error'
import useFileHandler from '@/Hooks/UseHandleFile'
import { selectNotePriority } from '@/Data/StaticData'
import RemoveBox from '@/components/ui/remove'
import { Button } from '@/components/ui/button'

export type popupPassword = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>
}

const NotesForm = (props: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null)
  const siteFileInputRef = useRef<HTMLInputElement | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<add_notes_data_types>({
    resolver: zodResolver(Validation?.add_notes_validation),
  })
  const { fileLists, handleFile, blobImage, clearFile, valueData } =
    useFileHandler()
  const onSubmitForm: SubmitHandler<add_notes_data_types> = (data) => {
    console.log(data)
  }
  const handleImageClick = () => {
    if (siteFileInputRef && siteFileInputRef.current)
      siteFileInputRef?.current?.click()
  }

  return (
    <div
      id='PasswordOutBox'
      className={`relative cursor-normal flex items-end justify-end  w-full h-full`}
    >
      <div
        onClick={() => props.closeModelBox(false)}
        className=' absolute cursor-normal flex items-center justify-center z-20 w-full h-full transparentBg top-[-12px] left-0'
      ></div>
      <div
        ref={RemovePasswordBox}
        id='RemovingPasswordBox'
        className=' z-50 p-4 bg-gray-50 absolute bottom-0 rounded-sm w-full md:w-[570px] h-full px-8 mx-auto  '
      >
        <form className='' action='' onSubmit={handleSubmit(onSubmitForm)}>
          <Div className='text-center border-b border-gray-200 mb-3 pb-2 font-normal text-gray-600 text-[20px]'>
            <PageTitle className='text-gray-700' title='Add Notes' />
          </Div>
          <RemoveBox remove={() => props.closeModelBox(false)} />

          <Div className='flex flex-col md:gap-'>
            <Div className='flex gap-4 flex-1'>
              <Div className='flex-1'>
                <Div className='flex items-center gap-2 mt-5'>
                  <Div className=' flex-1 flex flex-col relative gap-[4px] md:gap-1'>
                    <Div className='w-full md:w-[130px] flex items-start'>
                      <label className='text-gray-600' htmlFor='title'>
                        {' '}
                        Title
                      </label>
                    </Div>
                    <Div className='flex-1 '>
                      <input
                        id='title'
                        type='text'
                        className=' add_password_input'
                        placeholder='Title'
                        {...register('title')}
                      />
                      {errors && <FormError error={errors?.title?.message} />}
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>

            <Div className='mt-3 flex flex-col relative gap-[4px] md:gap-1'>
              <Div className='w-full md:w-[130px] flex items-start'>
                <label className='text-gray-600' htmlFor='Description'>
                  Description
                </label>
              </Div>
              <Div className='flex-1 relative'>
                <textarea
                  className=' add_password_input'
                  id='Description'
                  placeholder='description here...'
                  {...register('description')}
                  rows={5}
                  cols={6}
                ></textarea>

                {errors && <FormError error={errors?.description?.message} />}
              </Div>
            </Div>

            <Div className=' flex-1 flex flex-col relative gap-[4px] md:gap-1'>
              <Div className='w-full md:w-[130px] flex items-start'>
                <label className='text-gray-600' htmlFor='Priority'>
                  {' '}
                  Priority
                </label>
              </Div>
              <Div className='flex-1'>
                <select
                  {...register('priority')}
                  id='Priority'
                  className='rounded-sm border border-border bg-input focus:outline-none text-[13px] px-3 py-[9px] w-full '
                >
                  {selectNotePriority?.map((item) => {
                    return (
                      <option key={item?.id} value={item?.value}>
                        {item?.value}
                      </option>
                    )
                  })}
                </select>
                {errors && <FormError error={errors?.priority?.message} />}
              </Div>
            </Div>
          </Div>

          <Div className='h-8'></Div>
          <Div className='flex w-full justify-start gap-4 items-center'>
            <Button type='submit' variant='default' className='flex gap-2'>
              <AiOutlinePlus className='text-[17px]' />
              <span>Add Notes</span>
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
          </Div>
        </form>
      </div>
    </div>
  )
}

export default NotesForm
