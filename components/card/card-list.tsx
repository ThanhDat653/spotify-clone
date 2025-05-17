import React from 'react'
import Link from 'next/link'
import { IGenreSong, ISongAlbum } from '@/types/common'

import { env } from '@/env.mjs'

import PlayTrackButton from '../button/play-track-button'

interface CardListProps {
    songs: IGenreSong[] | ISongAlbum[]
}
const CardList = ({ songs }: CardListProps) => {
    return (
        <div className="flex gap-1">
            {songs.map((song) => (
                <CardTitle song={song} key={song.id} />
            ))}
        </div>
    )
}

interface CardProps {
    song: IGenreSong | ISongAlbum
}
const CardTitle = ({ song }: CardProps) => {
    return (
        <Link
            href={`/track/${song.id}`}
            className="hover:bg-elevated-base group/top-result relative w-[170px] cursor-pointer rounded p-3 transition-all duration-200"
        >
            <img
                src={`${env.NEXT_PUBLIC_MEDIA_URL}${song.thumbnail}`}
                alt={song.thumbnail}
                width={158}
                height={158}
                className="rounded"
            />
            <p className="mt-3 line-clamp-2 w-full text-sm font-normal text-gray-500">
                {song.artist.map((artist) => (
                    <span key={artist.id}>{artist.fullname}</span>
                ))}
            </p>
            <PlayTrackButton className="absolute right-5 bottom-1/3 translate-y-2 opacity-0 transition-all delay-75 ease-in group-hover/top-result:translate-y-0 group-hover/top-result:opacity-100" />
        </Link>
    )
}

export default CardList
