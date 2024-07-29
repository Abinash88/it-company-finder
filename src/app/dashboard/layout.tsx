import ClientLayout from '@/front-end-components/global/ClientLayout';
import { ACCESS_TOKEN } from '@/lib/constants';
import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';

const layout = ({ children }: { children: ReactNode }) => {
  const token = cookies().get(ACCESS_TOKEN)?.value;
  return (
    <div>
      <ClientLayout token={token}>{children}</ClientLayout>
    </div>
  );
};

export default layout;
