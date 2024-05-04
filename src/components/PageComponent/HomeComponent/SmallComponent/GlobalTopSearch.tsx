import Button, { InputField } from '@/components/UI/UiItems'
import Div from '@/lib/Div'
import React from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa'

const GlobalTopSearch = ({ setIsOpenPopup, isOpenPopup }:
    { setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>, isOpenPopup: boolean }) => {
    return (
        <Div>
            <Div className="w-full flex items-center gap-3 pr-4">
                <Button icon={<FaPlus className="text-[16px]" />} 
                    ButtonClick={() => { setIsOpenPopup(!isOpenPopup) }} size="md" variant={'default'}
                    className="text-[12px] flex gap-2 " btnName="Add" />
                <Div className="flex items-center gap-2">
                    <InputField type="search" className="" placeholder="Search Password" />
                    <FaSearch className="text-[20px] cursor-pointer text-gray-500 " />
                </Div>
            </Div>
        </Div>
    )
}

export default GlobalTopSearch