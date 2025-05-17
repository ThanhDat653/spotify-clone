/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { setTrack } from '@/redux/features/app.slice'
import { IGenreSong, ILandingResponse } from '@/types/common'

import { env } from '@/env.mjs'
import { cn } from '@/lib/utils'
import { useRedux } from '@/hooks/use-redux'
import { Button } from '@/components/ui/button'

import ShelfPlaylist from '../component-shelf/shelf-playlist'
import { Icons } from '../icons'

const facets = [
    { label: 'Music', value: undefined },
    { label: 'Album', value: 'album-chip' },
]

export function FacetTabs() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const currentFacet = (searchParams ?? new URLSearchParams()).get('facet')

    const handleClick = (facet: string | undefined) => {
        const params = new URLSearchParams(
            (searchParams ?? new URLSearchParams()).toString()
        )
        if (facet) {
            params.set('facet', facet)
            router.push(`${pathname}?${params.toString()}`)
        } else {
            params.delete('facet')
            router.push(`${pathname}?${params.toString()}`)
        }
    }

    return (
        <div className="bg-base sticky top-0 z-50 flex w-full gap-2 py-4 pl-3">
            {facets.map(({ label, value }) => (
                <Button
                    key={label}
                    variant={
                        value === currentFacet || (!value && !currentFacet)
                            ? 'default'
                            : 'secondary'
                    }
                    onClick={() => handleClick(value)}
                    className="cursor-pointer rounded-full"
                >
                    {label}
                </Button>
            ))}
        </div>
    )
}

interface TrackItemProps {
    song: IGenreSong
}

interface FacetContentProps {
    data: ILandingResponse
}

function FacetContent(data: FacetContentProps) {
    const searchParams = useSearchParams()
    const facet = (searchParams ?? new URLSearchParams()).get('facet')

    const labelMap: Record<string, string> = {
        'music-chip': 'Music',
        'album-chip': 'Album',
    }

    const label = facet ? labelMap[facet] || 'Unknown' : 'Music'

    return (
        <div className="mt-6">
            <h1 className="mb-4 pl-3 text-3xl font-bold">{label}</h1>
            <div className="mb-5 flex-1 pl-3">
                <div className="grid grid-cols-3 gap-x-3 gap-y-1">
                    {data.data.top_trending_songs.map((song) => (
                        <TrackItem key={song.id} song={song} />
                    ))}
                </div>
            </div>
            <div className="flex flex-col gap-5">
                {labelMap[facet ?? ''] === 'Album'
                    ? data.data.random_albums.map((playlist) => {
                          if (playlist.songs.length !== 0)
                              return (
                                  <ShelfPlaylist
                                      title={playlist.title}
                                      key={playlist.id}
                                      songs={playlist.songs}
                                      id={playlist.id}
                                  />
                              )
                      })
                    : data.data.playlists_by_genre.map((playlist) => {
                          if (playlist.songs.length !== 0)
                              return (
                                  <ShelfPlaylist
                                      title={playlist.genre}
                                      key={playlist.genre}
                                      songs={playlist.songs}
                                  />
                              )
                      })}
            </div>
        </div>
    )
}

function TrackItem({ song }: TrackItemProps) {
    const { dispatch } = useRedux()

    const searchParams = useSearchParams()

    const facet = (searchParams ?? new URLSearchParams()).get('facet')

    const labelMap: Record<string, string> = {
        'music-chip': 'Music',
    }

    const label = facet ? labelMap[facet] || 'Unknown' : 'All'

    return (
        <Link
            href={`/track/${song.id}`}
            className={cn(
                'group/track flex h-[54px] cursor-pointer items-center justify-between rounded-sm pl-2 hover:bg-white/10'
            )}
        >
            <div className="flex items-center gap-1">
                <div className="relative size-10 overflow-hidden rounded-sm">
                    <div className="absolute top-0 right-0 bottom-0 left-0 hidden items-center justify-center bg-black/40 group-hover/track:flex">
                        <Icons.playerPlay
                            onClick={() => {
                                //@ts-expect-error same
                                dispatch(setTrack(song))
                            }}
                            className="size-5 text-white"
                        />
                    </div>
                    <img
                        className=""
                        src={`${env.NEXT_PUBLIC_MEDIA_URL}${song.thumbnail}`}
                        alt=""
                    />
                </div>
                <div className="flex flex-col pl-2">
                    <p className="text-sm text-white">{song.title}</p>
                    <span className="text-[13px] text-gray-500">
                        {song.artist
                            .map((artist) => artist.username)
                            .join(', ')}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export { FacetContent }
