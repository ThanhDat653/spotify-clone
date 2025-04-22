import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react' // icon loa

import { cn } from '@/lib/utils'
import { Slider } from '@/components/ui/slider'

const VolumeControl = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const [volume, setVolume] = useState(0.7) // volume hiện tại
    const [prevVolume, setPrevVolume] = useState(0.7) // lưu lại âm lượng trước khi mute

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume
        }
    }, [volume])

    const toggleMute = () => {
        if (volume === 0) {
            // Nếu đang mute → unmute về âm lượng cũ
            setVolume(prevVolume || 0.7)
        } else {
            // Đang có tiếng → mute
            setPrevVolume(volume)
            setVolume(0)
        }
    }

    return (
        <div
            className={cn('group/slider flex items-center gap-2', className)}
            {...props}
        >
            <button onClick={toggleMute} className="cursor-pointer">
                {volume === 0 ? (
                    <VolumeX size={18} className="text-white" />
                ) : (
                    <Volume2 size={18} className="text-white" />
                )}
            </button>
            <Slider
                className="w-[100px]"
                value={[volume * 100]} // Chuyển đổi volume từ 0-1 sang 0-100
                onValueChange={(value) => setVolume(value[0] / 100)} // Chuyển đổi ngược lại
                min={0}
                max={100}
            />
        </div>
    )
}
export default VolumeControl
