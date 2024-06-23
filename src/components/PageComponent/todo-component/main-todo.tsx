'use client'

import Div from '@/lib/Div'
import React, { useContext, useState } from 'react'
import { cn } from '@/lib/utils';

import dynamic from 'next/dynamic';
import GlobalTopSearch from '../PasswordComponent/SmallComponent/GlobalTopSearch';
import PageTitle from '@/components/ui/page-title';
import { MyAppDataTypes } from '@/Data/Types';
import { notesData, todoData } from '@/Data/StaticData';
import { StaticNotesDataTypes, TodoDataTypes } from '@/Backend/lib/types';
import UseHandleSearch from '@/Hooks/use-handle-search';
import SingleTodo from './single-todo';
import TodoForm from './todo-form';
const MainTodo = () => {
    const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
    const [text, setText] = useState('')
    const [notePopup, setNotePopup] = useState<StaticNotesDataTypes>()

    const { searched } = UseHandleSearch({ data: todoData, searchItem: 'name', searchText: text });

    return (
        <Div className="w-full h-full ">
            <Div className="w-full px-6 flex items-center  h-[50px]">
                <PageTitle title="Todo" />
            </Div>
            <Div className="h-[calc(100vh-100px)] bg-background rounded-tr-lg">
                <Div className="w-full px-6 py-4">
                    <GlobalTopSearch offCheckList={false} setText={setText} />
                    <Div className={cn(`w-full fixed z-20 h-full transition-all ${isOpenPopup ? 'right-[0px]' : 'right-[-150%]'} top-0 `)}>
                        <Div className="w-full h-full ">
                            <TodoForm closeModelBox={setIsOpenPopup} />
                        </Div>
                    </Div>
                </Div>
                <Div className="w-full px-6 h-[calc(100vh-160px)]  overflowstyle overflow-y-auto">
                    {searched?.map((data: TodoDataTypes) =>
                    (
                        <SingleTodo data={data} />
                    )
                    )}
                </Div>
                {/* {notePopup &&
          <SingleNotePopup setNotePopup={setNotePopup} notePopup={notePopup} />
        } */}
            </Div>
        </Div>
    )
}

export default MainTodo