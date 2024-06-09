import Image from 'next/image'
import React from 'react'
import VerifyEmail from '../../assests/verify-image/verify-email.jpg'
import Loading from '../PageComponent/LibComponent/Loading'
import ButtonLoading from '@/Hooks/use-loading'
import Button from '../UI/UiItems'
import Link from 'next/link'

const MainEmailVerify = () => {
    return (
        <div className='w-full h-screen flex items-center justify-center bg-gray-100 '>
            <div className="max-w-[800px] w-[90%] relative mx-auto h-[80%] flex flex-col justify-center items-center bg-white rounded-md">
                {/* <Image src={`/black-logo.png`} alt='verify-picture' className='w-[100px] left-5 top-4 absolute object-cover' width={600} height={600} /> */}
                {
                    <ButtonLoading className='' />  
                }
                <Image src={VerifyEmail} alt='verify-picture' className='w-[400px] object-cover' width={600} height={600} />
                <h3 className='text-lg text-gray-600'>Your Email is verified!</h3>
                <Link href={`/account`}>
                    <Button type='button' btnName='Go to login' className='my-4 rounded-sm text-sm' />
                </Link>
            </div>
        </div>
    )
}

export default MainEmailVerify