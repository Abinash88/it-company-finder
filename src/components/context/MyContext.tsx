"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import Facebook from "@/assests/homeImage/facebook.jpg";
import Instagram from "@/assests/homeImage/instagram.jpg";
import Messnager from "@/assests/homeImage/messanger.jpg";
import Reddit from "@/assests/homeImage/reddit.jpg";
import Pinterest from "@/assests/homeImage/pintrest.jpg";
import { MyAppDataTypes } from "@/Data/Types.jsx";
import { FetchingApi } from "./contextApi";

export type contextTypes = {
  SocialData: MyAppDataTypes[];
  setSocialData: React.Dispatch<React.SetStateAction<MyAppDataTypes[]>>;
  GetSavePassword: (
    password: string,
    passwordName: string,
    index: number
  ) => void;
  DeletePassword: (boxId: number, passwordId: number) => void;
  OpenCloseMoreBox: (socialIndex: number, passwordIndex: number) => void;
  DeleteAll: () => void;
  signUpPostRequest: any;
  loginPostRequest: any;
  userData: any;
  LoginToken: any;
  isSignUp: boolean;
};

const MyContext = createContext<contextTypes | undefined>(undefined);

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [SocialData, setSocialData] = useState<MyAppDataTypes[]>([
    {
      id: "alksfhkajshdflkajshd",
      name: "Facebook",
      link: "https://www.facebook.com",
      image: Facebook,
      passwords: [],
    },
    {
      id: "asfkjahsdkfjahs",
      name: "Instagram",
      link: "https://www.instagram.com",
      image: Instagram,
      passwords: [],
    },
    {
      id: "faksjhdfkajshdflakjsd",
      name: "Messenger",
      link: "https://www.messanger.com",
      image: Messnager,
      passwords: [],
    },
    {
      id: "fkajshdkfajshdlk",
      name: "Reddit",
      link: "https://www.reddit.com",
      image: Reddit,
      passwords: [],
    },
    {
      id: "aksjdhfsdflaksjd",
      name: "Pinterest",
      link: "https://www.pinterest.com",
      image: Pinterest,
      passwords: [],
    },
  ]);

  const [LoginToken, setLoginToken] = useState();
  const [userData, setUserData] = useState();
  const [isSignUp, setIsSignUp] = useState(false);
  const GetSavePassword = (
    password: string,
    passwordName: string,
    index: number
  ) => {
    setSocialData((item) => {
      const data = [...item];

      data[index].passwords.push({
        password,
        passwordName,
        OpenMoreBar: false,
      });
      return data;
    });
  };

  const OpenCloseMoreBox = (socialIndex: number, passwordIndex: number) => {
    setSocialData((item) => {
      const data = [...item];
      data[socialIndex].passwords[passwordIndex].OpenMoreBar =
        !data[socialIndex].passwords[passwordIndex].OpenMoreBar;
      return data;
    });
  };

  // Delete selected password form the home page password data
  const DeletePassword = (boxId: number, passwordId: number) => {
    setSocialData((item) => {
      const data = [...item];
      data[boxId].passwords?.splice(passwordId, 1);
      return data;
    });
  };

  // Delete all the passwords form the home page password data
  const DeleteAll = () => {
    setSocialData((item) => {
      const data = [...item];
      return data.map((dataItem) => {
        return { ...dataItem, passwords: [] };
      });
    });
  };

  const signUpPostRequest = async (data: {
    name: string;
    email: string;
    password: string;
  }) => {
    const signup = await FetchingApi({
      url: "signup",
      method: "POST",
      data,
    });
    if (signup.success) {
      setIsSignUp(true);
    }
  };

  const loginPostRequest = async (data: {
    email: string;
    password: string;
  }) => {
    const loginData = await FetchingApi({
      url: "login",
      method: "POST",
      data,
    });

    setLoginToken(loginData);
  };
  console.log(LoginToken)

  useEffect(() => {
    if (LoginToken) {
      async () => {
        const user = await FetchingApi({
          url: "me",
          method: "GET",
          token: LoginToken,
        });
        console.log(LoginToken);

        setUserData(user);
        console.log(userData);
      };
    }
  }, [LoginToken, userData]);


  return (
    <MyContext.Provider
      value={{
        SocialData,
        setSocialData,
        GetSavePassword,
        OpenCloseMoreBox,
        DeletePassword,
        DeleteAll,
        signUpPostRequest,
        loginPostRequest,
        userData,
        LoginToken,
        isSignUp,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
