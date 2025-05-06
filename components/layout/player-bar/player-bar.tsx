'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import {
    setIsPlaying,
    setPreviewQueue,
    setPreviewTrack,
    setRepeatMode,
} from '@/redux/features/app.slice'
import {
    Minus,
    // Pause,
    Plus,
    Repeat,
    Repeat1,
} from 'lucide-react'

import { cn, formatTime } from '@/lib/utils'
import { useRedux } from '@/hooks/use-redux'
import { OptionToggle } from '@/components/ui/option-toggle'
import { Slider } from '@/components/ui/slider'
import { Icons } from '@/components/icons'
import { MiniPlayer } from '@/components/mini-player'

import VolumeControl from './volume-control'

export default function PlayerBar() {
    const audioRef = useRef<HTMLAudioElement>(null)
    const { appSelector, dispatch } = useRedux()
    const {
        previewTrack,
        isPlaying,
        previewQueue,
        track,
        volume,
        isMuted,
        repeatMode,
    } = appSelector((state) => state.app)
    const [currentTime, setCurrentTime] = useState(0)

    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        audioRef.current = new Audio(track?.url)

        if (audioRef.current) {
            audioRef.current.volume = volume / 100
        }

        const audio = audioRef.current

        const handleTimeUpdate = () => {
            if (audio) {
                setCurrentTime(audio.currentTime)
                setProgress((audio.currentTime / audio.duration) * 100 || 0)
            }
        }

        const handleLoadedMetadata = () => {
            if (audio) {
                setDuration(audio.duration)
            }
        }

        const handleEnded = () => {
            if (repeatMode === 'one') {
                audio.currentTime = 0
                audio.play()
            }
        }

        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('ended', handleEnded)

        return () => {
            audio.pause()
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audio.removeEventListener('ended', handleEnded)
        }
    }, [track?.url, repeatMode, dispatch])

    useEffect(() => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.play().catch((error) => {
                console.error('Error playing audio:', error)
                dispatch(setIsPlaying(false))
            })
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying, dispatch])

    useEffect(() => {
        if (!audioRef.current) return

        audioRef.current.volume = isMuted ? 0 : volume / 100
    }, [volume, isMuted])

    const togglePlay = () => {
        dispatch(setIsPlaying(!isPlaying))
    }

    const handleProgressChange = (value: number[]) => {
        if (!audioRef.current || !duration) return

        const newTime = (value[0] / 100) * duration
        audioRef.current.currentTime = newTime
        setProgress(value[0])
        setCurrentTime(newTime)
    }

    const toggleRepeat = () => {
        if (repeatMode === 'off') dispatch(setRepeatMode('all'))
        else if (repeatMode === 'all') dispatch(setRepeatMode('one'))
        else dispatch(setRepeatMode('off'))
    }

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
                        onClick={togglePlay}
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
                    <button
                        onClick={toggleRepeat}
                        className={cn('text-neutral-400', {
                            'text-primary': repeatMode !== 'off',
                        })}
                    >
                        {repeatMode === 'one' ? (
                            <Repeat1 className="size-5" />
                        ) : (
                            <Repeat className="size-5" />
                        )}
                    </button>
                </div>

                {/* Progress bar */}
                <div className="mt-1 flex w-full items-center gap-2 text-xs text-neutral-400">
                    <span>{formatTime(currentTime)}</span>
                    <Slider
                        value={[progress]}
                        min={0}
                        max={100}
                        step={1}
                        onValueChange={handleProgressChange}
                        className="w-full hover:cursor-pointer"
                    />
                    <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* RIGHT: Options */}
            <div className="flex w-[30%] items-center justify-end gap-3 text-neutral-400">
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
