import Div from '@/lib/Div'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const RemoveBox = ({ remove, bgStyle, iconStyle }: { remove: () => void, bgStyle?: string, iconStyle?: string; }) => {
    return (
        <Div
            onClick={remove}
            className={(`absolute top-2 right-3 transform rotate-[45deg]  p-2 rounded-full 
            transition duration-300 hover:rotate-[140deg] hover:bg-gray-100 cursor-pointer ${bgStyle}`)}
        >
            <AiOutlinePlus className={(`text-gray-600 text-[19px] ${iconStyle}`)} />
        </Div>
    )
}

export default RemoveBox