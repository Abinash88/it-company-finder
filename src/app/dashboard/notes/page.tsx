import MainNotes from '@/components/PageComponent/Notes/MainNotes'
import Div from '@/lib/Div'
import React from 'react'

const page = () => {
  return (
    <Div className='w-full flex-1 h-full '>
      <MainNotes />
    </Div>
  )
}

export default page