import { SidebarDataTypes, settingLinksTypes } from "./Types";
import { StaticNotesDataTypes, TodoDataTypes } from "@/Backend/lib/types";
import { IoHomeOutline } from "react-icons/io5";
import { FiLock } from "react-icons/fi";
import { SlNotebook } from "react-icons/sl";
import { FaListCheck } from "react-icons/fa6";
import { BiCog } from "react-icons/bi";



export const SidebarData: SidebarDataTypes[] = [
  {
    name: "Dashboard",
    icon: <IoHomeOutline className="" />,
    link: "/dashboard",
  },
  {
    name: "Password",
    icon: <FiLock className="" />,
    link: "/dashboard/password",
  },
  {
    name: "Notes",
    icon: <SlNotebook className="" />,
    link: "/dashboard/notes",
  },
  {
    name: "todo",
    icon: <FaListCheck className=" text-" />,
    link: "/dashboard/todo",
  },
  {
    name: "Setting",
    icon: <BiCog className=" text-" />,
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




export const selectCatagory = [
  { id: 0, catagory: '-select catagory-' },
  { id: 1, catagory: 'PaymentCard' },
  { id: 2, catagory: 'Web Account' },
  { id: 3, catagory: 'File Store' },
  { id: 4, catagory: 'Secure Note' },
  { id: 5, catagory: 'Unix' },
  { id: 6, catagory: 'Windows' },
  { id: 7, catagory: 'Bank Account' },
  { id: 8, catagory: 'Socal Security Number' },
];

export const selectNotePriority = [
  { id: 2, catagory: 'normal' },
  { id: 1, catagory: 'not important' },
  { id: 3, catagory: 'important' },
  { id: 4, catagory: 'very important' },
];

export const notesData: StaticNotesDataTypes[] = [
  {
    id: "asldewio23409roasidjf",
    title: "Notes Title 1",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero officiis vitae
     odit ad repellendus sequi ut consequatur porro quam autem natus consequuntur neque 
     aperiam labore, beatae quidem. Repellat, illum?`,
    priority: 'important'
  },
  {
    id: "aoisudfjoaisdfjaosidj",
    title: "Notes Title 2",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero officiis vitae
     odit ad repellendus sequi ut consequatur porro quam autem natus consequuntur neque 
     aperiam labore, beatae quidem. Repellat, illum?`,
    priority: 'important'
  },
  {
    id: "24o824093rijaoisjdfaf",
    title: "Notes Title 3",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero officiis vitae
     odit ad repellendus sequi ut consequatur porro quam autem natus consequuntur neque 
     aperiam labore, beatae quidem. Repellat, illum?`,
    priority: 'important'
  },
  {
    id: "aosidjf4o4429058reoia",
    title: "Notes Title 4",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero officiis vitae
     odit ad repellendus sequi ut consequatur porro quam autem natus consequuntur neque 
     aperiam labore, beatae quidem. Repellat, illum?`,
    priority: 'important'
  },
  {
    id: "420983rhauoisdjfaoisl",
    title: "Notes Title 5",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum libero officiis vitae
     odit ad repellendus sequi ut consequatur porro quam autem natus consequuntur neque 
     aperiam labore, beatae quidem. Repellat, illum?`,
    priority: 'important'
  },
]


export const todoData: TodoDataTypes[] = [
  {
    id: "asldewio23409roasidjf",
    name: "Task Name",
    description: `Task Description`,
    priority: 'important'
  },
  {
    id: "asldewio23409roasidjf",
    name: "Task Name",
    description: `Task Description`,
    priority: 'important'
  },
  {
    id: "asldewio23409roasidjf",
    name: "Task Name",
    description: `Task Description`,
    priority: 'important'
  },

]