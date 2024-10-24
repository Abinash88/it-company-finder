'use client';

import { usePathname } from 'next/navigation';
import React from 'react';
import { MyContextProvider } from '../../context/MyContext';
import Headers from './Headers';
import Sidebars from './Sidebars';

const ClientLayout = ({
  children,
  token,
  data,
}: {
  children: React.ReactNode;
  token: string | undefined;
  data: any;
}) => {
  const path = usePathname();
  return (
    <div>
      <MyContextProvider data={data} token={token}>
        <div className='mx-auto  overflow-hidden w-full h-screen   flex flex-col'>
          <div className=' w-full h-full flex'>
            <div className={`${path === '/account' ? 'hidden' : ''}   h-full`}>
              <Sidebars />
            </div>
            <div className='flex flex-1 flex-col'>
              {path === '/account' ? null : <Headers />}
              <div className=' overflow-y-auto h-[calc(100vh-50px)] flex flex-1'>
                <div className='w-full'>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </MyContextProvider>
    </div>
  );
};

export default ClientLayout;
