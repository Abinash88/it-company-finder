import Div from '@/lib/Div';
import Image from 'next/image';
import React from 'react';
import Spacing from '../ui/Spacing';
import { FaCog, FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { userResultTypes } from '@/Data/Types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';
import { useTheme } from '../reusables/theme-provider';
import { Moon, Sun } from 'lucide-react';

const AccountBox = ({
  closeAccount,
  userdata,
}: {
  closeAccount: () => void;
  userdata: userResultTypes | undefined;
}) => {
  const router = useRouter();

  const LogOutFunc = () => {
    router.push('/account');
    closeAccount();
  };
  const { theme, setTheme } = useTheme();

  return (
    <Div className='  z-10 flex p-4 right-[0px] w-[300px] h-[350px] bg-background '>
      <Div className='w-full h-full flex items-center flex-col'>
        <Div className=''>
          <Image
            src='/defaultuser.jpeg'
            width={60}
            height={60}
            className='rounded-full'
            alt='user'
          ></Image>
        </Div>
        <Spacing styleCss={'h-[18px]'} />
        <Div className='w-full border-b pb-2 text-center'>
          <h5 className='font-semibold  text-gray-600 text-[16px]'>
            {userdata?.data?.name}
          </h5>
          <h6 className='font-normal text-gray-500 text-[14px]'>
            {userdata?.data?.email}
          </h6>
        </Div>
        <Spacing styleCss={'h-[20px]'} />
        <Div className='w-full flex flex-col gap-1'>
          <Link href='/account'>
            <Button
              asChild
              onClick={closeAccount}
              variant={'ghost'}
              icon={<FaUser size={17} className='text-foreground' />}
              className='w-full '
              iconClass=' justify-start'
            >
              Account
            </Button>
          </Link>
          <Link href='/account'>
            <Button
              asChild
              onClick={closeAccount}
              variant={'ghost'}
              icon={<FaCog size={17} className='text-foreground' />}
              className='w-full '
              iconClass=' justify-start'
            >
              Setting
            </Button>
          </Link>

          <Button
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
            }}
            icon={
              theme === 'dark' ? (
                <Sun size={17} className='text-foreground' />
              ) : (
                <Moon size={17} className='text-foreground' />
              )
            }
            variant={'ghost'}
            className='w-full '
            iconClass='w-full justify-start'
          >
            {theme === 'dark' ? 'light' : 'dark'}
          </Button>
          <Button
            onClick={() => {
              LogOutFunc();
            }}
            icon={<FiLogOut size={17} className='text-foreground' />}
            variant={'ghost'}
            className='w-full '
            iconClass=' justify-start'
          >
            Logout
          </Button>
        </Div>
      </Div>
    </Div>
  );
};

export default AccountBox;
