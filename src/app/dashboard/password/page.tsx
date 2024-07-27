import PasswordContainer from '@/front-end-components/PageComponent/PasswordComponent/PasswordContainer';
import { PATH } from '@/lib/api-services/routes-path';
import { ACCESS_TOKEN } from '@/lib/constants';
import { fetchRequest } from '@/lib/fetch';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {
  const token = cookies().get(ACCESS_TOKEN)?.value;

  const fetchPassword = await fetchRequest({
    url: PATH.GET_PASSWORD,
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(fetchPassword, token);

  return (
    <div className='w-full h-full '>
      <PasswordContainer />
    </div>
  );
};

export default page;
