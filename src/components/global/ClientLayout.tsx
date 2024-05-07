'use client'

import React, { useContext } from 'react'
import MyContext, { MyContextProvider } from '../context/MyContext'
import Sidebars from './Sidebars'
import { usePathname } from 'next/navigation';
import Headers from './Headers';

const ClientLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {

    const contextData = useContext(MyContext);

    const path = usePathname();
    return (
        <div>
            <MyContextProvider>
                <div className="mx-auto  overflow-hidden  w-full min-h-screen  flex flex-col">
                    {path === "/account" ? null : <Headers />}
                    <div className="  h-[calc(100vh-60px)]  w-full flex">
                        <div
                            className={`${path === "/account" ? "hidden" : ""
                                } w-[250px]  h-full`}
                        >
                            <Sidebars />
                        </div>
                        {children}
                    </div>
                </div>
            </MyContextProvider>
        </div>
    )
}

export default ClientLayout