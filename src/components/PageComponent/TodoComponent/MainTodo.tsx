'use client'

import Div from '@/lib/Div'
import React, { useState } from 'react'
import { cn } from '@/lib/utils';

import dynamic from 'next/dynamic';
import GlobalTopSearch from '../PasswordComponent/SmallComponent/GlobalTopSearch';
const PopUpForm = dynamic(() => import('./PopupForm'))
const MainTodo = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);

  return (
    <Div className="w-full h-full overflowstyle overflow-y-auto">
    <Div className="w-full h-[90px]">
      <GlobalTopSearch isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
      <Div className={cn(`w-full fixed z-20 h-full left-0  transition-all ${isOpenPopup ? 'top-[0px]' : 'top-[150%]'} right-0 `)}>

        <Div className="w-full h-full ">
          <PopUpForm
            closeModelBox={setIsOpenPopup}
          />
        </Div>
      </Div>
    </Div>
    <Div className="w-full  gap-2 flex flex-col  h-[87%] ">
      {/* {MyAppData?.SocialData?.map((data: MyAppDataTypes, index) => {
        return <SingleApp key={data?.id} index={index} data={data} />;
      })} */}
    </Div>
  </Div>
  )
}

export default MainTodo