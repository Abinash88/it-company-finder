import React, { useEffect, useRef, useState } from "react";

export type PinCodeDataType = {
  first?: number;
  seconed?: number;
  third?: number;
  fourth?: number;
};

const PinCodeBox = () => {
  const [pinCodeData, setPinCodeData] = useState<PinCodeDataType>({
    first: undefined,
    seconed: undefined,
    third: undefined,
    fourth: undefined,
  });

  const first = useRef<HTMLInputElement>(null);
  const seconed = useRef<HTMLInputElement>(null);
  const third = useRef<HTMLInputElement>(null);
  const fourth = useRef<HTMLInputElement>(null);

  const GetThePinCode: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setPinCodeData((item) => ({ ...item, [e.target.name]: e.target.value }));
  };

  console.log(pinCodeData);

  const FirstClick = () => {};

  const SeconedClick = () => {
    if (pinCodeData?.first === undefined && first.current) {
      first?.current?.focus();
    }
  };

  const ThirdClick = () => {
    if (pinCodeData?.third === undefined && first.current) {
      first?.current?.focus();
    }
  };

  const FourthClick = () => {
    if (pinCodeData?.fourth === undefined && first.current) {
      first?.current?.focus();
    }
  };

  return (
    <div
      className={` flex flex-col justify-center  absolute w-[400px]
    h-auto border py-1 z-10 right-9 h-full w-full rounded-sm right-[50%] 
    translate-y-[-50%] transform translate-x-[50%]  top-[50%]  flex justify-center items-center bgColorDark shadow-lg`}
    >
      <div className="w-[80%] h-full flex flex-col items-center justify-center   h-auto">
        <div className="items-center mb-5">
          <h4 className="text-center font-semibold text-white text-[18px]">
            Enter the Pin code{" "}
          </h4>
          <h6 className="text-center text-white font-light text-[13px]">
            To see the password
          </h6>
        </div>
        <form action="" className="flex items-center space-x-2">
          <div className="w-[40px] h-[20px]">
            <input
              onFocus={() => {
                FirstClick();
              }}
              ref={first}
              type="number"
              name="first"
              onChange={(e) => {
                GetThePinCode(e);
              }}
              value={pinCodeData?.first}
              className="w-full py-1 pl-3 text-[18px] border-2 outline-none"
            />
          </div>
          <div className="w-[40px] h-[20px]">
            <input
              onFocus={() => {
                SeconedClick();
              }}
              ref={seconed}
              name="seconed"
              onChange={(e) => {
                GetThePinCode(e);
              }}
              value={pinCodeData?.seconed}
              type="number"
              className="w-full py-1 pl-3 text-[18px] border-2 outline-none"
            />
          </div>
          <div className="w-[40px] h-[20px]">
            <input
              onFocus={() => {
                ThirdClick();
              }}
              ref={third}
              name="third"
              onChange={(e) => {
                GetThePinCode(e);
              }}
              value={pinCodeData?.third}
              type="number"
              className="w-full py-1 pl-3 text-[18px] border-2 outline-none"
            />
          </div>
          <div className="w-[40px] h-[20px]">
            <input
              onFocus={() => {
                FourthClick();
              }}
              ref={fourth}
              name="fourth"
              onChange={(e) => {
                GetThePinCode(e);
              }}
              value={pinCodeData?.fourth}
              type="number"
              className="w-full py-1 pl-3 text-[18px] border-2 outline-none"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PinCodeBox;
