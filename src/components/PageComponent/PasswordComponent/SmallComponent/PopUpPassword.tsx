import React, {
  useContext,
  useRef,
  useState,
} from "react";
import Div from "@/lib/Div";
import { FaDownload, FaEye, FaEyeSlash } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";

import MyContext from "@/components/context/MyContext";
import PinCodeBox from "./PinCodeBox";
import Button, { InputField, LabelContent } from "@/components/UI/UiItems";
import Image from "next/image";
import { selectCatagory } from "@/lib/utils";
import PageTitle from "@/components/UI/page-title";
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Add_password_data_types } from "@/BackendLib/lib/types";
import FormError from "@/components/UI/form_error";
import { Validation } from "@/BackendLib/Middleware/Validation";
import useFileHandler from "@/components/Hooks/UseHandleFile";
import ImageFunction from "@/components/global/image_function";

export type popupPassword = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopUpPassword = (props: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null);
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  const MyAppData = useContext(MyContext);
  const siteFileInputRef = useRef<HTMLInputElement | null>(null);
  const [storeInputFile, setStoreInputFile] = useState<FileList>();

  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors }, reset } =
    useForm<Add_password_data_types>({ resolver: zodResolver(Validation?.add_password_validatioon) });
  const { fileLists, handleFile, blobImage, clearFile, valueData } = useFileHandler()
  const onSubmitForm: SubmitHandler<Add_password_data_types> = (data) => {
    console.log(data);
  }
  const handleImageClick = () => {
    if (siteFileInputRef && siteFileInputRef.current)
      siteFileInputRef?.current?.click();
  }

  return (
    <div
      id="PasswordOutBox"
      className={`  relative cursor-normal flex  items-end justify-center  w-full h-full`}
    >
      <div
        onClick={() => props.closeModelBox(false)}
        className=" absolute cursor-normal flex  items-center justify-center z-20 w-full h-full transparentBg top-[-12px] left-0"
      ></div>
      <div
        ref={RemovePasswordBox}
        id="RemovingPasswordBox"
        className=" z-50 p-4 bg-white absolute bottom-0 rounded-sm w-full px-8 mx-auto  "
      >
        <form className="" action="" onSubmit={handleSubmit(onSubmitForm)}>
          <Div className="text-center border-b border-gray-200 mb-3 pb-2 font-normal text-gray-600 text-[20px]">
            <PageTitle title="Set New Password" />
          </Div>
          <Div
            onClick={() => props.closeModelBox(false)}
            className="absolute top-2 right-3 transform rotate-[45deg]  p-2 rounded-full transition duration-300 hover:rotate-[140deg] hover:bg-gray-50 cursor-pointer"
          >
            <AiOutlinePlus className="text-gray-600 text-[19px]" />
          </Div>

          <Div className="flex flex-col md:gap-4">
            <Div className="flex gap-4 flex-1">
              <Div className="flex-1">
                <Div className=" flex-1 flex flex-col md:flex-row relative gap-[4px] md:gap-2">
                  <Div className="w-[130px] md:w-[180px] flex items-center">
                    <LabelContent htmlFor="passwordCatagory" > Password Catagory</LabelContent>
                  </Div>
                  <Div className="flex-1">
                    <select {...register('catagory')} id="passwordCatagory" className="rounded-sm border border-border bg-input focus:outline-none text-[13px] px-3 py-[9px] w-full ">
                      {
                        selectCatagory?.map((item) => {
                          return (<option key={item?.id} value={item?.catagory}>{item?.catagory}</option>)
                        })
                      }
                    </select>
                    {errors && <FormError error={errors?.catagory?.message} />}
                  </Div>
                </Div>

                <Div className="flex items-center gap-2 mt-5">
                  <Div className=" flex-1 flex flex-col md:flex-row relative gap-[4px] md:gap-2">
                    <Div className="w-[130px] md:w-[180px] flex items-center">
                      <LabelContent htmlFor="password_name" > Password Name</LabelContent>
                    </Div>
                    <Div className="flex-1 ">
                      <input
                        id="password_name"
                        type="text"
                        className="py-[9px] add_password_input"
                        placeholder="Password Name"
                        {...register('password_name')}
                      />
                      {errors && <FormError error={errors?.password_name?.message} />}
                    </Div>
                  </Div>
                </Div>
              </Div>
              <Div className="w-[100px] md:w-[80px] flex  relative gap-[4px] md:gap-2">
                <Div className=" h-full w-full relative rounded-md border bg-gray-100 flex items-center justify-center">
                  {
                    !blobImage ?
                      <Div
                        className="w-full h-full flex items-center justify-center "
                        onClick={handleImageClick}  >
                        <FaDownload className="text-gray-500" />
                      </Div>
                      :
                      <Div className="w-full h-full flex items-center justify-center relative group ">
                        <ImageFunction moreStyle="group-hover:opacity-100 opacity-0" trashImage={clearFile} uploadImage={handleImageClick} />
                        <Image src={blobImage} alt="social image" width={200} height={200} className="w-full h-full  object-contain rounded-sm" />
                      </Div>
                  }
                </Div>
                <input
                  id="PassWordName"
                  onChange={(e) => {
                    handleFile(e)
                  }}
                  ref={siteFileInputRef}
                  type="file"
                  className="py-[9px] hidden"
                  placeholder="Password Name" />
              </Div>
            </Div>

            <Div className="mt-3 flex flex-col md:flex-row relative gap-[4px] md:gap-2">
              <Div className="w-[130px] md:w-[180px] flex items-center">
                <LabelContent htmlFor="addPassword" >Password</LabelContent>
              </Div>
              <Div className="flex-1 relative">
                <input
                  className="py-[9px] add_password_input"
                  id="addPassword"
                  type={ShowPassword ? "text" : "password"}
                  placeholder="Eg. SAfeu_EA-e53"
                  {...register('password')}
                />

                <Div
                  onClick={() => setShowPassword(!ShowPassword)}
                  className="absolute right-[10px] cursor-pointer text-gray-500 top-[30%]"
                >
                  {ShowPassword ? (
                    <FaEyeSlash className="" />
                  ) : (
                    <FaEye className="" />
                  )}
                </Div>
                {errors && <FormError error={errors?.password?.message} />}
              </Div>
            </Div>

            <Div className=" mt-2 flex-1 flex flex-col md:flex-row relativegap-[4px] md:gap-2">
              <Div className="w-[130px] md:w-[180px] flex items-center">
                <LabelContent htmlFor="passwordUrl" > Url</LabelContent>
              </Div>
              <Div className="flex-1">
                <input
                  id="passwordUrl"
                  type="text"
                  className="py-[9px] add_password_input"
                  placeholder="Site Url"
                  {...register('url')}
                />
                {errors && <FormError error={errors?.url?.message} />}
              </Div>
            </Div>
          </Div>

          <Div className="h-8"></Div>
          <Div className="flex w-full justify-start gap-4 items-center">
            <Button
              icon={<AiOutlinePlus className="text-[17px]" />}
              size='md'
              type="submit"
              variant='secondary'
              className="flex gap-2"
              btnName="Add Password"
            />
            <Button type="button" onClick={() => { props.closeModelBox(false) }} size='md' btnName="Cancel" />
            {showPinCodeBox && (
              <PinCodeBox
                showPinCodeBox={showPinCodeBox}
                setShowPinCodeBox={setShowPinCodeBox}
              />
            )}
          </Div>
        </form>

      </div>

    </div >
  );
};

export default PopUpPassword;
