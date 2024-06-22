import { SidebarDataTypes } from '@/Data/Types'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const SidebarLink = ({ item }: { item: SidebarDataTypes }) => {
    return (
        <li
            className={`flex duration-300 transition-all s hover:bg-gray-100 group cursor-pointer w-full items-center`}
        >
            <Link
                className={cn(` px-6 py-2 w-full h-full flex items-center  space-x-8 font-normal text-[15px] transition-all duration-500 `)}
                href={item?.link}
            >
                <LinkIcon icon={item?.icon} />
                <span className={cn(`text-gray-500 font-normal `)}>{item?.name}</span>
            </Link>
        </li>
    )
}

export default SidebarLink


export const LinkIcon = ({ icon, className }: { icon: React.ReactNode, className?: string }) => (
    <span className={cn(` text-gray-600 text-lg duration-300 transition-all ${className}`)}>
        {icon}
    </span>
)