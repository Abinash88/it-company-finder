"use client";

import Headers from "@/components/global/Headers";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebars from "@/components/global/Sidebars";
import MyContext, { MyContextProvider } from "@/components/context/MyContext";
import Link from "next/link";
import SignUpForm from "@/components/auth/SignUpForm";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextData = useContext(MyContext);

  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <MyContextProvider>
          <div className="mx-auto overflow-hidden  w-[95%] min-h-screen  flex flex-col">
            {contextData?.userData ? (
              <div className="w-full flex justify-center items-center h-screen">
                <SignUpForm />
              </div>
            ) : (
              <>
                <Headers />
                <div className=" h-[calc(100vh-60px)] pt-5 w-full flex">
                  <div className="w-[250px]  h-full">
                    <Sidebars />
                  </div>
                  {children}
                </div>
              </>
            )}
          </div>
        </MyContextProvider>
      </body>
    </html>
  );
}
