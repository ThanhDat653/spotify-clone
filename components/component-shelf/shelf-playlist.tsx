import React from 'react'
import Link from 'next/link'
import { IGenreSong, ISongAlbum } from '@/types/common'

import CardList from '../card/card-list'

interface ShelfPlaylistProps {
    title: string
    songs: IGenreSong[] | ISongAlbum[]
    id?: number
}

const ShelfPlaylist = ({ title, songs, id }: ShelfPlaylistProps) => {
    return (
        <div className="flex flex-col items-start justify-start gap-2">
            <div className="mb-4 flex w-full items-center justify-between pl-3">
                <h1 className="text-2xl font-bold">{title}</h1>
                {id && (
                    <span className="hover:text-primary">
                        <Link href={`/album/${id}`}>Xem album</Link>
                    </span>
                )}
            </div>
            <CardList songs={songs} />
        </div>
    )
}

export default ShelfPlaylist
