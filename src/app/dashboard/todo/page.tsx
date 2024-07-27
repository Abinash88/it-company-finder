import MainTodo from '@/front-end-components/PageComponent/todo-component/main-todo';
import Div from '@/lib/Div';
import React from 'react';

const page = () => {
  return (
    <Div className='w-full overflow-hidden flex-1 h-full '>
      <MainTodo />
    </Div>
  );
};

export default page;
