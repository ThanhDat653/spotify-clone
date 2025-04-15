import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import PlayTrackButton from '@/components/button/play-track-button'
import TrackItem from '@/components/track-item'

function Page() {
    return (
        <div className="bg-base w-full rounded-xl">
            {/* Fixed Header */}
            <div className=""></div>
            {/* Content */}
            <div className="mt-6 px-6">
                <div className="flex gap-3 *:flex *:flex-col *:gap-2">
                    <div className="w-1/4">
                        <p className="text-2xl font-bold text-white">
                            Kết quả hàng đầu
                        </p>
                        <div className="group/top-result relative flex flex-col gap-4 overflow-hidden rounded-xl bg-[#181818] p-5 hover:bg-[#282828]">
                            <Avatar size={'md'}>
                                <AvatarFallback />
                                <AvatarImage src="/2thuhieu.jpg" />
                            </Avatar>

                            <div className="flex flex-col">
                                <p className="text-[32px] font-bold text-white hover:underline">
                                    HIEUTHUHAI
                                </p>
                                <span className="text-sm text-neutral-400">
                                    Nghệ sĩ
                                </span>
                            </div>
                            <PlayTrackButton
                                isPlaying
                                className="absolute right-5 bottom-5 translate-y-2 opacity-0 transition-all delay-75 ease-in group-hover/top-result:translate-y-0 group-hover/top-result:opacity-100"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-2xl font-bold text-white">Bài hát</p>
                        <div className="flex flex-col">
                            <TrackItem />
                            <TrackItem />
                            <TrackItem />
                            <TrackItem />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
