'use client';

import { MyAppDataTypes } from '@/Data/Types';
import React, { useContext, useEffect, useState } from 'react';
import Div from '@/lib/Div';
import MyContext from '@/context/MyContext';
import PasswordForm from './SmallComponent/password-form';
import { cn } from '@/lib/utils';
import PageTitle from '@/front-end-components/ui/page-title';
import UseHandleSearch from '@/Hooks/use-handle-search';
import { DragEndEvent } from '@dnd-kit/core';
import CustomSheet from '@/front-end-components/reusables/custom-sheet';
import CustomTable from '@/front-end-components/reusables/table/custom-table';
import PasswordColumns from './SmallComponent/password-columns';
import { PlusIcon } from 'lucide-react';
import { fetchRequest } from '@/lib/fetch';
import { PATH, PATH_WITHOUT_PREFIX } from '@/lib/api-services/routes-path';
import { headerServices } from '@/lib/helper';

const PasswordData: MyAppDataTypes[] = [
  {
    id: '1',
    name: 'abinash subedi',
    link: 'https://github.com/',
    image: '',
    category: 'website',
    password: 'password123',
  },
];

const PasswordContainer = ({ token }: { token: string | undefined }) => {
  const MyAppData = useContext(MyContext);
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const [text, setText] = useState('');
  const { searched } = UseHandleSearch<MyAppDataTypes>({
    searchText: text,
    data: MyAppData?.SocialData || [],
    searchItem: 'name',
  });
  const [searchData, setSearchData] = useState<MyAppDataTypes[]>([]);

  useEffect(() => {
    setSearchData(searched);
  }, [searched]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const oldIndex = searched.findIndex((item) => item.id === active.id);
      const newIndex = searched.findIndex((item) => item.id === over?.id);

      setSearchData((items) => {
        const updatedItems = [...items];
        const [movedItem] = updatedItems.splice(oldIndex, 1);
        updatedItems.splice(newIndex, 0, movedItem);
        return updatedItems;
      });
    }
  };

  const resetWhileClose = () => {};

  return (
    <Div className='w-full h-full'>
      <Div className='w-[90%] mx-auto px-6 py-2 flex items-center justify-center my-6 '>
        <PageTitle title='Password' />
      </Div>
      <Div className=' bg-background h-full  rounded-tr-lg'>
        <Div className='w-full px-6 py-4'>
          <Div className={cn(`w-full z-20 h-full transition-all  top-0 `)}>
            <Div className='w-full h-full '>
              <CustomSheet
                resetWhileClose={resetWhileClose}
                title='Set New Password'
                isOpenPopup={isOpenPopup}
                setIsOpenPopup={setIsOpenPopup}
              >
                <PasswordForm closeModelBox={setIsOpenPopup} />
              </CustomSheet>
            </Div>
          </Div>
        </Div>

        <Div className='w-full px-6'>
          <CustomTable
            columns={PasswordColumns}
            addButton={{
              label: 'Add password',
              icon: <PlusIcon size={18} color='#fff' />,
              handleClick: () => {
                setIsOpenPopup(!isOpenPopup);
              },
              variant: 'default',
            }}
            data={PasswordData}
          />
        </Div>
      </Div>
    </Div>
  );
};

export default PasswordContainer;
