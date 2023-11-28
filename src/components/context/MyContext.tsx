"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import Facebook from "@/assests/homeImage/facebook.jpg";
import Instagram from "@/assests/homeImage/instagram.jpg";
import Messnager from "@/assests/homeImage/messanger.jpg";
import Reddit from "@/assests/homeImage/reddit.jpg";
import Pinterest from "@/assests/homeImage/pintrest.jpg";
import { MyAppDataTypes, contextTypes } from "@/Data/Types.jsx";
import { FetchingApi } from "./contextApi";
const MyContext = createContext<contextTypes | undefined>(undefined);
import { useRouter } from "next/navigation";

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

  let [loadingUserData, setLoadingUserData] = useState<boolean>(true);
  const [LoginData, setLoginData] = useState();
  const [userData, setUserData] = useState();
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const [signUpLoading, setSignupLoading] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);

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
    setSignupLoading(true);
    const signup = await FetchingApi({
      url: "signup",
      method: "POST",
      data,
    });
    if (signup.success) {
      setIsSignUp(true);
    }
    setSignupLoading(false);
  };

  const loginPostRequest = async (data: {
    email: string;
    password: string;
  }) => {
    setLoginLoading(true);
    const loginData = await FetchingApi({
      url: "login",
      method: "POST",
      data,
    });
    setLoginLoading(false);
    if (loginData?.success) {
      setLoginData(loginData);
      router.push("/");
    }
  };

  const GetUserData = async () => {
    const user = await FetchingApi({
      url: "me",
      method: "GET",
    });
    if (user?.success) {
      setUserData(user);
      setLoadingUserData(false);
    }
  };

  const LogoutFunc = async () => {
    await FetchingApi({
      url: "logout",
      method: "GET",
    });
  };

  useEffect(() => {
    GetUserData();
  }, []);

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
        LoginData,
        isSignUp,
        loadingUserData,
        GetUserData,
        LogoutFunc,
        signUpLoading,
        loginLoading
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
