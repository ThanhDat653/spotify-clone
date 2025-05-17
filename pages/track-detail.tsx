'use client'

import React from 'react'
import Link from 'next/link'
import { setQueue, setTrack } from '@/redux/features/app.slice'
import { ISong } from '@/types/song'
import { CircleArrowDown } from 'lucide-react'

import { env } from '@/env.mjs'
import { useRedux } from '@/hooks/use-redux'
import PlayTrackButton from '@/components/button/play-track-button'
import { Icons } from '@/components/icons'

interface ITrackDetailProps {
    data: ISong
}

function TrackDetail({ data }: ITrackDetailProps) {
    const { dispatch, appSelector } = useRedux()
    const { isPlaying, queue } = appSelector((state) => state.app)
    const handleOnPlaylist = () => {
        dispatch(
            setQueue({
                track: [data],
                playlistId: data.id,
                playlistName: '',
            })
        )
        dispatch(setTrack(data))
    }
    return (
        <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-col pb-10">
                <div className="flex gap-6 px-6 pt-6">
                    <div className="overflow-hidden rounded-md">
                        <img
                            className="shadow-[0_4px_60px_rgba(0,0,0,.5)]"
                            src={`${env.NEXT_PUBLIC_MEDIA_URL}${data.thumbnail}`}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-end gap-2">
                        <span className="text-sm">Song</span>
                        <p className="text-5xl font-bold">{data.title}</p>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                {/* <img
                                    src={`${env.NEXT_PUBLIC_MEDIA_URL}${data.artist[0].avatar}`}
                                    className="size-6 rounded-full"
                                    alt=""
                                /> */}
                                <p className="text-sm font-bold">
                                    {data.artist[0].username}
                                </p>
                            </div>
                            <p className="text-subdued text-sm font-semibold opacity-90">
                                {data.title}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center justify-between p-6">
                        <div className="flex items-center gap-6">
                            <PlayTrackButton
                                onClick={handleOnPlaylist}
                                isPlaying={
                                    queue?.playlistId === data.id && isPlaying
                                }
                            />
                            <Icons.plusCircle className="text-subdued size-9" />
                            <a
                                href={`${env.NEXT_PUBLIC_MEDIA_URL}${data.url}`}
                                download={data.title}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-subdued flex size-9 items-center"
                            >
                                <CircleArrowDown className="size-9" />
                            </a>
                        </div>
                        <div className="">
                            <span className="text-subdued text-sm">List</span>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 px-6">
                    <p className="text-2xl font-bold text-white">Aritsts</p>
                    {data.artist.map((artist) => (
                        <Link
                            href={`/artist/${artist.id}`}
                            key={artist.id}
                            className="hover:bg-subdued/20 flex items-center gap-2 rounded-md py-2 pl-2"
                        >
                            <img
                                src={artist?.avatar || '/2thuhieu.jpg'}
                                className="size-20 rounded-full"
                                alt=""
                            />
                            <div className="flex flex-col gap-2 text-lg">
                                <p>{artist.fullname}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TrackDetail
