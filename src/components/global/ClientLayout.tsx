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
                <div className="mx-auto  overflow-hidden w-full h-screen   flex flex-col">
                    <div className=" w-full h-full flex">
                        <div
                            className={`${path === "/account" ? "hidden" : ""
                                } w-[250px]  h-full`}
                        >
                            <Sidebars />
                        </div>
                        <div className="flex flex-1 flex-col">
                            {path === "/account" ? null : <Headers />}
                            <div className="  flex flex-1">
                                <div className="w-full">
                                    {children}
                                </div>
                                <div className="w-[50px] px-1 ">
                                    nav
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MyContextProvider>
        </div>
    )
}

export default ClientLayout