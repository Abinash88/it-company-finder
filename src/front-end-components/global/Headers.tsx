import Div from '@/lib/Div';
import Image from 'next/image';
import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import AccountBox from './AccountBox';
import MyContext from '../../context/MyContext';
import { useRouter } from 'next/navigation';
import { HiBars3 } from 'react-icons/hi2';
import { isServer } from '@/lib/utils';
import { Input } from '../ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/front-end-components/ui/dropdown-menu';

const Headers = () => {
  const accountData = useContext(MyContext);
  const router = useRouter();
  const search = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    router.prefetch('/account');
  }, []);
  // useEffect(() => {
  //   if (accountData && !accountData?.userData?.success) {
  //     router.push('/account');
  //   }
  // }, [accountData]);

  const handleCtrlShiftSKey = useCallback((e: KeyboardEvent) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'S') {
      e.preventDefault();
      search?.current?.focus();
    }
  }, []);

  useEffect(() => {
    if (isServer()) return;
    window.addEventListener('keydown', handleCtrlShiftSKey);
    return () => window.removeEventListener('keydown', handleCtrlShiftSKey);
  }, []);

  return (
    <>
      <Div className='w-full py-1 border-b bg-background shadow-xl z-10 relative'>
        <Div className='w-full h-full px-6 flex justify-between items-center'>
          <Div className='w-[60%]'>
            <HiBars3
              onClick={() => {
                accountData?.setToggleSidebar(!accountData.toggleSidebar);
              }}
              className='text-foreground absolute  text-[26px] rounded-sm p-[1px] z-20 left-[20px] top-3 hover:bg-foreground/10 cursor-pointer'
            />

            <Div className='w-full ml-16 relative'>
              <BsSearch className='absolute top-[8px] left-2 text-[18px] text-[#415b7ffe] cursor-pointer' />
              <Input
                type='search'
                ref={search}
                className='w-full pr-4 pl-10 text-foreground border-none focus-visible:border-none focus:outline-none'
                placeholder='Search here... (ctrl+shift+s)'
              />
            </Div>
          </Div>

          <Div className='account relative'>
            <Div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Div className='w-[40px] bg-white rounded-full cursor-pointer h-[40px]'>
                    <Image
                      src={'/defaultuser.jpeg'}
                      width={100}
                      height={100}
                      className='rounded-full'
                      alt='Default user'
                    ></Image>
                  </Div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <AccountBox userdata={accountData?.userData} />
                </DropdownMenuContent>
              </DropdownMenu>
            </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default Headers;
