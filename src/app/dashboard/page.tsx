import MainDashboard from '@/components/PageComponent/DashboardComponent/main-dashboard'
import FetchWrapper from '@/components/reusables/fetch-wrapper'
import React from 'react'

const page = () => {
  return (
    <div className="w-full  h-[calc(100vh-50px)]">
      <FetchWrapper isError={false} isLoading={false} >
        <MainDashboard />
      </FetchWrapper>
    </div>
  )
}

export default page