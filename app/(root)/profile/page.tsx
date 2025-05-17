'use client'

import React from 'react'

import { env } from '@/env.mjs'
import { useRedux } from '@/hooks/use-redux'
import { Card, CardImage, CardTitle } from '@/components/ui/card'
import PlayTrackButton from '@/components/button/play-track-button'

function Page() {
    const { appSelector } = useRedux()
    const { user } = appSelector((state) => state.auth)
    return (
        <div className="flex flex-col">
            <div className=""></div>
            <div className="flex flex-col pb-10">
                <div className="flex gap-6 px-6 pt-6">
                    <div className="flex justify-center overflow-hidden rounded-md bg-white">
                        <img
                            className="size-[300px] object-contain shadow-[0_4px_60px_rgba(0,0,0,.5)]"
                            src={`${env.NEXT_PUBLIC_MEDIA_URL}${user?.avatar}`}
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col justify-end gap-2">
                        <span className="text-sm">Playlist</span>
                        <p className="text-5xl font-bold">{user?.fullname}</p>
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1">
                                <p className="text-sm font-bold">
                                    {user?.playlists.length}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 px-6 pt-6">
                    <p className="text-2xl font-bold text-white">
                        More by HURRKNG
                    </p>
                    <div className="flex gap-4">
                        {user?.playlists.map((item) => (
                            <Card
                                key={`album-${item.id}`}
                                href={`/album/${item.id}`}
                                className="w-[180px]"
                            >
                                <CardImage
                                    src={`${env.NEXT_PUBLIC_SPOTIFY_BACKEND_URL}${item.poster}`}
                                >
                                    <PlayTrackButton className="absolute right-2 bottom-2 translate-y-2 opacity-0 transition-all delay-75 ease-in group-hover/track:translate-y-0 group-hover/track:opacity-100" />
                                </CardImage>
                                <CardTitle>{item.name}</CardTitle>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page

// interface ISongRowProps {
//     song: ISong
//     index: number
//     onPlay?: (song: ISong, idx: number) => void
// }

// function SongRow({ song, index, onPlay }: ISongRowProps) {
//     const { appSelector } = useRedux()
//     const { track, isPlaying } = appSelector((state) => state.app)
//     const isCurrentSong = track?.id === song.id && isPlaying
//     return (
//         <TableRow
//             className={cn('group/song', {
//                 'text-primary': isCurrentSong,
//             })}
//             key={song.id}
//         >
//             <TableCell className="w-[50px]">
//                 <Button
//                     onClick={() => onPlay?.(song, index)}
//                     variant={null}
//                     size={null}
//                     className="hidden group-hover/song:block"
//                 >
//                     {isCurrentSong ? (
//                         <Icons.playerPause className="size-4" />
//                     ) : (
//                         <Icons.playerPlay className="size-4" />
//                     )}
//                 </Button>
//                 <span className="group-hover/song:hidden">
//                     {isCurrentSong ? (
//                         <Icons.barChartIcon className="size-4" />
//                     ) : (
//                         index + 1
//                     )}
//                 </span>
//             </TableCell>
//             <TableCell className="flex flex-col gap-1 text-[16px]">
//                 <p className="text-[16px]">{song.title}</p>
//                 {song.artist.map((artist) => (
//                     <span
//                         key={artist.id}
//                         className="text-subdued text-[13px] font-semibold"
//                     >
//                         {artist.fullname}
//                     </span>
//                 ))}
//             </TableCell>
//             <TableCell className="w-[50px]">
//                 <Icons.plusCircle className="text-subdued hidden size-5 group-hover/song:block" />
//             </TableCell>
//             <TableCell className="w-[50px]">
//                 <p className="text-subdued">{formatTime(song.duration)}</p>
//             </TableCell>
//         </TableRow>
//     )
// }
