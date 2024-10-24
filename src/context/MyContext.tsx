'use client';

import React, { ReactNode, createContext, useState } from 'react';
import Facebook from '@/assests/homeImage/facebook.jpg';
import Instagram from '@/assests/homeImage/instagram.jpg';
import Messnager from '@/assests/homeImage/messanger.jpg';
import Reddit from '@/assests/homeImage/reddit.jpg';
import Pinterest from '@/assests/homeImage/pintrest.jpg';
import {
  MyAppDataTypes,
  contextTypes,
  userResultTypes,
  type DataTypes,
} from '@/Data/Types.jsx';
const MyContext = createContext<contextTypes | undefined>(undefined);
import { useQuery } from '@tanstack/react-query';
import { fetchRequest } from '@/lib/fetch';
import { PATH } from '@/lib/api-services/routes-path';

export const MyContextProvider = ({
  children,
  token,
  data,
}: {
  children: ReactNode;
  token: string | undefined;
  data: any;
}) => {
  const [SocialData, setSocialData] = useState<MyAppDataTypes[]>([
    {
      id: 'asldewio23409roasidjf',
      name: 'Facebook',
      link: 'https://www.facebook.com',
      image: Facebook,
      password: 'facebook',
      category: 'password',
    },
    {
      id: 'aoisudfjoaisdfjaosidj',
      name: 'Instagram',
      link: 'https://www.instagram.com',
      image: Instagram,
      password: 'instagram',
      category: 'password',
    },
    {
      id: '24o824093rijaoisjdfaf',
      name: 'Messenger',
      link: 'https://www.messanger.com',
      image: Messnager,
      password: 'messager',
      category: 'password',
    },
    {
      id: 'aosidjf4o4429058reoia',
      name: 'Reddit',
      link: 'https://www.reddit.com',
      image: Reddit,
      password: 'reddit',
      category: 'password',
    },
    {
      id: '420983rhauoisdjfaoisl',
      name: 'Pinterest',
      link: 'https://www.pinterest.com',
      image: Pinterest,
      password: 'pinterest',
      category: 'password',
    },
  ]);

  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  const {
    data: userData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      fetchRequest<object, userResultTypes<DataTypes>>({
        url: PATH.GET_USER,
        headers: { Authorization: `Bearer ${token}` },
        popup: false,
      }),
    initialData: data,
  });
  return (
    <MyContext.Provider
      value={{
        SocialData,
        setSocialData,
        setToggleSidebar,
        toggleSidebar,
        userData,
        isLoading,
        error,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
