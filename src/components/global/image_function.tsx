import { cn } from '@/lib/utils';
import React from 'react'
import { FaEdit } from 'react-icons/fa'
import { HiOutlineTrash } from "react-icons/hi2";

const ImageFunction = ({ trashImage, uploadImage, className, moreStyle }: { trashImage: () => void, uploadImage: () => void, className?: string, moreStyle?: string }) => {
    return (
        <div className={cn(`absolute inset-0  flex justify-center w-full h-full bg-gray-600/70 items-center gap-4 ${moreStyle}`)}>
            <FaEdit onClick={uploadImage} className={cn(`text-gray-50 cursor-pointer ${className}`)} />
            <HiOutlineTrash onClick={trashImage} className={cn(` text-red-400 cursor-pointer ${className}`)} />
        </div>
    )
}

export default ImageFunction