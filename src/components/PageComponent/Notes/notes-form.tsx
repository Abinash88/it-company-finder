import React, {
  useContext,
  useRef,
  useState,
} from "react";
import Div from "@/lib/Div";
import { FaDownload, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

import MyContext from "@/context/MyContext";
import Button, { LabelContent } from "@/components/UI/UiItems";
import PageTitle from "@/components/UI/page-title";
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { add_notes_data_types } from "@/BackendLib/lib/types";
import FormError from "@/components/UI/form_error";
import { Validation } from "@/BackendLib/Middleware/Validation";
import useFileHandler from "@/Hooks/UseHandleFile";
import ImageFunction from "@/components/global/image_function";
import { selectNotePriority } from "@/Data/StaticData";
import RemoveBox from "@/components/UI/remove";

export type popupPassword = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const NotesForm = (props: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null);
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  const MyAppData = useContext(MyContext);
  const siteFileInputRef = useRef<HTMLInputElement | null>(null);
  const [storeInputFile, setStoreInputFile] = useState<FileList>();

  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors }, reset } =
    useForm<add_notes_data_types>({ resolver: zodResolver(Validation?.add_password_validatioon) });
  const { fileLists, handleFile, blobImage, clearFile, valueData } = useFileHandler()
  const onSubmitForm: SubmitHandler<add_notes_data_types> = (data) => {
    console.log(data);
  }
  const handleImageClick = () => {
    if (siteFileInputRef && siteFileInputRef.current)
      siteFileInputRef?.current?.click();
  }

  return (
    <div
      id="PasswordOutBox"
      className={`relative cursor-normal flex items-end justify-end  w-full h-full`}
    >
      <div
        onClick={() => props.closeModelBox(false)}
        className=" absolute cursor-normal flex items-center justify-center z-20 w-full h-full transparentBg top-[-12px] left-0"
      ></div>
      <div
        ref={RemovePasswordBox}
        id="RemovingPasswordBox"
        className=" z-50 p-4 bg-gray-600 absolute bottom-0 rounded-sm w-full md:w-[570px] h-full px-8 mx-auto  "
      >
        <form className="" action="" onSubmit={handleSubmit(onSubmitForm)}>
          <Div className="text-center border-b border-gray-200 mb-3 pb-2 font-normal text-gray-600 text-[20px]">
            <PageTitle className="text-gray-50" title="Add Notes" />
          </Div>
          <RemoveBox remove={() => props.closeModelBox(false)} />


          <Div className="flex flex-col md:gap-">
            <Div className="flex gap-4 flex-1">
              <Div className="flex-1">
                <Div className="flex items-center gap-2 mt-5">
                  <Div className=" flex-1 flex flex-col relative gap-[4px] md:gap-1">
                    <Div className="w-full md:w-[130px] flex items-start">
                      <LabelContent className="text-gray-100" htmlFor="title" > Title</LabelContent>
                    </Div>
                    <Div className="flex-1 ">
                      <input
                        id="title"
                        type="text"
                        className=" add_password_input"
                        placeholder="Title"
                        {...register('title')}
                      />
                      {errors && <FormError error={errors?.title?.message} />}
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>

            <Div className="mt-3 flex flex-col relative gap-[4px] md:gap-1">
              <Div className="w-full md:w-[130px] flex items-start">
                <LabelContent className="text-gray-100" htmlFor="Description" >Description</LabelContent>
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
                <LabelContent className="text-gray-100" htmlFor="Priority" > Priority</LabelContent>
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
              icon={<AiOutlinePlus className="text-[17px]" />}
              size='md'
              type="submit"
              variant='default'
              className="flex gap-2"
              btnName="Add Notes"
            />
            <Button type="button" variant='destructive' onClick={() => { props.closeModelBox(false) }} size='md' btnName="Cancel" />
            {/* {showPinCodeBox && (
              <PinCodeBox
                showPinCodeBox={showPinCodeBox}
                setShowPinCodeBox={setShowPinCodeBox}
              />
            )} */}
          </Div>
        </form>

      </div>

    </div >
  );
};

export default NotesForm;
