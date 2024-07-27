import SettingLinks from '@/front-end-components/PageComponent/SettingComponent/SettingLinks';
import Spacing from '@/front-end-components/ui/Spacing';
import TitleBox from '@/front-end-components/ui/page-title';
import Div from '@/lib/Div';
import React from 'react';

const Settinglayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Div className='w-[95%] h-[95%] p-5 mx-auto rounded-md bg-gray-100'>
      <TitleBox className='bg-gray-200 px-3 py-1 rounded-sm' title='Settings' />
      <Spacing styleCss='h-[20px]' />
      <Div className='flex items-start h-auto  '>
        <Div className='w-[200px] h-full pr-4  border-r '>
          <SettingLinks />
        </Div>
        <Div className='flex-1 ml-4'>{children}</Div>
      </Div>
    </Div>
  );
};

export default Settinglayout;
