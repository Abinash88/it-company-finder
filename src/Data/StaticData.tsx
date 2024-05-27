import { FaCog, FaDatabase, FaHome, FaLock } from "react-icons/fa";
import { SidebarDataTypes, settingLinksTypes } from "./Types";

export const SidebarData: SidebarDataTypes[] = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    link: "/dashboard",
  },
  {
    name: "Password",
    icon: <FaLock />,
    link: "/dashboard/password",
  },
  {
    name: "Notes",
    icon: <FaDatabase />,
    link: "/dashboard/notes",
  },
  {
    name: "Timer",
    icon: <FaHome />,
    link: "/dashboard/time",
  },
  {
    name: "Setting",
    icon: <FaCog />,
    link: "/dashboard/setting",
  },
];

export const SettingLinksData: settingLinksTypes[] = [
  {
    name: "profile",
    link: "/setting",
  },
  {
    name: "profile",
    link: "/setting/profile",
  },
  {
    name: "profile",
    link: "/setting/profile",
  },
  {
    name: "profile",
    link: "/setting/profile",
  },
];
