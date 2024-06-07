import { cn } from '@/lib/utils'
import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const ButtonLoading = ({ className }: { className?: string }) => {
    return (
        <FaSpinner className={(`text-[18px] animate-spin text-white ${className}`)} />
    )
}

export default ButtonLoading