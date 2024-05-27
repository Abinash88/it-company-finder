import PageTitle from '@/components/UI/page-title'
import React from 'react'

const MainDashboard = () => {
  return (
    <div className='flex h-full w-full flex-col'>
      <div className="w-full px-6 flex items-center  h-[50px]">
        <PageTitle title='My Dashboard' />
      </div>
      <div className="flex-1 w-full py-4 rounded-tr-xl px-6 bg-background h-full  ">
        
      </div>
    </div>
  )
}

export default MainDashboard