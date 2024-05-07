import "./globals.css";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import ClientLayout from "@/components/global/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className="bg-background">
        <ToastContainer position="top-right" />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
