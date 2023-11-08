// import MyApp from '@/components/HomeComponent/MyApp'
import dynamic from 'next/dynamic'
const MyApp = dynamic(() => import("@/components/HomeComponent/MyApp"))
import React from 'react'

const page = () => {
  return (
    <div className='w-full h-full'>
        <MyApp/> 
    </div>
  )
}

export default page