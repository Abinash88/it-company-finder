import { StaticNotesDataTypes } from '@/Backend'/lib/types'
import RemoveBox from '@/components/ui/remove'
import Div from '@/lib/Div'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

const SingleNotePopup = ({ notePopup, setNotePopup }: {
    notePopup: StaticNotesDataTypes,
    setNotePopup: React.Dispatch<React.SetStateAction<StaticNotesDataTypes | undefined>>

}) => {
    return (
        <Div className=" h-full fixed flex items-center justify-center backdrop-blur-5 inset-0 rounded-md">
            <Div
                onClick={() => { setNotePopup(undefined) }}
                className=" absolute cursor-normal flex items-center justify-center  z-0 w-full h-full bg-gray-500/40 top-0 left-0" />
            <Div className="h-[80%] relative z-100 w-[70%] bg-white rounded-md p-4 mt-5 flex flex-col gap-1 ">
                <RemoveBox bgStyle='hover:!bg-gray-100' iconStyle='text-gray-600' remove={() => { setNotePopup(undefined) }} />
                <h2 className="text-[15px] text-gray-600 font-normal">{notePopup?.title}</h2>
                <p className="text-[13px] w-[80%] text-gray-600 font-normal">{notePopup?.description.substring(0, 200)}... </p>
            </Div>
        </Div>
    )
}

export default SingleNotePopup