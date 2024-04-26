import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import PasswordBox from "./PasswordBox";
import { MyAppDataTypes, password } from "@/Data/Types";
import Div from "@/lib/Div";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";
import MyContext from "@/components/context/MyContext";
import PinCodeBox from "./PinCodeBox";
import toast from "react-hot-toast";

export type popupPassword = {
  PopupData: MyAppDataTypes | null;
  index: number;
  closeModelBox: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopUpPassword = (props: popupPassword) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null);
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  const MyAppData = useContext(MyContext);

  const [password, setPassword] = useState<string>("");
  const [passwordName, setPasswordName] = useState<string>("");
  const [showPinCodeBox, setShowPinCodeBox] = useState<boolean>(false);

  return (
    <div
      id="PasswordOutBox"
      className={`  fixed cursor-normal flex  items-center justify-center  z-20 w-full h-screen  top-[-12px] left-0`}
    >
      <div
        onClick={() => props.closeModelBox(false)}
        className=" fixed cursor-normal flex  items-center justify-center  z-20 w-full h-screen transparentBg top-[-12px] left-0"
      ></div>
      <div
        ref={RemovePasswordBox}
        id="RemovingPasswordBox"
        className="h-[470px] z-50 p-4 relative rounded-md w-[450px] popupPasswrodBox "
      >
        <h2 className="text-center border-b pb-1  font-semibold text-gray-600 text-[17px]">
          Set New Password
        </h2>
        <Div
          onClick={() => props.closeModelBox(false)}
          className="absolute top-2 right-3 transform rotate-[45deg]  p-2 rounded-full transition duration-300 hover:rotate-[140deg] hover:bg-gray-200"
        >
          <FaPlus className="text-gray-600 text-[19px]" />
        </Div>
        <Div
          className={`${
            props.PopupData && props.PopupData?.passwords.length >= 3
              ? "h-[160px] overflow-auto overflowstyle"
              : "h-auto"
          } w-full flex flex-col items-start  mt-5 `}
        >
          {props.PopupData &&
            props.PopupData?.passwords?.map((item: password, id) => {
              return (
                <div className="w-full" key={id}>
                  <PasswordBox
                    setShowPinCodeBox={setShowPinCodeBox}
                    boxIndex={props.index}
                    passwordIndex={id}
                    item={item}
                  />
                </div>
              );
            })}
        </Div>
        <Div className="">
          <Div className="mt-5 flex flex-col relative">
            <label
              className="text-[13px] text-start text-gray-600"
              htmlFor="PassWordName"
            >
              Password Name
            </label>
            <input
              type="text"
              id="PassWordName"
              value={passwordName}
              onChange={(e) => {
                setPasswordName(e.target.value);
              }}
              className="py-3 text-[13px] px-3 pr-10 rounded-lg  bg-gray-200  border-gray-400 text-gray-500 inputbox focus:outline-none mt-1"
              placeholder="Password Name"
            />
          </Div>
          <Div className="mt-3 flex flex-col relative">
            <label
              className="text-[13px] text-start text-gray-600"
              htmlFor="addPassword"
            >
              Password
            </label>

            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              id="addPassword"
              value={password}
              type={ShowPassword ? "text" : "password"}
              className="py-3  px-3 text-[13px] pr-10 rounded-lg  bg-gray-200  border-gray-400 text-gray-500 inputbox focus:outline-none mt-1"
              placeholder="Eg. SAfeu_EA-e53"
            />
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
        </Div>

        <Div className=""></Div>
        <button
          onClick={() => {
            if (!!password && !!passwordName) {
              MyAppData?.GetSavePassword(password, passwordName, props.index);
              setPassword("");
              setPasswordName("");
            } else {
              toast.error("Please fill up your friend.");
            }
          }}
          className="pr-6 pl-5 py-2 flex space-x-3 items-center rounded-md 
          text-[13px] font-semibold  AddPassword 
           mx-auto border mt-5 transition-all duration-300"
        >
          <FaPlus className=" " />
          <span> Add Password</span>
        </button>
        {showPinCodeBox && (
          <PinCodeBox
            showPinCodeBox={showPinCodeBox}
            setShowPinCodeBox={setShowPinCodeBox}
          />
        )}
      </div>
    </div>
  );
};

export default PopUpPassword;
