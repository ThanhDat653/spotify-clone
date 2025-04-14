"use client";

import { Bell, Users, ChevronLeft, ChevronRight, Search } from "lucide-react";

export default function TopBar() {
   return (
      <header className="flex items-center justify-between pt-3 bg-black h-fit">
         {/* Left Section */}
         <div className="flex items-center gap-2">
            {/* Back / Forward: chỉ hiện trên md trở lên */}
            <div className="hidden md:flex items-center gap-1">
               <button className="p-2 hover:cursor-pointer">
                  <ChevronLeft size={20} />
               </button>
               <button className="p-2 hover:cursor-pointer">
                  <ChevronRight size={20} />
               </button>
            </div>

            {/* Home Icon */}
            <button className="size-9 flex justify-center items-center rounded-full bg-neutral-800 hover:bg-neutral-700">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="none"
                  className="size-5 mb-[3px]"
               >
                  <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
               </svg>
            </button>

            {/* Search Box */}
            <div className="flex items-center bg-neutral-800 rounded-full px-3 py-2 ml-2 md:ml-4 w-[200px] md:w-[300px]">
               <Search className="w-4 h-4 text-neutral-400" />
               <input
                  type="text"
                  placeholder="What do you want to play?"
                  className="ml-2 bg-transparent text-sm text-white placeholder:text-neutral-400 focus:outline-none w-full"
               />
            </div>
         </div>

         {/* Right Section */}
         <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-700">
               <Bell size={20} className="text-white" />
            </button>
            <button className="hidden md:flex items-center justify-center w-8 h-8 rounded-full hover:bg-neutral-700">
               <Users size={20} className="text-white" />
            </button>
            {/* Avatar user */}
            <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold">
               D
            </div>
         </div>
      </header>
   );
}
