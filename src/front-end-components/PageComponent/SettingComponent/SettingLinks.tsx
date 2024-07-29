'use client';

import { SettingLinksData } from '@/Data/StaticData';
import Div from '@/lib/Div';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const SettingLinks = () => {
  const location = usePathname();

  return (
    <Div className='w-full settingLinks '>
      <ul className='flex flex-col  items-start justify-center'>
        {SettingLinksData?.map((item, index) => {
          return (
            <li key={index} className='my-1 w-full'>
              <Link
                className={`px-3 py-2 text-gray-600 font-semibold rounded-md  hover:bg-gray-200 block w-full ${
                  location === item?.link && 'bg-gray-200'
                }  `}
                href={item?.link}
              >
                {item?.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </Div>
  );
};

export default SettingLinks;
