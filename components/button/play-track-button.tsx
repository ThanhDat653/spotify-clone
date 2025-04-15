import React from 'react'

import { cn } from '@/lib/utils'

import { Icons } from '../icons'

interface IPlayTrackButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isPlaying?: boolean
}

function PlayTrackButton({
    className,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    children,
    isPlaying = false,
    ...props
}: IPlayTrackButtonProps) {
    return (
        <button
            className={cn(
                'bg-primary w-fit cursor-pointer rounded-full p-3 shadow-[0_8px_8px_rgba(0,_0,_0,_.3)]',
                className
            )}
            data-play={isPlaying}
            {...props}
        >
            {!isPlaying ? (
                <Icons.playerPlay className="size-6 text-base" />
            ) : (
                <Icons.playerPause className="size-6 text-base" />
            )}
        </button>
    )
}

export default PlayTrackButton
