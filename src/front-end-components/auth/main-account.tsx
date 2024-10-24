'use client';

import React, { useContext, useEffect, useState } from 'react';
import LoginForm from './LoginForm';
import Signup from './signup-form';
import Div from '@/lib/Div';
import MyContext from '../../context/MyContext';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import GotoMailBox from './goto-mailbox';
import Image from 'next/image';
import AccountImage from '../../assests/auth/account.jpg';

const SignUpForm = () => {
  const contextData = useContext(MyContext);
  const [checkEmail, setCheckEmail] = useState('');
  const router = useRouter();
  const path = usePathname();
  const param = useSearchParams();
  const type = param.get('type');

  useEffect(() => {
    if (
      (path.includes('/account') && !type?.includes('mailbox')) ||
      !type?.includes('login') ||
      !type?.includes('signup')
    )
      router.replace('/account?type=login');
  }, []);

  useEffect(() => {
    if (contextData?.userData && contextData?.userData?.data) {
      router.push('/');
    }
  }, [contextData?.userData, router]);

  return (
    <Div className='flex flex-col  justify-center items-start bg-background w-full h-screen'>
      <Div className='w-full h-full relative flex  items-start justify-start'>
        <Div
          className={` max-w-[650px] w-full lg:w-[90%]  bg-background  h-full  transition duration-300`}
        >
          {type === 'login' ? (
            <LoginForm setCheckEmail={setCheckEmail} />
          ) : type === 'signup' ? (
            <Signup setCheckEmail={setCheckEmail} />
          ) : (
            <GotoMailBox checkEmail={checkEmail} />
          )}
        </Div>
        <Div className=' h-full flex-1'>
          <Image
            src={AccountImage}
            className='w-full h-full object-cover object-center lg:object-right'
            alt='Login image'
          />
        </Div>
      </Div>
    </Div>
  );
};

export default SignUpForm;
