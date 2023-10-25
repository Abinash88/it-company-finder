import { StaticImageData } from "next/image";

export type SidebarDataTypes = {
  name: string;
  icon: React.ReactNode;
  link: string;
};

export type password = {
  passwordName: string;
  password: string;
  OpenMoreBar:boolean
};

export type MyAppDataTypes = {
  id: string;
  name: string;
  link: string;
  image: StaticImageData;
  passwords: password[];
};

