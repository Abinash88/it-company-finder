'use client'

import Div from '@/lib/Div'
import React, { useContext, useState } from 'react'
import { cn } from '@/lib/utils';

import dynamic from 'next/dynamic';
import GlobalTopSearch from '../PasswordComponent/SmallComponent/GlobalTopSearch';
import PageTitle from '@/components/ui/page-title';
import { MyAppDataTypes } from '@/Data/Types';
import { notesData } from '@/Data/StaticData';
import { StaticNotesDataTypes } from '@/Backend'/lib/types';
import SingleNotes from './single-notes';
import SingleNotePopup from './single-note-popup';
import UseHandleSearch from '@/Hooks/use-handle-search';
const NoteForm = dynamic(() => import('./notes-form'))
const MainNotes = () => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [text, setText] = useState('')
  const [notePopup, setNotePopup] = useState<StaticNotesDataTypes>()

  const { searched } = UseHandleSearch({ data: notesData, searchItem: 'title', searchText: text });

  return (
    <Div className="w-full h-full ">
      <Div className="w-[90%] mx-auto px-6 py-2 flex items-center  justify-center my-6 ">
        <PageTitle title="Notes" />
      </Div>
      <Div className=" bg-background rounded-tr-lg">
        <Div className="w-full px-6 py-4   ">
          <GlobalTopSearch setText={setText} isOpenPopup={isOpenPopup} setIsOpenPopup={setIsOpenPopup} />
          <Div className={cn(`w-full fixed z-20 h-full transition-all ${isOpenPopup ? 'right-[0px]' : 'right-[-150%]'} top-0 `)}>
            <Div className="w-full h-full ">
              <NoteForm
                closeModelBox={setIsOpenPopup}
              />
            </Div>
          </Div>
        </Div>
        <Div className="w-full px-6">
          {searched?.map((data: StaticNotesDataTypes) =>
          (
            <SingleNotes setNotePopup={setNotePopup} data={data} />
          )
          )}
        </Div>
        {notePopup &&
          <SingleNotePopup setNotePopup={setNotePopup} notePopup={notePopup} />
        }
      </Div>
    </Div>
  )
}

export default MainNotes