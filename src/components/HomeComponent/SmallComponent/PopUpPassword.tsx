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
import { OutClickToggle } from "@/lib/page";

export type popupPassword = {
  setpasswordBtn: React.MutableRefObject<HTMLButtonElement | null>;
  PopupData: MyAppDataTypes | null;
  index: number;
  closeModelBox: () => void;
};

const PopUpPassword = forwardRef((props: popupPassword, ref) => {
  const RemovePasswordBox = useRef<HTMLDivElement | null>(null);
  const [ShowPassword, setShowPassword] = useState<boolean>(false);
  const MyAppData = useContext(MyContext);

  const [password, setPassword] = useState<string>("");
  const [passwordName, setPasswordName] = useState<string>("");

  useEffect(() => {
    OutClickToggle(
      RemovePasswordBox,
      props.setpasswordBtn,
      props.closeModelBox
    );
  }, [props]);
  console.log(ref);
  return (
    <div
      id="PasswordOutBox"
      className={` fixed cursor-normal flex bg-red-500 items-center justify-center  z-20 w-full h-screen transparentBg top-[-12px] left-0`}
    >
      <div
        ref={RemovePasswordBox}
        id="RemovingPasswordBox"
        className="h-[470px] p-4 relative rounded-md w-[450px] popupPasswrodBox "
      >
        <h2 className="text-center border-b pb-1  font-semibold text-purple-700 text-[17px]">
          Set New Password
        </h2>
        <Div
          onClick={props.closeModelBox}
          className="absolute top-2 right-3 transform rotate-[45deg]    p-2 rounded-full transition duration-300 hover:rotate-[140deg] hover:bg-gray-200"
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
                  <PasswordBox item={item} />
                </div>
              );
            })}
        </Div>
        <Div className="">
          <Div className="mt-5 flex flex-col relative">
            <label
              className="text-[13px] text-start text-gray-500"
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
              className="py-3 text-[13px] px-3 pr-10 rounded-lg bg-transparent shadow-lg
             shadow-gray-300 border focus:outline-none mt-1"
              placeholder="Password Name"
            />
          </Div>
          <Div className="mt-3 flex flex-col relative">
            <label
              className="text-[13px] text-start text-gray-500"
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
              className="py-3 px-3 text-[13px] pr-10 rounded-lg bg-transparent shadow-lg
             shadow-gray-300 border focus:outline-none mt-1"
              placeholder="Eg. A3u-ioVa_343"
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
            MyAppData?.GetSavePassword(password, passwordName, props.index);
          }}
          className="px-6 py-2 flex space-x-2 items-center rounded-md 
         hover:bg-purple-700 text-[13px] font-normal text-purple-700
          hover:text-white mx-auto border border-purple-300 mt-5 transition-all duration-300"
        >
          <FaPlus className=" " />
          <span> Add Password</span>
        </button>
      </div>
    </div>
  );
});

PopUpPassword.displayName = "PopUpPassword";

export default PopUpPassword;
