'use client';

import { MyAppDataTypes } from '@/Data/Types';
import React, { useContext, useState } from 'react';
import Div from '@/lib/Div';
import MyContext from '@/context/MyContext';
import PageTitle from '@/front-end-components/ui/page-title';
import UseHandleSearch from '@/Hooks/use-handle-search';
import CustomTable from '@/front-end-components/reusables/table/custom-table';
import PasswordColumns from '../../../app/dashboard/password/columns';
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
import { POPUP_TYPE } from '@/lib/constants';

const PasswordContainer = ({
  token,
  data,
}: {
  token: string | undefined;
  data: ResponseMessageDataTypes<ResponseGetPasswordTypes[]> | undefined;
}) => {
  const MyAppData = useContext(MyContext);
  const [text, setText] = useState('');
  const { searched } = UseHandleSearch<MyAppDataTypes>({
    searchText: text,
    data: MyAppData?.SocialData || [],
    searchItem: 'name',
  });

  const { data: password, ...rest } = useQuery({
    queryKey: ['passwords'],
    queryFn: () =>
      fetchRequest<
        object,
        ResponseMessageDataTypes<ResponseGetPasswordTypes[]>
      >({
        url: PATH.GET_PASSWORD,
        headers: headerServices(token),
        popup: false,
        method: 'GET',
      }),
    initialData: data,
  });

  const { open } = PopupContext();

  return (
    <Div className='w-full h-full'>
      <Div className='w-[90%] mx-auto px-6 py-2 flex items-center justify-center my-6 '>
        <PageTitle title='Password' />
      </Div>
      <Div className=' bg-background h-full  rounded-tr-lg'>
        <Div className='w-full px-6'>
          <FetchWrapper {...rest}>
            <CustomTable
              columns={PasswordColumns}
              addButton={{
                label: 'Add password',
                icon: <PlusIcon size={18} color='#fff' />,
                handleClick: () => {
                  open({
                    type: POPUP_TYPE.SHEET,
                    key: 'ADD_PASSWORD_FORM',
                    side: 'right',
                  });
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
