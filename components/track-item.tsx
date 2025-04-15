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
                'group/track flex h-[54px] items-center justify-between rounded-sm pr-4 pl-2 hover:bg-white/10',
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-1">
                <div className="relative size-10 overflow-hidden rounded-sm">
                    <div className="absolute top-0 right-0 bottom-0 left-0 hidden items-center justify-center bg-black/40 group-hover/track:flex">
                        <Icons.playerPlay className="size-4 text-white" />
                    </div>
                    <img className="" src="/nadtt.jpg" alt="" />
                </div>
                <div className="flex flex-col">
                    <p className="text-white">Như Cách Anh Đã Từng Thôi</p>
                    <span className="text-sm text-neutral-400">HURRYKNG</span>
                </div>
            </div>

            <div className=""></div>
        </div>
    )
}

export default TrackItem
