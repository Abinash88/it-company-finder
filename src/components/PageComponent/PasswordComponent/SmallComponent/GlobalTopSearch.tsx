import Button, { InputField } from '@/components/UI/UiItems'
import Div from '@/lib/Div'
import React from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { AiOutlinePlus } from "react-icons/ai";


const GlobalTopSearch = ({ setIsOpenPopup, isOpenPopup, setText }:
    { setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>, isOpenPopup: boolean, setText: React.Dispatch<React.SetStateAction<string>> }) => {

    return (
        <Div>
            <Div className="w-full flex items-center  gap-3 pr-4">
                <input type='checkbox' className='rounded-sm border w-5 h-5 bg-input' />
                <Button icon={<AiOutlinePlus className="text-[16px] text-sm" />}
                    onClick={() => { setIsOpenPopup(!isOpenPopup) }} size="md" variant={'secondary'}
                    className="text-[12px] flex gap-2 " btnName="Add" />
                <Button icon={<FaChevronDown className="text-[13px] text-gray-600" />}
                    onClick={() => { }} size="md" variant={'outline'}
                    className="text-[12px] flex gap-2 " btnName="More" />
                <Div className="flex items-center gap-2">
                    <InputField onChange={(e) => { setText(e.target.value) }} type="search" className="w-[300px] bg-white" placeholder="Search Password..." />
                </Div>
            </Div>
        </Div>
    )
}

export default GlobalTopSearch