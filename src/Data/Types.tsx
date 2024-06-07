import { StaticImageData } from "next/image";
import { ReactElement } from "react";

export type SidebarDataTypes = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

export type password = {
  passwordName: string;
  password: string;
  OpenMoreBar: boolean;
};

export type MyAppDataTypes = {
  id: string;
  name: string;
  link: string;
  image: StaticImageData | null;
  password: string;
  catagory: string;
};

export type settingLinksTypes = {
  name: string;
  link: string;
};

export type userData = {
  success: boolean;
  message: string;
  data: { name: string; email: string; id: string };
};

export type contextTypes = {
  SocialData: MyAppDataTypes[];
  setSocialData: React.Dispatch<React.SetStateAction<MyAppDataTypes[]>>;
  userData: any;
  isSignUp: boolean;
  LoginData: userData | undefined;
  loadingUserData: boolean;
  loginLoading: boolean;
  signUpLoading: boolean;
};


export interface PasswordMoreToolTypes {
  name: string;
  icon: ReactElement;
  clickFunc: () => void;
}