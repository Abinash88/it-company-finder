import Div from '@/lib/Div'
import React from 'react'
import { PasswordMoreToolTypes } from '@/Data/Types'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const PopupMenu = ({ tools }: { tools: PasswordMoreToolTypes[] }) => {
  return (
    <Div className='flex flex-col gap-1'>
      <DropdownMenu>
        <DropdownMenuTrigger>Open</DropdownMenuTrigger>
        <DropdownMenuContent>
          {tools?.map((item) => (
            <DropdownMenuItem key={item?.name}>
              <button
                onClick={item?.clickFunc}
                className='group flex w-full text-[12px] items-center gap-2 rounded-lg py-1 text-gray-600 px-3 data-[focus]:bg-gray-400/10'
              >
                {item?.icon}
                <span> {item?.name}</span>
              </button>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </Div>
  )
}

export default PopupMenu
