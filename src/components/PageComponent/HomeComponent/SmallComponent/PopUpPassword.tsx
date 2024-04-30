import React, {
  useContext,
  useRef,
  useState,
} from "react";
import Div from "@/lib/Div";
import { FaDownload, FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import MyContext from "@/components/context/MyContext";
import PinCodeBox from "./PinCodeBox";
import toast from "react-hot-toast";
import Button, { InputField, LabelContent } from "@/components/UI/UiItems";
import Image from "next/image";
import { useHandleFile } from "@/components/Hooks/UseHandleFile";
import { selectCatagory } from "@/lib/utils";

export type popupPassword = {
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopUpPassword = (props: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null);
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  const MyAppData = useContext(MyContext);
  const siteFileInputRef = useRef<HTMLInputElement | null>(null);
  const [storeInputFile, setStoreInputFile] = useState<FileList>();

  const [password, setPassword] = useState<string>("");
  const [passwordName, setPasswordName] = useState<string>("");
  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false);
  const [ImageValue, setImageValue] = useState('')
  const [imageFileLists, setImageFileLists] = useState<FileList>();
  const [blobImage, setBlobImage] = useState('');
  const [passwordUrl, setPasswordUrl] = useState('');


  const HandleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = useHandleFile(e);
    if (files?.fileLists && files?.fileLists.length > 0 && files.value && files.fileImage) {
      setImageValue(files?.value)
      setImageFileLists(files?.fileLists)
      setBlobImage(files?.fileImage);
    }

  }

  return (
    <div
      id="PasswordOutBox"
      className={`  relative cursor-normal flex  items-end justify-center  w-full h-full`}
    >
      <div
        onClick={() => props.closeModelBox(false)}
        className=" absolute cursor-normal flex  items-center justify-center  z-20 w-full h-full transparentBg top-[-12px] left-0"
      ></div>
      <div
        ref={RemovePasswordBox}
        id="RemovingPasswordBox"
        className="h-[470px] z-50 p-4 bg-white absolute bottom-0 rounded-sm w-full px-8 mx-auto popupPasswrodBox "
      >
        <h2 className="text-center border-b pb-1  font-normal text-gray-600 text-[18px]">
          Set New Password
        </h2>
        <Div
          onClick={() => props.closeModelBox(false)}
          className="absolute top-2 right-3 transform rotate-[45deg]  p-2 rounded-full transition duration-300 hover:rotate-[140deg] hover:bg-gray-200"
        >
          <FaPlus className="text-gray-600 text-[19px]" />
        </Div>
       
        <Div className="">
          <Div className=" flex-1 flex flex-col relative gap-2">
            <LabelContent htmlFor="passwordCatagory" > Password Catagory</LabelContent>
            <select id="passwordCatagory" className="rounded-sm border border-border bg-input focus:outline-none text-[13px] px-3 py-[9px] w-full ">
              {
                selectCatagory?.map((item) => {
                  return (<option key={item?.id} value={item?.catagory}>{item?.catagory}</option>)
                })
              }
            </select>

          </Div>
          <Div className="flex items-center gap-2 mt-5">
            <Div className=" flex-1 flex flex-col relative gap-2">
              <LabelContent htmlFor="PassWordName" > Password Name</LabelContent>
              <InputField
                id="PassWordName"
                value={passwordName}
                onChange={(e) => {
                  setPasswordName(e.target.value);
                }}
                type="text"
                className="py-[9px]"
                placeholder="Password Name" />
            </Div>

            <Div className=" flex flex-col relative gap-2">
              <Div className="w-[60px] h-[65px] rounded-md border bg-gray-100 flex items-center justify-center">
                {
                  !blobImage ?
                    <Div
                      className="size-full"
                      onClick={() => {
                        if (siteFileInputRef && siteFileInputRef.current)
                          siteFileInputRef?.current?.click();
                      }}  >
                      <FaDownload className="text-gray-500" />
                    </Div>
                    :
                    <Div>
                      <Image src={blobImage} alt="social image" width={200} height={200} className="size-full rounded-sm" />
                    </Div>}
              </Div>
              <input
                id="PassWordName"
                onChange={(e) => {
                  HandleFile(e)
                }}
                ref={siteFileInputRef}
                value={ImageValue}
                type="file"
                className="py-[9px] hidden"
                placeholder="Password Name" />
            </Div>
          </Div>

          <Div className="mt-3 flex flex-col relative  gap-2">
            <LabelContent htmlFor="addPassword" >Password</LabelContent>
            <InputField onChange={(e) => {
              setPassword(e.target.value);
            }}
              className="py-[9px]"
              id="addPassword"
              value={password}
              type={ShowPassword ? "text" : "password"}
              placeholder="Eg. SAfeu_EA-e53" />

            <Div
              onClick={() => setShowPassword(!ShowPassword)}
              className="absolute right-[10px] cursor-pointer text-gray-500 top-[58%]"
            >
              {ShowPassword ? (
                <FaEyeSlash className="" />
              ) : (
                <FaEye className="" />
              )}
            </Div>

          </Div>
          <Div className=" mt-2 flex-1 flex flex-col relative gap-2">
            <LabelContent htmlFor="passwordUrl" > Url</LabelContent>
            <InputField
              id="passwordUrl"
              value={passwordUrl}
              onChange={(e) => {
                setPasswordUrl(e.target.value);
              }}
              type="text"
              className="py-[9px]"
              placeholder="Site Url" />
          </Div>
        </Div>

        <Div className="h-6"></Div>
        <Button
          icon={<FaPlus className=" " />}
          size='md'
          variant='secondary'
          className="flex gap-2 mx-auto"
          btnName="Add Password"
          ButtonClick={() => {
            if (!!password && !!passwordName) {
              // MyAppData?.GetSavePassword(password, passwordName, props.index);
              setPassword("");
              setPasswordName("");
            } else {
              toast.error("Please fill up your friend.");
            }
          }}
        // className="pr-6 pl-5 py-2 flex space-x-3 items-center rounded-md 
        // text-[13px] font-semibold  AddPassword 
        //  mx-auto border mt-5 transition-all duration-300"
        />

        {showPinCodeBox && (
          <PinCodeBox
            showPinCodeBox={showPinCodeBox}
            setShowPinCodeBox={setShowPinCodeBox}
          />
        )}
      </div>

    </div >
  );
};

export default PopUpPassword;
