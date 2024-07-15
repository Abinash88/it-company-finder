import { SidebarData } from '@/Data/StaticData';
import { SidebarDataTypes } from '@/Data/Types';
import Link from 'next/link';
import React, { useContext, useEffect } from 'react';
import Div from '@/lib/Div';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import SidebarLink from './sidebar-link';
import MyContext from '@/context/MyContext';

const Sidebars = () => {
  const router = useRouter();
  const toggle = useContext(MyContext);

  useEffect(() => {
    router.prefetch('/account');
  });

  return (
    <Div
      className={cn(
        ` overflow-hidden hover:w-[230px] ${toggle?.toggleSidebar ? 'w-[70px]' : 'w-[230px]'} group 
        transition-all duration-300 h-full shadow-xl relative bg-background border-r`
      )}
    >
      <Div className='h-full pt-3 '>
        <Div className='flex h-[50px] justify-between items-center '>
          <Link
            href={'/dashboard'}
            className='flex flex-col items-center mx-auto justify-center '
          >
            <Image
              src={'/dark-logo-icon.png'}
              alt='logo'
              width={500}
              height={500}
              className={cn(
                `size-full transition-all duration-300  object-contain ${toggle?.toggleSidebar ? ' w-[60px] group-hover:w-[70px]' : ' w-[70px]'}`
              )}
            />
          </Link>
        </Div>

        <ul className=' flex flex-col gap-1 pt-8'>
          {SidebarData?.map((item: SidebarDataTypes) => (
            <SidebarLink item={item} key={item?.name} />
          ))}
        </ul>
      </Div>
    </Div>
  );
};

export default Sidebars;
