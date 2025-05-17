'use client'

import { IArtist } from '@/types/user'
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

interface IUserTableProps {
    data: IArtist[]
}

function UserTable({ data }: IUserTableProps) {
    return (
        <div className="rounded-md border border-[#282828] bg-[#181818]">
            <div className="p-4">
                <div className="flex items-center justify-between">
                    <Button className="bg-[#1DB954] text-black hover:bg-[#1ed760]">
                        Add New user
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
                        <TableHead className="text-[#b3b3b3]">Name</TableHead>
                        <TableHead className="text-[#b3b3b3]">Email</TableHead>
                        <TableHead className="text-[#b3b3b3]">
                            Total Songs
                        </TableHead>
                        <TableHead className="text-right text-[#b3b3b3]">
                            Total Albums
                        </TableHead>
                        <TableHead className="w-12"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((user, index) => (
                        <TableRow
                            key={user.id}
                            className="border-[#282828] hover:bg-[#282828]"
                        >
                            <TableCell className="w-12">{user.id}</TableCell>
                            <TableCell>
                                <div className="flex flex-col">
                                    <span className="font-medium">
                                        {user.fullname}
                                    </span>
                                </div>
                            </TableCell>
                            <TableCell className="text-[#b3b3b3]">
                                {user.email}
                            </TableCell>
                            <TableCell className="text-[#b3b3b3]">
                                {user.songs.length} songs
                            </TableCell>
                            <TableCell className="text-right text-[#b3b3b3]">
                                {user.albums.length} albums
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

export default UserTable
