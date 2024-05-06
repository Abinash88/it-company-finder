import { FaCog, FaDatabase, FaHome, FaLock } from "react-icons/fa";
import { SidebarDataTypes, settingLinksTypes } from "./Types";

export const SidebarData: SidebarDataTypes[] = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    link: "/",
  },
  {
    name: "Password",
    icon: <FaLock />,
    link: "/password",
  },
  {
    name: "Notes",
    icon: <FaDatabase />,
    link: "/notes",
  },
  {
    name: "Timer",
    icon: <FaHome />,
    link: "/time",
  },
  {
    name: "Setting",
    icon: <FaCog />,
    link: "/setting",
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
