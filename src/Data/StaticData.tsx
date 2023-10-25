import { FaCog, FaHome, FaLock } from "react-icons/fa";
import {  SidebarDataTypes } from "./Types";

export const SidebarData:SidebarDataTypes[] = [
    {
        name:"Home",
        icon:<FaHome/>,
        link:"/",
    },
    {
        name:"Password",
        icon:<FaLock/>,
        link:"/password",
    },
    {
        name:"Pin",
        icon:<FaHome/>,
        link:"/pin",
    },
    {
        name:"More",
        icon:<FaHome/>,
        link:"/more",
    },
    {
        name:"Setting",
        icon:<FaCog/>,
        link:"/setting",
    },
]

