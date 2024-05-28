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
      id: "asldewio23409roasidjf",
      name: "Facebook",
      link: "https://www.facebook.com",
      image: Facebook,
      password: 'facebook',
      catagory:'password'
    },
    {
      id: "aoisudfjoaisdfjaosidj",
      name: "Instagram",
      link: "https://www.instagram.com",
      image: Instagram,
      password: 'instagram',
      catagory:'password'
    },
    {
      id: "24o824093rijaoisjdfaf",
      name: "Messenger",
      link: "https://www.messanger.com",
      image: Messnager,
      password: 'messager',
      catagory:'password'
    },
    {
      id: "aosidjf4o4429058reoia",
      name: "Reddit",
      link: "https://www.reddit.com",
      image: Reddit,
      password: 'reddit',
      catagory:'password'
    },
    {
      id: "420983rhauoisdjfaoisl",
      name: "Pinterest",
      link: "https://www.pinterest.com",
      image: Pinterest,
      password: 'pinterest',
      catagory:'password'
    },
  ]);

  let [loadingUserData, setLoadingUserData] = useState<boolean>(true);
  const [LoginData, setLoginData] = useState();
  const [userData, setUserData] = useState();
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const [signUpLoading, setSignupLoading] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);



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
      router.push("/pincode");
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
