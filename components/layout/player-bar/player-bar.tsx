'use client'

import { useEffect, useRef, useState } from 'react'
import {
    setIsPlaying,
    setIsShuffle,
    setPreviewQueue,
    setPreviewTrack,
    setRepeatMode,
    setTrack,
} from '@/redux/features/app.slice'
import { ISong } from '@/types/song'
import { Minus, Plus, Repeat, Repeat1 } from 'lucide-react'

import { env } from '@/env.mjs'
import { cn, formatTime, shuffleArray } from '@/lib/utils'
import { useRedux } from '@/hooks/use-redux'
import { OptionToggle } from '@/components/ui/option-toggle'
import { Slider } from '@/components/ui/slider'
import { Icons } from '@/components/icons'
import { MiniPlayer } from '@/components/mini-player'

import VolumeControl from './volume-control'

export default function PlayerBar() {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const { appSelector, dispatch } = useRedux()
    const {
        previewTrack,
        isPlaying,
        previewQueue,
        track,
        volume,
        isMuted,
        queue,
        repeatMode,
        isShuffle,
    } = appSelector((state) => state.app)

    const [currentTime, setCurrentTime] = useState(0)
    const [progress, setProgress] = useState(0)
    const [duration, setDuration] = useState(0)
    const [shuffledQueue, setShuffledQueue] = useState<ISong[]>([])

    // Initialize or update audio
    useEffect(() => {
        if (!track) return

        if (audioRef.current) {
            audioRef.current.pause()
            audioRef.current.src = `${env.NEXT_PUBLIC_MEDIA_URL}${track.url}`
        } else {
            audioRef.current = new Audio(
                `${env.NEXT_PUBLIC_MEDIA_URL}${track.url}`
            )
        }

        const audio = audioRef.current
        audio.volume = isMuted ? 0 : volume / 100

        const handleTimeUpdate = () => {
            setCurrentTime(audio.currentTime)
            setProgress((audio.currentTime / audio.duration) * 100 || 0)
        }

        const handleLoadedMetadata = () => setDuration(audio.duration)
        const handleEnded = () => {
            if (repeatMode === 'one') {
                audio.currentTime = 0
                audio.play()
            } else if (repeatMode === 'all') {
                handleTrackChange('next')
            } else {
                dispatch(setIsPlaying(false))
            }
        }

        audio.addEventListener('timeupdate', handleTimeUpdate)
        audio.addEventListener('loadedmetadata', handleLoadedMetadata)
        audio.addEventListener('ended', handleEnded)

        if (isPlaying) {
            audio.play().catch((error) => {
                console.error('Error playing audio:', error)
                dispatch(setIsPlaying(false))
            })
        }

        return () => {
            audio.pause()
            audio.removeEventListener('timeupdate', handleTimeUpdate)
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata)
            audio.removeEventListener('ended', handleEnded)
        }
        // Remove repeatMode from dependencies
    }, [track, dispatch, isPlaying])

    // Play/Pause logic
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

    // Volume control
    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = isMuted ? 0 : volume / 100
        }
    }, [volume, isMuted])

    // Shuffle queue
    const toggleShuffle = () => {
        if (!queue) return
        if (isShuffle) {
            setShuffledQueue([])
        } else {
            setShuffledQueue(shuffleArray<ISong>(queue.tracks))
        }
        dispatch(setIsShuffle(!isShuffle))
    }

    // Handle track change
    const handleTrackChange = (direction: 'next' | 'prev') => {
        if (!queue || !track) return

        const currentQueue =
            isShuffle && shuffledQueue.length ? shuffledQueue : queue.tracks
        const currentTrackIndex = currentQueue.findIndex(
            (item) => item.id === track.id
        )
        if (currentTrackIndex === -1) return

        const changeTrack = (newIndex: number) => {
            dispatch(setTrack(currentQueue[newIndex]))
            dispatch(setIsPlaying(true))
        }

        if (direction === 'next') {
            const nextIndex = (currentTrackIndex + 1) % currentQueue.length
            if (nextIndex === 0 && repeatMode === 'off') {
                dispatch(setIsPlaying(false))
                return
            }
            changeTrack(nextIndex)
        } else if (direction === 'prev') {
            const prevIndex =
                (currentTrackIndex - 1 + currentQueue.length) %
                currentQueue.length
            if (currentTrackIndex === 0 && repeatMode === 'off') {
                dispatch(setIsPlaying(false))
                return
            }
            changeTrack(prevIndex)
        }
    }

    const togglePlay = () => dispatch(setIsPlaying(!isPlaying))

    const handleProgressChange = (value: number[]) => {
        if (!audioRef.current || !duration) return

        const newTime = (value[0] / 100) * duration
        audioRef.current.currentTime = newTime
        setProgress(value[0])
        setCurrentTime(newTime)
    }

    const toggleRepeat = () => {
        const nextMode =
            repeatMode === 'off' ? 'all' : repeatMode === 'all' ? 'one' : 'off'
        dispatch(setRepeatMode(nextMode))
    }

    return (
        <footer className="box-border flex w-full items-center justify-between bg-black px-4 py-2">
            {/* LEFT: Song info */}
            <div className="flex w-[30%] items-center gap-3">
                <img
                    src={`${env.NEXT_PUBLIC_MEDIA_URL}${track?.thumbnail}`}
                    alt={track?.title}
                    width={56}
                    height={56}
                    className="rounded-sm"
                />
                <div className="flex flex-col text-sm text-white">
                    <span className="font-semibold">{track?.title}</span>
                    {track?.artist && (
                        <span className="text-xs whitespace-nowrap text-neutral-400">
                            {track.artist
                                .map((artist) => artist.name)
                                .join(', ')}
                        </span>
                    )}
                </div>
                <div className="ml-2 flex items-center gap-2 text-neutral-400">
                    <button type="button" className="hover:text-white">
                        <Minus size={16} />
                    </button>
                    <button type="button" className="hover:text-white">
                        <Plus size={16} />
                    </button>
                </div>
            </div>

            {/* CENTER: Controls */}
            <div className="flex w-[40%] flex-col items-center">
                <div className="flex items-center gap-5 text-neutral-400">
                    <button type="button" onClick={toggleShuffle}>
                        <Icons.shuffle
                            className={cn('size-4 hover:cursor-pointer', {
                                'text-primary': isShuffle,
                            })}
                        />
                    </button>
                    <button
                        type="button"
                        onClick={() => handleTrackChange('prev')}
                    >
                        <Icons.skipBack className="size-4 hover:cursor-pointer hover:text-white" />
                    </button>
                    <button
                        type="button"
                        onClick={togglePlay}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition hover:scale-105"
                    >
                        {isPlaying ? (
                            <Icons.playerPause className="size-5" />
                        ) : (
                            <Icons.playerPlay className="size-5" />
                        )}
                    </button>
                    <button
                        type="button"
                        onClick={() => handleTrackChange('next')}
                    >
                        <Icons.skipForward className="size-4 hover:cursor-pointer hover:text-white" />
                    </button>
                    <button
                        type="button"
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
                    <span>{formatTime(track?.duration || 0)}</span>
                </div>
            </div>

            {/* RIGHT: Options */}
            <div className="flex w-[30%] items-center justify-end gap-3 text-neutral-400">
                <OptionToggle
                    pressed={previewTrack}
                    onPressedChange={(pressed) =>
                        dispatch(setPreviewTrack(pressed))
                    }
                >
                    <Icons.canvas className="size-4" />
                </OptionToggle>
                <OptionToggle
                    pressed={previewQueue}
                    onPressedChange={(pressed) =>
                        dispatch(setPreviewQueue(pressed))
                    }
                >
                    <Icons.queue className="size-4" />
                </OptionToggle>
                <VolumeControl className="self-start" />
                <MiniPlayer />
            </div>
        </footer>
    )
}
