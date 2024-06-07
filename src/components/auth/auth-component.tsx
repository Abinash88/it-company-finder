import MyContext from '@/context/MyContext'
import Div from '@/lib/Div'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { FaFacebookF, FaGoogle } from 'react-icons/fa'

const Topheader = ({ title, subtitle, image }: { title: string, subtitle: string, image?: string }) => {
    return (
        <Div className='flex flex-col items-center'>
            <Image src={'/black-logo.png'} width={500} height={500} className='w-[100px]' alt='logo' />
            <h3 className="text-center text-[20px] mb-1 font-semibold text-gray-900">
                {title}
            </h3>
            <p className=" mb-3">{subtitle}</p>
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
            className="absolute cursor-pointer right-4 top-[34px]"
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
        <button ref={ref} {...rest} className={(`px-6 py-2 text-[13px] mx-auto flex justify-center bg-gray-700
         text-white rounded-md w-full hover:bg-gray-600 transition-all`)} />
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
        <Div className="flex flex-col space-y-1 ">
            <label
                className=" text-[14px] font-normal text-gray-700"
                htmlFor={label}
            >
                {label}
            </label>
            <input ref={ref} id={label} {...props} className={cn(`  px-4 py-[5px] text-[13px] placeholder:text-[13px]
             placeholder:text-gray-500 rounded-md border focus:outline-none ${className}`)} />
        </Div>
    )
})

AuthInputBox.displayName = 'AuthInputBox'


export const MoreLogin = () => {
    return (
        <Div className="flex gap-4 justify-center mt-2 mb-2">
            <button type="button" className="flex flex-1 items-center text-[14px] justify-center rounded-md border border-gray-400 py-[5px]  space-x-3">
                <FaGoogle className="text-gray-900" />
                <span> Google</span>
            </button>

            <button type="button" className="flex flex-1 items-center text-[14px] justify-center rounded-md border border-gray-400 py-[5px]  space-x-3">
                <FaFacebookF className="text-gray-900" />
                <span> Facebook</span>
            </button>
        </Div>
    )
}