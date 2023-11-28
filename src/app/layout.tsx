"use client";

import dynamic from "next/dynamic";
import Headers from "@/components/global/Headers";
import "./globals.css";
import { Inter } from "next/font/google";
import Sidebars from "@/components/global/Sidebars";
import MyContext, { MyContextProvider } from "@/components/context/MyContext";
import { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const contextData = useContext(MyContext);

  const path = usePathname();


  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <MyContextProvider>
          <div className="mx-auto overflow-hidden max-w-[1400px] w-[95%] min-h-screen  flex flex-col">
            {path === "/account" ? null : <Headers />}
            <div className=" h-[calc(100vh-60px)] pt-5 w-full flex">
              <div
                className={`${
                  path === "/account" ? "hidden" : ""
                } w-[250px]  h-full`}
              >
                <Sidebars />
              </div>
              {children}
            </div>
          </div>
        </MyContextProvider>
      </body>
    </html>
  );
}
