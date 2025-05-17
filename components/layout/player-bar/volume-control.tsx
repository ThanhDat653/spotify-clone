import { useEffect, useRef, useState } from 'react'
import { setIsMuted, setVolume } from '@/redux/features/app.slice'
import { Volume2, VolumeX } from 'lucide-react' // icon loa

import { cn } from '@/lib/utils'
import { useRedux } from '@/hooks/use-redux'
import { Slider } from '@/components/ui/slider'

const VolumeControl = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    const { appSelector, dispatch } = useRedux()
    const { volume, isMuted } = appSelector((state) => state.app)

    const toggleMuted = () => {
        dispatch(setIsMuted(!isMuted))
    }

    const handleVolumeChange = (value: number[]) => {
        if (value[0] === 0) {
            dispatch(setIsMuted(true))
        } else {
            dispatch(setIsMuted(false))
        }
        dispatch(setVolume(value[0]))
    }

    return (
        <div
            className={cn('group/slider flex items-center gap-2', className)}
            {...props}
        >
            <button onClick={toggleMuted} className="cursor-pointer">
                {isMuted ? (
                    <VolumeX size={18} className="text-white" />
                ) : (
                    <Volume2 size={18} className="text-white" />
                )}
            </button>
            <Slider
                className="w-[100px]"
                value={[volume]} // Chuyển đổi volume từ 0-1 sang 0-100
                onValueChange={handleVolumeChange}
                min={0}
                max={100}
            />
        </div>
    )
}
export default VolumeControl
