import type { userResultTypes } from '@/Data/Types';
import ClientLayout from '@/front-end-components/global/ClientLayout';
import { PATH } from '@/lib/api-services/routes-path';
import { ACCESS_TOKEN } from '@/lib/constants';
import { fetchRequest } from '@/lib/fetch';
import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';

const layout = async ({ children }: { children: ReactNode }) => {
  const token = cookies().get(ACCESS_TOKEN)?.value;
  const data = await fetchRequest<object, userResultTypes<object> | undefined>({
    url: PATH.GET_USER,
    headers: { Authorization: `Bearer ${token}` },
    popup: true,
  });
  console.log(data);
  return (
    <div>
      <ClientLayout data={data} token={token}>
        {children}
      </ClientLayout>
    </div>
  );
};

export default layout;
