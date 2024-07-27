'use client';

import Div from '@/lib/Div';
import React, { useContext, useState } from 'react';
import { cn } from '@/lib/utils';

import dynamic from 'next/dynamic';
import GlobalTopSearch from '../PasswordComponent/SmallComponent/GlobalTopSearch';
import PageTitle from '@/front-end-components/ui/page-title';
import { todoData } from '@/Data/StaticData';
import { StaticNotesDataTypes, TodoDataTypes } from '@/backend/lib/types';
import UseHandleSearch from '@/Hooks/use-handle-search';
import SingleTodo from './single-todo';
import TodoForm from './todo-form';
import CustomSheet from '@/front-end-components/reusables/custom-sheet';
const MainTodo = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [text, setText] = useState('');
  const [notePopup, setNotePopup] = useState<StaticNotesDataTypes>();

  const { searched } = UseHandleSearch({
    data: todoData,
    searchItem: 'name',
    searchText: text,
  });
  return (
    <Div className='w-full h-full '>
      <Div className='w-full px-6 flex items-center  h-[50px]'>
        <PageTitle title='Todo' />
      </Div>
      <Div className='h-[calc(100vh-100px)] bg-background rounded-tr-lg'>
        <Div className='w-full px-6 py-4'>
          <GlobalTopSearch
            setIsOpenPopup={setIsOpenPopup}
            isOpenPopup={isOpenPopup}
            offCheckList={false}
            setText={setText}
          />
          <Div className={cn(`w-full z-20 h-full transition-all  top-0 `)}>
            <Div className='w-full h-full '>
              <CustomSheet
                title='Add Todo List'
                isOpenPopup={isOpenPopup}
                setIsOpenPopup={setIsOpenPopup}
              >
                <TodoForm setIsOpenPopup={setIsOpenPopup} />
              </CustomSheet>
            </Div>
          </Div>
        </Div>
        <Div className='w-full px-6 h-[calc(100vh-160px)] overflow-y-auto'>
          {searched?.map((data: TodoDataTypes) => <SingleTodo data={data} />)}
        </Div>
      </Div>
    </Div>
  );
};

export default MainTodo;
