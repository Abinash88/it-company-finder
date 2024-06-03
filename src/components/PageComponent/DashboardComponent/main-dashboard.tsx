import PageTitle from '@/components/UI/page-title'
import React from 'react'

const MainDashboard = () => {
  return (
    <div className='flex h-full w-full flex-col'>
      <div className="w-[90%] mx-auto px-6 py-2 flex items-center  justify-center my-6">
        <PageTitle title='Dashboard' />
      </div>
      <div className="flex-1 w-full mx-auto py-4 rounded-tr-xl px-6  bg-background h-full">

      </div>
    </div>
  )
}

export default MainDashboard