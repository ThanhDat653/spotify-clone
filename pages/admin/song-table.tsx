'use client'

import { useState } from 'react'
import { ISong } from '@/types/song'
import { Clock, MoreHorizontal, Pause, Play } from 'lucide-react'

import { formatTime } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

// Sample data
const songs = [
    {
        id: '1',
        title: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        duration: '3:20',
        plays: 1250000,
        dateAdded: '2023-01-15',
    },
    {
        id: '2',
        title: 'Save Your Tears',
        artist: 'The Weeknd',
        album: 'After Hours',
        duration: '3:35',
        plays: 980000,
        dateAdded: '2023-01-20',
    },
    {
        id: '3',
        title: 'Levitating',
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
        duration: '3:23',
        plays: 1100000,
        dateAdded: '2023-02-05',
    },
    {
        id: '4',
        title: "Don't Start Now",
        artist: 'Dua Lipa',
        album: 'Future Nostalgia',
        duration: '3:03',
        plays: 950000,
        dateAdded: '2023-02-10',
    },
    {
        id: '5',
        title: 'Watermelon Sugar',
        artist: 'Harry Styles',
        album: 'Fine Line',
        duration: '2:54',
        plays: 890000,
        dateAdded: '2023-03-01',
    },
    {
        id: '6',
        title: 'As It Was',
        artist: 'Harry Styles',
        album: "Harry's House",
        duration: '2:47',
        plays: 1300000,
        dateAdded: '2023-03-15',
    },
    {
        id: '7',
        title: 'Bad Habits',
        artist: 'Ed Sheeran',
        album: '=',
        duration: '3:50',
        plays: 870000,
        dateAdded: '2023-04-02',
    },
    {
        id: '8',
        title: 'Shape of You',
        artist: 'Ed Sheeran',
        album: '÷',
        duration: '3:53',
        plays: 2100000,
        dateAdded: '2023-04-10',
    },
]

export function SongsTable({ data }: { data: ISong[] }) {
    const [playingSong, setPlayingSong] = useState<string | null>(null)

    const togglePlay = (id: string) => {
        if (playingSong === id) {
            setPlayingSong(null)
        } else {
            setPlayingSong(id)
        }
    }

    return (
        <div className="rounded-md border border-[#282828] bg-[#181818]">
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <Button className="bg-[#1DB954] text-black hover:bg-[#1ed760]">
                        Add New Song
                    </Button>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="border-[#282828] text-[#b3b3b3] hover:bg-[#282828] hover:text-white"
                        >
                            Filter
                        </Button>
                        <Button
                            variant="outline"
                            className="border-[#282828] text-[#b3b3b3] hover:bg-[#282828] hover:text-white"
                        >
                            Sort
                        </Button>
                    </div>
                </div>
            </div>
            <Table>
                <TableHeader className="bg-[#212121]">
                    <TableRow className="border-[#282828] hover:bg-[#212121]">
                        <TableHead className="w-12 text-[#b3b3b3]">#</TableHead>
                        <TableHead className="text-[#b3b3b3]">Title</TableHead>
                        <TableHead className="text-[#b3b3b3]">Album</TableHead>
                        <TableHead className="text-[#b3b3b3]">
                            Date Added
                        </TableHead>
                        <TableHead className="text-right text-[#b3b3b3]">
                            <Clock className="ml-auto h-4 w-4" />
                        </TableHead>
                        <TableHead className="w-12"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((song, index) => (
                        <TableRow
                            key={song.id}
                            className="border-[#282828] hover:bg-[#282828]"
                        >
                            <TableCell className="w-12">{index + 1}</TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="font-medium">
                                        {song.title}
                                    </span>
                                    <span className="text-sm text-[#b3b3b3]">
                                        {song.artist
                                            .map((artist) => artist.fullname)
                                            .join(', ')}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell className="text-[#b3b3b3]">
                                {/* @ts-expect-error same */}
                                {song.albums
                                    .map((album) => album.title)
                                    .join(', ')}
                            </TableCell>
                            <TableCell className="text-[#b3b3b3]">
                                {/* @ts-expect-error same */}
                                {song.genre
                                    .map((genre) => genre.name)
                                    .join(', ')}
                            </TableCell>
                            <TableCell className="text-right text-[#b3b3b3]">
                                {formatTime(song.duration)}
                            </TableCell>
                            <TableCell>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="h-8 w-8 text-[#b3b3b3] hover:text-white"
                                        >
                                            <MoreHorizontal className="h-4 w-4" />
                                            <span className="sr-only">
                                                More
                                            </span>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent
                                        align="end"
                                        className="border-[#333333] bg-[#282828] text-white"
                                    >
                                        <DropdownMenuItem className="hover:bg-[#333333] focus:bg-[#333333]">
                                            Edit
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="hover:bg-[#333333] focus:bg-[#333333]">
                                            Add to Playlist
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-red-500 hover:bg-[#333333] focus:bg-[#333333]">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
