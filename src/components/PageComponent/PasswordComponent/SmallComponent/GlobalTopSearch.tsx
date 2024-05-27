import Button, { InputField } from '@/components/UI/UiItems'
import Div from '@/lib/Div'
import React from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { AiOutlinePlus } from "react-icons/ai";


const GlobalTopSearch = ({ setIsOpenPopup, isOpenPopup }:
    { setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>, isOpenPopup: boolean }) => {
    return (
        <Div>
            <Div className="w-full flex items-center  gap-3 pr-4">
                <Button icon={<AiOutlinePlus className="text-[16px] text-sm" />}
                    onClick={() => { setIsOpenPopup(!isOpenPopup) }} size="md" variant={'secondary'}
                    className="text-[12px] flex gap-2 " btnName="Add" />
                <Button icon={<FaChevronDown className="text-[13px] text-gray-600" />}
                    onClick={() => {  }} size="md" variant={'outline'}
                    className="text-[12px] flex gap-2 " btnName="More" />
                <Div className="flex items-center gap-2">
                    <InputField type="search" className="w-[300px] bg-white" placeholder="Search Password..." />
                </Div>
            </Div>
        </Div>
    )
}

export default GlobalTopSearch