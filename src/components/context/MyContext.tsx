"use client";

import React, { ReactNode, createContext, useState } from "react";
import Facebook from "@/assests/homeImage/facebook.jpg";
import Instagram from "@/assests/homeImage/instagram.jpg";
import Messnager from "@/assests/homeImage/messanger.jpg";
import Reddit from "@/assests/homeImage/reddit.jpg";
import Pinterest from "@/assests/homeImage/pintrest.jpg";
import { MyAppDataTypes } from "@/Data/Types.jsx";

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
  DeleteAll:() => void;
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
      name: "Messanger",
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
      return data.map((dataItem, index) => {
        return {...dataItem, passwords:[]}
      })
    })
  }


  return (
    <MyContext.Provider
      value={{
        SocialData,
        setSocialData,
        GetSavePassword,
        OpenCloseMoreBox,
        DeletePassword,
        DeleteAll
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
