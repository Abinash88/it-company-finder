import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"


const CustomSheet = ({
    children,
    isOpenPopup,
    setIsOpenPopup
}:
    {
        children: React.ReactNode,
        isOpenPopup: boolean,
        setIsOpenPopup: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
    return (
        <Sheet open={isOpenPopup} onOpenChange={() => { setIsOpenPopup(!isOpenPopup) }}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you absolutely sure?</SheetTitle>
                    <SheetDescription>
                        {children}
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default CustomSheet