import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/topbar/topbar";
import PlayerBar from "@/components/layout/player-bar/player-bar";
import Sidebar from "@/components/layout/sidebar/sidebar";

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
            <TopBar />
            <div className="flex gap-5">
               <Sidebar />
               {children}
            </div>
            <PlayerBar />
         </body>
      </html>
   );
}
