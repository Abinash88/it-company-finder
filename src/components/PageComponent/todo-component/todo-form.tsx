import React, {
  useContext,
  useRef,
} from "react";
import Div from "@/lib/Div";
import { AiOutlinePlus } from "react-icons/ai";

import MyContext from "@/context/MyContext";
import Button, { LabelContent } from "@/components/ui/UiItems";
import PageTitle from "@/components/ui/page-title";
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { add_todo_data_types } from "@/Backend/lib/types";
import FormError from "@/components/ui/form_error";
import { selectNotePriority } from "@/Data/StaticData";
import RemoveBox from "@/components/ui/remove";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AddTaskValidation } from "@/lib/schema/schema.todo";

export type popupPassword = {
  setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
};

const TodoForm = ({ setIsOpenPopup }: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null);

  const form = useForm<add_todo_data_types>({ resolver: zodResolver(AddTaskValidation) });
  const { register, handleSubmit, formState: { errors }, reset } = form;

  const onSubmitForm: SubmitHandler<add_todo_data_types> = (data) => {
    console.log(data);
  }

  return (
    <div
      id="PasswordOutBox"
      className={`relative cursor-normal flex items-end justify-end  w-full h-full`}
    >
      <div
        className=" absolute cursor-normal flex items-center justify-center z-20 w-full h-full transparentBg top-[-12px] left-0"
      ></div>
      <div
        ref={RemovePasswordBox}
        id="RemovingPasswordBox"
        className=" z-50 p-4 bg-gray-50 absolute bottom-0 rounded-sm w-full md:w-[570px] h-full px-8 mx-auto  "
      >
        <Form {...form}>
          <form className="" action="" onSubmit={handleSubmit(onSubmitForm)}>
            <Div className="text-center border-b border-gray-200 mb-3 pb-2 font-normal text-gray-600 text-[20px]">
              <PageTitle className="text-gray-700" title="Add Task" />
            </Div>
            <RemoveBox remove={() => { setIsOpenPopup(false) }} />


            <Div className="flex flex-col md:gap-">
              <Div className="flex gap-4 flex-1">
                <Div className="flex-1">
                  <Div className="flex items-center gap-2 mt-5">
                    <Div className=" flex-1 flex flex-col relative gap-[4px] md:gap-1">
                      <Div className="w-full md:w-[130px] flex items-start">
                        <LabelContent className="text-gray-600" htmlFor="taskname" > Task Name</LabelContent>
                      </Div>
                      <Div className="flex-1">
                        <FormField
                          control={form.control}
                          render={({ field }) => {
                            <FormItem>
                              <FormControl>
                                <Input
                                  id="taskname"
                                  type="text"
                                  name="task_name"
                                  className=" "
                                  placeholder="Title"
                                  {...field}
                                />
                              </FormControl>
                            </FormItem>
                          }}
                        />
                        {errors && <FormError error={errors?.task_name?.message} />}
                      </Div>
                    </Div>
                  </Div>
                </Div>
              </Div>

              <Div className="mt-3 flex flex-col relative gap-[4px] md:gap-1">
                <Div className="w-full md:w-[130px] flex items-start">
                  <LabelContent className="text-gray-600" htmlFor="Description" >Description</LabelContent>
                </Div>
                <Div className="flex-1 relative">
                  <textarea
                    className=" add_password_input"
                    id="Description"
                    placeholder="description here..."
                    {...register('description')}
                    rows={5}
                    cols={6}
                  ></textarea>

                  {errors && <FormError error={errors?.description?.message} />}
                </Div>
              </Div>

              <Div className=" flex-1 flex flex-col relative gap-[4px] md:gap-1">
                <Div className="w-full md:w-[130px] flex items-start">
                  <LabelContent className="text-gray-600" htmlFor="Priority" > Priority</LabelContent>
                </Div>
                <Div className="flex-1">
                  <select {...register('priority')} id="Priority" className="rounded-sm border border-border bg-input focus:outline-none text-[13px] px-3 py-[9px] w-full ">
                    {
                      selectNotePriority?.map((item) => {
                        return (<option key={item?.id} value={item?.catagory}>{item?.catagory}</option>)
                      })
                    }
                  </select>
                  {errors && <FormError error={errors?.priority?.message} />}
                </Div>
              </Div>
            </Div>

            <Div className="h-8"></Div>
            <Div className="flex w-full justify-start gap-4 items-center">
              <Button
                size='md'
                type="submit"
                variant='default'
                className="flex gap-2"
              >
                <span>Add Notes</span>
                <AiOutlinePlus className="text-[17px]" />
              </Button>
              <Button type="button" variant='destructive' onClick={() => { setIsOpenPopup(false) }} size='md'>
                Cancel
              </Button>
              {/* {showPinCodeBox && (
                <PinCodeBox
                  showPinCodeBox={showPinCodeBox}
                  setShowPinCodeBox={setShowPinCodeBox}
                />
              )} */}
            </Div>
          </form>
        </Form>

      </div>

    </div >
  );
};

export default TodoForm;
