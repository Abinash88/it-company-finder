import { StaticImageData } from 'next/image';
import { ReactElement } from 'react';

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
  image: StaticImageData | null | string;
  password: string;
  category: string;
};

export type settingLinksTypes = {
  name: string;
  link: string;
};

export type userResultTypes<T = object> = {
  success: boolean;
  message: string;
  data: T;
};

export type DataTypes = {
  id: string;
  createdAt: string;
  email: string;
  name: string;
};

export type contextTypes = {
  SocialData: MyAppDataTypes[];
  setSocialData: React.Dispatch<React.SetStateAction<MyAppDataTypes[]>>;
  userData: userResultTypes<DataTypes> | undefined;
  toggleSidebar: boolean;
  isLoading: boolean;
  error: Error | null;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface PasswordMoreToolTypes {
  name: string;
  icon: ReactElement;
  clickFunc: () => void;
}

export enum ModalTypes {
  MODAL = 'MODAL',
  SHEET = 'SHEET',
}
