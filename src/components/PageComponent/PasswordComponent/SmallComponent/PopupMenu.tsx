import Div from '@/lib/Div'
import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { PasswordMoreToolTypes } from '@/Data/Types'

const PopupMenu = ({ tools }: { tools: PasswordMoreToolTypes[] }) => {
    return (
        <Div className='flex flex-col gap-1'>
            <Menu>
                <MenuButton className="flex items-center gap-2 rounded-md py-1.5  text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none  data-[focus]:outline-1 data-[focus]:outline-white">
                    <BsThreeDotsVertical className=" text-gray-800" />
                </MenuButton>
                <Transition
                    enter="transition ease-out duration-75"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <MenuItems
                        anchor="bottom end"
                        className="w- origin-top-right rounded-xl border border-gray-100 bg-white p-1   [--anchor-gap:var(--spacing-1)] focus:outline-none"
                    >
                        {tools?.map((item) => (
                            <MenuItem key={item?.name}>
                                <button onClick={item?.clickFunc} className="group flex w-full text-[12px] items-center gap-2 rounded-lg py-1 text-gray-600 px-3 data-[focus]:bg-gray-400/10">
                                    {item?.icon}
                                    <span>  {item?.name}</span>
                                </button>
                            </MenuItem>
                        ))
                        }
                    </MenuItems>
                </Transition>
            </Menu>
        </Div >
    )
}

export default PopupMenu