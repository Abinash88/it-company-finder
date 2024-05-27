import Button from '@/components/UI/UiItems'
import Div from '@/lib/Div'
import React from 'react'
import { FaCopy, FaEdit, FaTrash } from 'react-icons/fa'

const PopupMenu = () => {
    return (
        <Div className='flex flex-col w-full gap-1'>
            <Button className='text-[11px] py-1 gap-2 text-gray-500 items-center flex  justify-start hover:gray-100 text-left w-full '
                ButtonClick={() => { }} variant='ghost' btnName='Edit' icon={<FaEdit />} />
            <Button className='text-[11px] py-1 gap-2 text-gray-500 items-center flex  justify-start hover:gray-100 text-left w-full '
                ButtonClick={() => { }} variant='ghost' btnName='Delete' icon={<FaTrash />} />
            <Button className='text-[11px] py-1 gap-2 text-gray-500 items-center flex  justify-start hover:gray-100 text-left w-full '
                ButtonClick={() => { }} variant='ghost' btnName='Copy' icon={<FaCopy />} />


        </Div>
    )
}

export default PopupMenu