import React from 'react'

import { cn } from '@/lib/utils'

function TrackItem({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn('flex justify-between hover:bg-white/10', className)}
            {...props}
        >
            <div className="flex flex-col gap-1">
                <p className="text-white">Như Cách Anh Đã Từng Thôi</p>
                <span className="text-neutral-400">HURRYKNG</span>
            </div>

            <div className=""></div>
        </div>
    )
}

export default TrackItem
