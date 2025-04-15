'use client'

import Image from 'next/image'
import {
    LayoutList,
    Maximize2,
    Mic,
    Minus,
    MonitorSpeaker,
    // Pause,
    Play,
    Plus,
    Repeat,
    Shuffle,
    SkipBack,
    SkipForward,
    Volume2,
} from 'lucide-react'

export default function PlayerBar() {
    return (
        <footer className="box-border flex w-full items-center justify-between border-t border-neutral-800 bg-black px-4 py-2">
            {/* LEFT: Song info */}
            <div className="flex w-[30%] items-center gap-3">
                <Image
                    src="/ver-tinh.jpg"
                    alt="Vệ Tinh"
                    width={56}
                    height={56}
                    className="rounded-sm"
                />
                <div className="flex flex-col text-sm text-white">
                    <span className="font-semibold">Vệ Tinh</span>
                    <span className="text-xs text-neutral-400">
                        HIEUTHUHAI, Hoàng Tôn, Kewtiie
                    </span>
                </div>
                <div className="ml-2 flex items-center gap-2 text-neutral-400">
                    <button className="hover:text-white">
                        <Minus size={16} />
                    </button>
                    <button className="hover:text-white">
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            {/* CENTER: Controls */}
            <div className="flex w-[40%] flex-col items-center">
                <div className="flex items-center gap-5 text-neutral-400">
                    <button className="hover:text-white">
                        <Shuffle size={18} />
                    </button>
                    <button className="hover:text-white">
                        <SkipBack size={18} />
                    </button>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105">
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
                <div className="mt-1 flex w-full items-center gap-2 text-xs text-neutral-400">
                    <span>0:00</span>
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-neutral-700">
                        <div className="h-full w-[30%] bg-neutral-200" />
                    </div>
                    <span>3:39</span>
                </div>
            </div>

            {/* RIGHT: Options */}
            <div className="flex w-[30%] items-center justify-end gap-3 text-neutral-400">
                <button className="hover:text-white">
                    <Mic size={18} />
                </button>
                <button className="hover:text-white">
                    <LayoutList size={18} className="text-green-500" />
                </button>
                <button className="hover:text-white">
                    <MonitorSpeaker size={18} />
                </button>
                <div className="flex w-24 items-center gap-1">
                    <Volume2 size={18} />
                    <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-700">
                        <div className="h-full w-[80%] bg-white" />
                    </div>
                </div>
                <button className="hover:text-white">
                    <Maximize2 size={18} />
                </button>
            </div>
        </footer>
    )
}
