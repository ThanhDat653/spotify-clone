'use client'

import React from 'react'

import { cn } from '@/lib/utils'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
    DropdownMenuAddToPlaylist,
    DropdownMenuAddToQueue,
    DropdownMenuGoToAlbum,
    DropdownMenuGoToArtists,
    DropdownMenuGoToTrackRadio,
    DropdownMenuShareTrack,
    DropdownMenuToggleLikeTrack,
    DropdownMenuViewCredits,
} from '../dropdown-item'
import { Icons } from '../icons'
import { Button } from '../ui/button'
import { ResizablePanel } from '../ui/resizable'
import { ScrollArea } from '../ui/scroll-area'

function TrackPreview({
    className,
    ...props
}: React.ComponentProps<typeof ResizablePanel>) {
    const [scrolled, setScrolled] = React.useState(false)
    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollTop = e.currentTarget.scrollTop
        setScrolled(scrollTop > 0)
    }
    return (
        <ResizablePanel
            className={cn('group/panel bg-base rounded-md', className)}
            {...props}
        >
            <ScrollArea onScroll={handleScroll} className="h-full">
                <div
                    data-scroll-state={scrolled}
                    className="data-[scroll-state=true]:bg-base sticky top-0 flex items-center justify-between gap-2 px-4 py-4 transition-all delay-0 ease-in-out data-[scroll-state=true]:shadow-[0_6px_10px_rgba(0,0,0,.6)]"
                >
                    <div className="flex gap-2 overflow-hidden">
                        <button className="-ml-6 opacity-0 transition-all delay-100 ease-in group-hover/panel:ml-0 group-hover/panel:opacity-100">
                            <Icons.panelRightClose className="size-5 text-[#656565]" />
                        </button>
                        <div className="">
                            <p className="font-bold text-nowrap">
                                Như cách anh đã từng thôi
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger className="hover:bg-elevated-base rounded-full p-2 text-[#656565] opacity-0 transition-all delay-100 ease-in group-hover/panel:opacity-100 hover:text-white data-[state=open]:opacity-100">
                                <Icons.ellipsis className="size-4" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuAddToPlaylist />
                                <DropdownMenuToggleLikeTrack />
                                <DropdownMenuAddToQueue />
                                <DropdownMenuSeparator />
                                <DropdownMenuGoToTrackRadio />
                                <DropdownMenuGoToArtists />
                                <DropdownMenuGoToAlbum />
                                <DropdownMenuViewCredits />
                                <DropdownMenuSeparator />
                                <DropdownMenuShareTrack />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
                <div className="flex flex-col gap-4 px-4">
                    <div className="aspect-square max-w-[388px] overflow-hidden rounded-lg">
                        <img className="w-full" src="/nadtt-canva.jpg" alt="" />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                        <div className="overflow-hidden">
                            <p className="text-2xl leading-6 font-bold text-nowrap">
                                Như Cách Anh Đã Từng Thôi
                            </p>
                            <span className="text-subdued text-[15px] leading-0 font-bold">
                                HURRYKNG
                            </span>
                        </div>
                        <div className="flex items-center">
                            <button className="opacity-0 transition-all delay-100 ease-in group-hover/panel:mr-4 group-hover/panel:opacity-100">
                                <Icons.share className="size-6 text-[#656565]" />
                            </button>
                            <button>
                                <Icons.circleCheck className="size-6" />
                            </button>
                        </div>
                    </div>
                    <div className="bg-elevated-base flex flex-col gap-3 rounded-md p-4">
                        <div className="flex items-center justify-between">
                            <p className="text-[15px] font-semibold">Credits</p>
                            <p className="text-subdued text-sm font-semibold">
                                Show all
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-[15px] font-semibold">
                                    HURRYKNG
                                </p>
                                <span className="text-subdued text-[13px] font-bold">
                                    Main Artist
                                </span>
                            </div>
                            <Button variant={'outline'} size={null}>
                                Follow
                            </Button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-[15px] font-semibold">
                                    KADO
                                </p>
                                <span className="text-subdued text-[13px] font-bold">
                                    Producer
                                </span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex flex-col">
                                <p className="text-[15px] font-semibold">
                                    Minh Gao
                                </p>
                                <span className="text-subdued text-[13px] font-bold">
                                    Producer
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-elevated-base flex flex-col gap-3 rounded-md p-4">
                        <p className="text-[15px] font-semibold">
                            Your queue is empty
                        </p>
                        <Button
                            variant={'outline'}
                            className="self-start"
                            size={null}
                        >
                            Search for something new
                        </Button>
                    </div>
                </div>
            </ScrollArea>
        </ResizablePanel>
    )
}

export default TrackPreview
