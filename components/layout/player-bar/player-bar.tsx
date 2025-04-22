'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
    setIsPlaying,
    setPreviewQueue,
    setPreviewTrack,
} from '@/redux/features/app.slice'
import {
    Minus,
    // Pause,
    Plus,
    Repeat,
} from 'lucide-react'

import { useRedux } from '@/hooks/use-redux'
import { OptionToggle } from '@/components/ui/option-toggle'
import { Slider } from '@/components/ui/slider'
import { Icons } from '@/components/icons'
import { MiniPlayer } from '@/components/mini-player'

import VolumeControl from './volume-control'

export default function PlayerBar() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const { appSelector, dispatch } = useRedux()
    const { previewTrack, isPlaying, previewQueue } = appSelector(
        (state) => state.app
    )
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const handleTogglePlay = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                dispatch(setIsPlaying(true))
                audioRef.current.play()
            } else {
                dispatch(setIsPlaying(false))

                audioRef.current.pause()
            }
        }
    }

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.onloadedmetadata = () => {
                setDuration(audioRef.current!.duration)
            }
        }
    }, [])

    return (
        <footer className="box-border flex w-full items-center justify-between bg-black px-4 py-2">
            {/* LEFT: Song info */}
            <div className="flex w-[30%] items-center gap-3">
                <Image
                    src="/nadtt.jpg"
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
                    <button>
                        <Icons.shuffle className="size-4 hover:cursor-pointer hover:text-white" />
                    </button>
                    <button>
                        <Icons.skipBack className="size-4 hover:cursor-pointer hover:text-white" />
                    </button>
                    <button
                        onClick={handleTogglePlay}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
                    >
                        {isPlaying ? (
                            <Icons.playerPause className="size-5" />
                        ) : (
                            <Icons.playerPlay className="size-5" />
                        )}
                    </button>
                    <button>
                        <Icons.skipForward className="size-4 hover:cursor-pointer hover:text-white" />
                    </button>
                    <button>
                        <Repeat size={18} />
                    </button>
                </div>
                <audio
                    ref={audioRef}
                    src="/nadtt.mp3"
                    preload="metadata"
                    onTimeUpdate={() => {
                        if (audioRef.current) {
                            setCurrentTime(audioRef.current.currentTime)
                        }
                    }}
                />

                {/* Progress bar */}
                <div className="mt-1 flex w-full items-center gap-2 text-xs text-neutral-400">
                    <span>{currentTime}</span>
                    <Slider
                        value={[currentTime]}
                        min={0}
                        max={duration}
                        step={1}
                        onValueChange={(value) => {
                            setCurrentTime(value[0])
                            if (audioRef.current) {
                                audioRef.current.currentTime = value[0]
                            }
                        }}
                        className="w-full hover:cursor-pointer"
                    />
                    <span>{duration}</span>
                </div>
            </div>

            {/* RIGHT: Options */}
            <div className="flex w-[30%] items-center justify-end gap-3 text-neutral-400">
                {/* <button className="hover:text-white">
                    <Mic size={18} />
                </button>
                <button className="hover:text-white">
                    <LayoutList size={18} className="text-green-500" />
                </button>
                <button className="hover:text-white">
                    <MonitorSpeaker size={18} />
                </button>
                <div className="flex items-center gap-1">
                    <VolumeControl />
                </div>
                <button className="hover:text-white">
                    <Maximize2 size={18} />
                </button> */}
                <OptionToggle
                    pressed={previewTrack}
                    onPressedChange={(pressed) => {
                        dispatch(setPreviewTrack(pressed))
                    }}
                >
                    <Icons.canvas className="size-4" />
                </OptionToggle>
                <OptionToggle
                    pressed={previewQueue}
                    onPressedChange={(pressed) => {
                        dispatch(setPreviewQueue(pressed))
                    }}
                >
                    <Icons.queue className="size-4" />
                </OptionToggle>
                <VolumeControl className="self-start" />
                <MiniPlayer />
            </div>
        </footer>
    )
}
