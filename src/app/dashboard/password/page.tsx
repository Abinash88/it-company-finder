import {
  ResponseGetPasswordTypes,
  ResponseMessageDataTypes,
} from '@/Data/interfaces/password.interface';
import PasswordContainer from '@/front-end-components/PageComponent/PasswordComponent/PasswordContainer';
import { PATH } from '@/lib/api-services/routes-path';
import { ACCESS_TOKEN } from '@/lib/constants';
import { fetchRequest } from '@/lib/fetch';
import { headerServices } from '@/lib/helper';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {
  const token = cookies().get(ACCESS_TOKEN)?.value;

  const fetchPassword = await fetchRequest<
    object,
    ResponseMessageDataTypes<ResponseGetPasswordTypes[]>
  >({
    url: PATH.GET_PASSWORD,
    headers: headerServices(token),
    method: 'GET',
  });

  console.log(fetchPassword, 'get password');

  return (
    <div className='w-full h-full'>
      <PasswordContainer data={fetchPassword} token={token} />
    </div>
  );
};

export default page;
