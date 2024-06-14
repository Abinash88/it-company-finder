'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import VerifyEmail from '../../assests/auth/verify-email.jpg'
import ButtonLoading from '@/Hooks/use-loading'
import Button from '../UI/UiItems'
import Link from 'next/link'
import { fetchRequest } from '@/lib/fetch'
import { useSearchParams } from 'next/navigation'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

let count = false;

const MainEmailVerify = () => {
    const params = useSearchParams();
    const token = params.get('token');
    const router = useRouter();

    useEffect(() => {
        (async () => {
            try {
                if (count) return;
                if (!token) return router.push('/account');
                count = true
                const verify = await fetchRequest<{}, { message: string; success: boolean }>({
                    url: `/api/v1/auth/verify-user`, headers: {
                        'Authorization': `Bearer ${token}`
                    },
                    method: 'POST'
                })
                console.log(verify);
                if (verify?.success) {
                    toast.success(verify.message);
                }

            } catch (err) {
                const error = err as Error;
                console.log(error.message);
            }
        })();
    }, []);
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