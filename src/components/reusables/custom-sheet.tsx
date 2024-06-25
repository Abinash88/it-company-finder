import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"


const CustomSheet = ({
    children,
    isOpenPopup,
    setIsOpenPopup,
    title,
}:
    {
        children: React.ReactNode,
        isOpenPopup: boolean,
        setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
        title?: string
    }) => {
    return (
        <Sheet open={isOpenPopup} onOpenChange={() => { setIsOpenPopup(!isOpenPopup) }}>
            <SheetContent className='sm:max-w-xl'>
                <SheetHeader>
                    <SheetTitle className=' border-b pb-2'>{title}</SheetTitle>
                    <SheetDescription>
                        {children}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default CustomSheet