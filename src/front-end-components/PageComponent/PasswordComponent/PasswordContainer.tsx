'use client';

import { MyAppDataTypes } from '@/Data/Types';
import React, { useContext, useEffect, useState } from 'react';
import Div from '@/lib/Div';
import MyContext from '@/context/MyContext';
import PasswordForm from './SmallComponent/password-form';
import { cn } from '@/lib/utils';
import PageTitle from '@/front-end-components/ui/page-title';
import UseHandleSearch from '@/Hooks/use-handle-search';
import CustomSheet from '@/front-end-components/reusables/custom-sheet';
import CustomTable from '@/front-end-components/reusables/table/custom-table';
import PasswordColumns from './SmallComponent/password-columns';
import { PlusIcon } from 'lucide-react';
import { fetchRequest } from '@/lib/fetch';
import { PATH } from '@/lib/api-services/routes-path';
import { headerServices } from '@/lib/helper';
import {
  ResponseGetPasswordTypes,
  ResponseMessageDataTypes,
} from '@/Data/interfaces/password.interface';
import FetchWrapper from '@/front-end-components/reusables/fetch-wrapper';
import { useQuery } from '@tanstack/react-query';
import { PopupContext } from '@/context/popup-form-context';

const PasswordContainer = ({
  token,
  data,
}: {
  token: string | undefined;
  data: ResponseMessageDataTypes<ResponseGetPasswordTypes[]> | undefined;
}) => {
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

  const { data: password, ...rest } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetchRequest<
        object,
        ResponseMessageDataTypes<ResponseGetPasswordTypes[]>
      >({
        url: PATH.GET_PASSWORD,
        headers: headerServices(token),
        popup: false,
      }),
    initialData: data,
  });

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
                <PasswordForm />
              </CustomSheet>
            </Div>
          </Div>
        </Div>

        <Div className='w-full px-6'>
          <FetchWrapper {...rest}>
            <CustomTable
              columns={PasswordColumns}
              addButton={{
                label: 'Add password',
                icon: <PlusIcon size={18} color='#fff' />,
                handleClick: () => {
                  // setIsOpenPopup(!isOpenPopup);
                  PopupContext()
                },
                variant: 'default',
              }}
              data={password?.data || []}
            />
          </FetchWrapper>
        </Div>
      </Div>
    </Div>
  );
};

export default PasswordContainer;
