/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { cn } from '@/lib/utils'

import { Icons } from './icons'

function TrackItem({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'group/track flex h-[54px] cursor-pointer items-center justify-between rounded-sm p-0 hover:bg-white/10',
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-1">
                <div className="relative size-10 overflow-hidden rounded-sm">
                    <div className="absolute top-0 right-0 bottom-0 left-0 hidden items-center justify-center bg-black/40 group-hover/track:flex">
                        <Icons.playerPlay className="size-5 text-white" />
                    </div>
                    <img className="" src="/nadtt.jpg" alt="" />
                </div>
                <div className="flex flex-col pl-2">
                    <p className="text-sm text-white">
                        Như Cách Anh Đã Từng Thôi
                    </p>
                    <span className="text-[13px] text-gray-500">HURRYKNG</span>
                </div>
            </div>

            <div className=""></div>
        </div>
    )
}

export default TrackItem
