/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

import ShelfPlaylist from '../component-shelf/shelf-playlist'
import TrackItem from '../track-item'

const facets = [
    { label: 'All', value: undefined },
    { label: 'Music', value: 'music-chip' },
    { label: 'Podcasts', value: 'podcasts-chip' },
]

export function FacetTabs() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const currentFacet = searchParams.get('facet')

    const handleClick = (facet: string | undefined) => {
        const params = new URLSearchParams(searchParams.toString())
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

function FacetContent() {
    const searchParams = useSearchParams()
    const facet = searchParams.get('facet')

    const labelMap: Record<string, string> = {
        'music-chip': 'Music',
        'podcasts-chip': 'Podcasts',
    }

    const label = facet ? labelMap[facet] || 'Unknown' : 'All'

    return (
        <div className="mt-6">
            <h1 className="mb-4 pl-3 text-3xl font-bold">{label}</h1>
            <div className="mb-5 flex-1">
                <div className="grid grid-cols-4">
                    <TrackItem />
                    <TrackItem />
                    <TrackItem />
                    <TrackItem />
                    <TrackItem />
                    <TrackItem />
                    <TrackItem />
                    <TrackItem />
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <ShelfPlaylist title="Made for Dat" key={'Made for Dat'} />
                <ShelfPlaylist
                    title="Recommend Station"
                    key={'Recommend Station'}
                />
                <ShelfPlaylist title="Lofi to night" key={'Lofi to night'} />
                <ShelfPlaylist title="Popular album" key={'Popular album'} />
            </div>
        </div>
    )
}

export { FacetContent }
