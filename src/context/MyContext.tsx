"use client";

import React, { ReactNode, createContext, useEffect, useState } from "react";
import Facebook from "@/assests/homeImage/facebook.jpg";
import Instagram from "@/assests/homeImage/instagram.jpg";
import Messnager from "@/assests/homeImage/messanger.jpg";
import Reddit from "@/assests/homeImage/reddit.jpg";
import Pinterest from "@/assests/homeImage/pintrest.jpg";
import { MyAppDataTypes, contextTypes } from "@/Data/Types.jsx";
const MyContext = createContext<contextTypes | undefined>(undefined);
import { useRouter } from "next/navigation";
import { fetchRequest } from "@/lib/fetch";

export const MyContextProvider = ({ children }: { children: ReactNode }) => {
  const [SocialData, setSocialData] = useState<MyAppDataTypes[]>([
    {
      id: "asldewio23409roasidjf",
      name: "Facebook",
      link: "https://www.facebook.com",
      image: Facebook,
      password: 'facebook',
      catagory: 'password'
    },
    {
      id: "aoisudfjoaisdfjaosidj",
      name: "Instagram",
      link: "https://www.instagram.com",
      image: Instagram,
      password: 'instagram',
      catagory: 'password'
    },
    {
      id: "24o824093rijaoisjdfaf",
      name: "Messenger",
      link: "https://www.messanger.com",
      image: Messnager,
      password: 'messager',
      catagory: 'password'
    },
    {
      id: "aosidjf4o4429058reoia",
      name: "Reddit",
      link: "https://www.reddit.com",
      image: Reddit,
      password: 'reddit',
      catagory: 'password'
    },
    {
      id: "420983rhauoisdjfaoisl",
      name: "Pinterest",
      link: "https://www.pinterest.com",
      image: Pinterest,
      password: 'pinterest',
      catagory: 'password'
    },
  ]);

  let [loadingUserData, setLoadingUserData] = useState<boolean>(true);
  const [LoginData, setLoginData] = useState();
  const [userData, setUserData] = useState();
  const [isSignUp, setIsSignUp] = useState(false);
  const router = useRouter();
  const [signUpLoading, setSignupLoading] = useState<boolean>(false);
  const [loginLoading, setLoginLoading] = useState<boolean>(false);


  return (
    <MyContext.Provider
      value={{
        SocialData,
        setSocialData,
        userData,
        LoginData,
        isSignUp,
        loadingUserData,
        signUpLoading,
        loginLoading
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
