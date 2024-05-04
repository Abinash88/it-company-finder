import MainTodo from '@/components/PageComponent/TodoComponent/MainTodo'
import Div from '@/lib/Div'
import React from 'react'

const page = () => {
  return (
    <Div className='w-full  overflow-hidden flex-1 p-4 h-full '>
      <MainTodo />
    </Div>
  )
}

export default page