/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/topbar/topbar";
import PlayerBar from "@/components/layout/player-bar/player-bar";
import Sidebar from "@/components/layout/sidebar/sidebar";
import SignUpBar from "@/components/layout/signup-bar/signup-bar";

const inter = Inter({
   variable: "--font-inter",
   subsets: ["latin"],
});

export const metadata: Metadata = {
   title: "Spotify",
   description: "Clone by ntdat",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={`${inter.variable} antialiased`}>
            <div className="flex flex-col gap-3 mx-3 h-screen overflow-hidden">
               <TopBar />
               <div className="flex flex-1 gap-2">
                  <Sidebar />
                  {children}
               </div>
               <PlayerBar />
               {/* <SignUpBar /> */}
            </div>
         </body>
      </html>
   );
}
