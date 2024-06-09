import Image from 'next/image'
import React from 'react'
import mailBox from "../../assests/auth/mailbox.jpg"
import Link from 'next/link'


const GotoMailBox = ({ checkEmail }: { checkEmail: string }) => {
    return (
        <div className='size-full  flex items-center justify-center'>
            <div className="max-w-[800px] flex justify-center flex-col items-center w-[95%] ">
                <p>Click a verify link which we have sent to your mail  <b>{checkEmail}</b> </p>
                <Image src={mailBox} alt='verify-picture' className='w-[400px] object-cover' width={600} height={600} />
                <Link target='_blank' href={`https://mail.google.com/`} className='text-sm py-2 px-4 border rounded-md border-gray-400 text-gray-500 hover:bg-gray-50'>Go to Mail</Link>
            </div>
        </div>
    )
}

export default GotoMailBox