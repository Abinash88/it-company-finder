import React, { ReactNode } from 'react';

const ClientProvider = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default ClientProvider;
