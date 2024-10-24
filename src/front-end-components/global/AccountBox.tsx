import Div from '@/lib/Div';
import Image from 'next/image';
import React from 'react';
import Spacing from '../ui/Spacing';
import { FiLogOut } from 'react-icons/fi';
import { userResultTypes } from '@/Data/Types';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Moon, Settings, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

const AccountBox = ({
  userdata,
}: {
  userdata: userResultTypes | undefined;
}) => {
  const router = useRouter();

  const LogOutFunc = () => {
    router.push('/account');
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
              variant={'ghost'}
              icon={<Settings size={17} className='text-foreground' />}
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
