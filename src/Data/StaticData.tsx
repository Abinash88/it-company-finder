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
    name: "Lists",
    icon: <FaDatabase />,
    link: "/lists",
  },
  {
    name: "Pin code",
    icon: <FaHome />,
    link: "/pincode",
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
