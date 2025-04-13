"use client";

import {
   // Pause,
   Play,
   SkipBack,
   SkipForward,
   Shuffle,
   Repeat,
   Volume2,
   Mic,
   LayoutList,
   Maximize2,
   MonitorSpeaker,
   Plus,
   Minus,
} from "lucide-react";
import Image from "next/image";

export default function PlayerBar() {
   return (
      <footer className="w-full h-[90px] bg-black border-t border-neutral-800 flex items-center justify-between px-4">
         {/* LEFT: Song info */}
         <div className="flex items-center gap-3 w-[30%]">
            <Image
               src="/ver-tinh.jpg"
               alt="Vệ Tinh"
               width={56}
               height={56}
               className="rounded-sm"
            />
            <div className="flex flex-col text-white text-sm">
               <span className="font-semibold">Vệ Tinh</span>
               <span className="text-xs text-neutral-400">
                  HIEUTHUHAI, Hoàng Tôn, Kewtiie
               </span>
            </div>
            <div className="flex items-center gap-2 ml-2 text-neutral-400">
               <button className="hover:text-white">
                  <Minus size={16} />
               </button>
               <button className="hover:text-white">
                  <Plus size={16} />
               </button>
            </div>
         </div>

         {/* CENTER: Controls */}
         <div className="flex flex-col items-center w-[40%]">
            <div className="flex items-center gap-5 text-neutral-400">
               <button className="hover:text-white">
                  <Shuffle size={18} />
               </button>
               <button className="hover:text-white">
                  <SkipBack size={18} />
               </button>
               <button className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-105 transition">
                  <Play size={20} />
               </button>
               <button className="hover:text-white">
                  <SkipForward size={18} />
               </button>
               <button className="hover:text-white">
                  <Repeat size={18} />
               </button>
            </div>
            {/* Progress bar */}
            <div className="flex items-center gap-2 text-xs text-neutral-400 w-full mt-1">
               <span>0:00</span>
               <div className="flex-1 h-1 bg-neutral-700 rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-neutral-200" />
               </div>
               <span>3:39</span>
            </div>
         </div>

         {/* RIGHT: Options */}
         <div className="flex items-center gap-3 text-neutral-400 w-[30%] justify-end">
            <button className="hover:text-white">
               <Mic size={18} />
            </button>
            <button className="hover:text-white">
               <LayoutList size={18} className="text-green-500" />
            </button>
            <button className="hover:text-white">
               <MonitorSpeaker size={18} />
            </button>
            <div className="flex items-center gap-1 w-24">
               <Volume2 size={18} />
               <div className="h-1 bg-neutral-700 w-full rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-white" />
               </div>
            </div>
            <button className="hover:text-white">
               <Maximize2 size={18} />
            </button>
         </div>
      </footer>
   );
}
