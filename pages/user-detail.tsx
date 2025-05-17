'use client'

import { setQueue, setTrack } from '@/redux/features/app.slice'
import { IPlaylist } from '@/types/playlist'
import { ISong } from '@/types/song'

import { env } from '@/env.mjs'
import { cn, formatTime } from '@/lib/utils'
import { useRedux } from '@/hooks/use-redux'
import { Button } from '@/components/ui/button'
import { Card, CardImage, CardTitle } from '@/components/ui/card'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import PlayTrackButton from '@/components/button/play-track-button'
import { Icons } from '@/components/icons'

interface IPlaylistDetailProps {
    data: IPlaylist
}

function PlaylistDetail({ data }: IPlaylistDetailProps) {
    const { dispatch, appSelector } = useRedux()
    const { isPlaying, queue } = appSelector((state) => state.app)
    const handlePlay = (song: ISong, index: number) => {
        dispatch(setTrack(song))

        dispatch(
            setQueue({
                track: data.songs,
                playlistId: data.id,
                playlistName: data.name,
            })
        )
    }
    const handleOnPlaylist = () => {
        dispatch(
            setQueue({
                track: data.songs,
                playlistId: data.id,
                playlistName: data.name,
            })
        )
        dispatch(setTrack(data.songs[0]))
    }

    return (
        <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-col pb-10">
                <div className="flex gap-6 px-6 pt-6">
                    <div className="overflow-hidden rounded-md">
                        <img
                            className="shadow-[0_4px_60px_rgba(0,0,0,.5)]"
                            src={`${env.NEXT_PUBLIC_MEDIA_URL}${data.poster}`}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-end gap-2">
                        <span className="text-sm">Playlist</span>
                        <p className="text-5xl font-bold">{data.name}</p>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <img
                                    src={`${env.NEXT_PUBLIC_MEDIA_URL}${data.user.avatar}`}
                                    className="size-6 rounded-full"
                                    alt=""
                                />
                                <p className="text-sm font-bold">
                                    {data.user.username}
                                </p>
                            </div>
                            <p className="text-subdued text-sm font-semibold opacity-90">
                                {data.songs.length} songs
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
                            <Icons.ellipsis className="text-subdued size-9" />
                        </div>
                        <div className="">
                            <span className="text-subdued text-sm">List</span>
                        </div>
                    </div>
                </div>
                <div className="px-6">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">#</TableHead>
                                <TableHead className="text-left">
                                    Title
                                </TableHead>
                                <TableHead className="w-[50px]"></TableHead>
                                <TableHead className="w-[50px]">
                                    <Icons.clock3 className="size-4" />
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {data.songs.map((song, index) => (
                                <SongRow
                                    key={song.id}
                                    song={song}
                                    index={index}
                                    onPlay={handlePlay}
                                />
                            ))}
                            {/* <TableRow>
                                <TableCell className="w-[50px]">1</TableCell>
                                <TableCell className="flex flex-col gap-1 text-[16px] text-white">
                                    <p className="text-[16px]">
                                        Như Anh Đã Từng Thôi
                                    </p>
                                    <span className="text-subdued text-[13px] font-semibold">
                                        HURRYKNG
                                    </span>
                                </TableCell>
                                <TableCell className="w-[50px]">
                                    <p className="text-subdued">3:00</p>
                                </TableCell>
                            </TableRow> */}
                        </TableBody>
                    </Table>
                </div>
                <div className="text-subdued mt-6 mb-6 flex flex-col gap-1 px-6 text-sm">
                    <p>December 16, 2024</p>

                    <p>© 2024 HUSTLANG Robber/12 trái lê</p>

                    <p>℗ 2024 HUSTLANG Robber/12 trái lê</p>
                </div>
                <div className="flex flex-col gap-4 px-6 pt-6">
                    <p className="text-2xl font-bold text-white">
                        More by HURRKNG
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlaylistDetail

interface ISongRowProps {
    song: ISong
    index: number
    onPlay?: (song: ISong, idx: number) => void
}

function SongRow({ song, index, onPlay }: ISongRowProps) {
    const { appSelector } = useRedux()
    const { track, isPlaying } = appSelector((state) => state.app)
    const isCurrentSong = track?.id === song.id && isPlaying
    return (
        <TableRow
            className={cn('group/song', {
                'text-primary': isCurrentSong,
            })}
            key={song.id}
        >
            <TableCell className="w-[50px]">
                <Button
                    onClick={() => onPlay?.(song, index)}
                    variant={null}
                    size={null}
                    className="hidden group-hover/song:block"
                >
                    {isCurrentSong ? (
                        <Icons.playerPause className="size-4" />
                    ) : (
                        <Icons.playerPlay className="size-4" />
                    )}
                </Button>
                <span className="group-hover/song:hidden">
                    {isCurrentSong ? (
                        <Icons.barChartIcon className="size-4" />
                    ) : (
                        index + 1
                    )}
                </span>
            </TableCell>
            <TableCell className="flex flex-col gap-1 text-[16px]">
                <p className="text-[16px]">{song.title}</p>
                {song.artist.map((artist) => (
                    <span
                        key={artist.id}
                        className="text-subdued text-[13px] font-semibold"
                    >
                        {artist.fullname}
                    </span>
                ))}
            </TableCell>
            <TableCell className="w-[50px]">
                <Icons.plusCircle className="text-subdued hidden size-5 group-hover/song:block" />
            </TableCell>
            <TableCell className="w-[50px]">
                <p className="text-subdued">{formatTime(song.duration)}</p>
            </TableCell>
        </TableRow>
    )
}
