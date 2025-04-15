import React from 'react'

import { cn } from '@/lib/utils'

function TrackItem({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex h-[56px] items-center justify-between rounded-sm pr-4 pl-2 hover:bg-white/10',
                className
            )}
            {...props}
        >
            <div className="flex items-center gap-1">
                <div className="">
                    <img
                        className="size-10 rounded-sm"
                        src="/nadtt.jpg"
                        alt=""
                    />
                </div>
                <div className="flex flex-col">
                    <p className="text-white">Như Cách Anh Đã Từng Thôi</p>
                    <span className="text-neutral-400">HURRYKNG</span>
                </div>
            </div>

            <div className=""></div>
        </div>
    )
}

export default TrackItem
