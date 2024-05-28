import { FaCog, FaDatabase, FaHome, FaLock, FaRegCopy, FaRegEdit } from "react-icons/fa";
import { SidebarDataTypes, settingLinksTypes } from "./Types";
import { StaticNotesDataTypes, TodoDataTypes } from "@/BackendLib/lib/types";


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
    name: "todo",
    icon: <FaHome />,
    link: "/dashboard/todo",
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
  { id: 0, catagory: '-select type-' },
  { id: 1, catagory: 'not important' },
  { id: 2, catagory: 'normal' },
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