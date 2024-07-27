import React, { useRef } from 'react';
import Div from '@/lib/Div';
import { AiOutlinePlus } from 'react-icons/ai';

import Button, { LabelContent } from '@/components/ui/UiItems';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormError from '@/front-end-components/ui/form_error';
import { selectNotePriority } from '@/Data/StaticData';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from '@/front-end-components/ui/form';
import { Input } from '@/front-end-components/ui/input';
import {
  AddTaskValidation,
  TaskValidationTypes,
} from '@/lib/schema/schema.todo';
import { Textarea } from '@/front-end-components/ui/textarea';
import { ComboboxDemo } from '@/front-end-components/reusables/combo-list-box';

export type popupPassword = {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodoForm = ({ setIsOpenPopup }: popupPassword) => {
  const form = useForm<TaskValidationTypes>({
    resolver: zodResolver(AddTaskValidation),
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
  } = form;

  const onSubmitForm: SubmitHandler<TaskValidationTypes> = (data) => {
    console.log(data);
  };

  return (
    <div
      id='PasswordOutBox'
      className={`relative cursor-normal flex items-end justify-end  w-full h-full`}
    >
      <div
        id='RemovingPasswordBox'
        className=' z-50 p-4  rounded-sm w-full  h-full'
      >
        <Form {...form}>
          <form
            className='flex flex-col gap-2'
            action=''
            onSubmit={handleSubmit(onSubmitForm)}
          >
            <Div className='flex-1'>
              <FormField
                control={form.control}
                name='task_name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type='text'
                        className=''
                        placeholder='Title'
                      />
                    </FormControl>
                    <FormDescription>
                      {errors && (
                        <FormError error={errors?.task_name?.message} />
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
            </Div>

            <Div className=' flex flex-col relative gap-[4px] md:gap-1'>
              <FormField
                control={form.control}
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>
                      {errors && (
                        <FormError error={errors?.description?.message} />
                      )}
                    </FormDescription>
                  </FormItem>
                )}
              />
            </Div>

            <Div className=' flex-1 flex flex-col relative gap-[4px] md:gap-1'>
              <Controller
                name='priority'
                control={form.control}
                render={({ field }) => (
                  <ComboboxDemo
                    label='Priority'
                    className=''
                    onChange={field.onChange}
                    listData={selectNotePriority}
                  />
                )}
              />
            </Div>

            <Div className='h-8'></Div>
            <Div className='flex w-full justify-start gap-4 items-center'>
              <Button size='md' type='submit' className='flex gap-2'>
                <span>Add Notes</span>
                <AiOutlinePlus className='text-[17px]' />
              </Button>
              <Button
                type='button'
                variant='destructive'
                onClick={() => {
                  setIsOpenPopup(false);
                }}
                size='md'
              >
                Cancel
              </Button>
              <Button
                type='button'
                variant='outline'
                onClick={() => {
                  reset();
                }}
                size='md'
              >
                Reset
              </Button>
            </Div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default TodoForm;
