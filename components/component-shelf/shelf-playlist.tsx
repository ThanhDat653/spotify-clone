import React from 'react'

import CardList from '../card/card-list'

interface ShelfPlaylistProps {
    title: string
}

const ShelfPlaylist = ({ title }: ShelfPlaylistProps) => {
    return (
        <div className="flex flex-col items-start justify-start gap-2">
            <h1 className="mb-4 pl-3 text-2xl font-bold">{title}</h1>
            <CardList />
        </div>
    )
}

export default ShelfPlaylist
