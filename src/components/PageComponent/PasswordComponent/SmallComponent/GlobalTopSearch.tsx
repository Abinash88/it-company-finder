import Button, { InputField } from '@/components/UI/UiItems'
import Div from '@/lib/Div'
import React from 'react'
import { FaChevronDown, FaSearch } from 'react-icons/fa'
import { AiOutlinePlus } from "react-icons/ai";


const GlobalTopSearch = ({ setIsOpenPopup, isOpenPopup, setText, offCheckList = true }:
    {
        setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>,
        isOpenPopup: boolean,
        setText: React.Dispatch<React.SetStateAction<string>>
        offCheckList?: boolean;
    }) => {

    return (
        <Div>
            <Div className="w-full flex items-center  gap-3 pr-4">
                {offCheckList && <input type='checkbox' className='rounded-sm border w-5 h-5 bg-input' />}
                <Button icon={<AiOutlinePlus className="text-[15px]" />}
                    onClick={() => { setIsOpenPopup(!isOpenPopup) }} size="md" variant={'secondary'}
                    className="text-[11px] flex gap-2 " btnName="Add" />
                <Button icon={<FaChevronDown className="text-[12px] text-gray-60" />}
                    onClick={() => { }} size="md" variant={'outline'}
                    className="text-[11px] flex gap-2 " btnName="More" />
                <Div className="flex items-center gap-2">
                    <InputField onChange={(e) => { setText(e.target.value) }} type="search" className="w-[300px] placeholder:text-[11px] bg-white" placeholder="Search Password..." />
                </Div>
            </Div>
        </Div>
    )
}

export default GlobalTopSearch