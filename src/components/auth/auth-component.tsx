import MyContext from '@/context/MyContext'
import Div from '@/lib/Div'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const Topheader = ({ title, subtitle, image, className }: { title: string, subtitle: string, image?: string, className?: string }) => {
    return (
        <Div className={cn(`flex flex-col items-start ${className}`)}>
            <Image src={'/black-logo.png'} width={500} height={500} className='w-[100px]' alt='logo' />
            <h3 className="text-start text-[24px] mb-2 mt-4 font-semibold text-[#383648]">
                {title} 
            </h3>
            <p className=" mb-3 text-[16px] text-blue-900/60">{subtitle}</p>
        </Div>
    )
}

export default Topheader


export const EyeToggle = ({ setIsPasswordSeen, isPasswordSeen }: {
    setIsPasswordSeen: React.Dispatch<React.SetStateAction<boolean>>,
    isPasswordSeen: boolean
}) => {
    return (
        <Div
            onClick={() => setIsPasswordSeen(!isPasswordSeen)}
            className="w-[50px] py-2 md:py-[11px] mt-6 border-border border rounded-tr-xl rounded-br-xl bg-gray-50 flex items-center justify-center cursor-pointer"
        >
            {isPasswordSeen ? (
                <AiFillEyeInvisible className="text-gray-700 text-[18px]" />
            ) : (
                <AiFillEye className="text-gray-600 text-[18px]" />
            )}
        </Div>
    )
}

interface ButtonTypes extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

export const SubmitButton = React.forwardRef<HTMLButtonElement, ButtonTypes>(({ ...rest }, ref) => {
    return (
        <button ref={ref} {...rest} className={(`px-6 py-2 md:py-3 text-[14px] mx-auto flex justify-center bg-[#075bdb]
         text-white rounded-md w-full hover:bg-[#075bdb]/90 font-semibold transition-all`)} />
    )
})

SubmitButton.displayName = 'SubmitButton'

export const BottomText = ({ text, type }: { text: string, type: string }) => {
    const router = useRouter();
    return (
        <p className="text-[12px] pb-4">{text} <button type='button' className="text-gray-800 capitalize hover:underline"
            onClick={() => router.replace(`/account?type=${type}`)}>{type}</button></p>
    )
}

export const OrComponent = () => {
    return (
        <Div className="flex items-center gap-5 w-full">
            <span className="flex-1 border-b border-gray-300"></span>
            <p>or</p>
            <span className="flex-1 border-b border-gray-300"></span>
        </Div>
    )
}


interface AuthInput extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}

export const AuthInputBox = React.forwardRef<HTMLInputElement, AuthInput>(({ className, label, ...props }, ref) => {
    return (
        <Div className="flex flex-col flex-1 space-y-1 ">
            <label
                className=" text-[14px] font-semibold text-gray-700"
                htmlFor={label}
            >
                {label}
            </label>
            <input ref={ref} id={label} {...props} className={cn(`  px-4 py-2 md:py-[10px] text-[13px] placeholder:text-[13px]
             placeholder:text-gray-500 rounded-md border border-border focus:outline-none ${className}`)} />
        </Div>
    )
})

AuthInputBox.displayName = 'AuthInputBox'


export const MoreLogin = () => {
    return (
        <Div className="flex gap-4 justify-center mt-2 mb-2">
            <button type="button" className="flex text-gray-600 hover:bg-background transition-all flex-1 items-center text-[14px] justify-center rounded-md border border-gray-300 py-2 md:py-[10px]  space-x-3">
                <FcGoogle className="text-lg" />
                <span> Google</span>
            </button>

            <button type="button" className="flex text-gray-600 hover:bg-background transition-all flex-1 items-center text-[14px] justify-center rounded-md border border-gray-300 py-2 md:py-[10px]  space-x-3">
                <FaFacebook className="text-lg text-blue-500" />
                <span> Facebook</span>
            </button>
        </Div>
    )
}