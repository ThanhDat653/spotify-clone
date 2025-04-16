import { useEffect, useRef, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react' // icon loa

const VolumeControl = () => {
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
        <div className="flex items-center gap-2">
            <button onClick={toggleMute} className="cursor-pointer">
                {volume === 0 ? (
                    <VolumeX size={18} className="text-white" />
                ) : (
                    <Volume2 size={18} className="text-white" />
                )}
            </button>
            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(parseFloat(e.target.value))}
                className="h-[6px] w-28 accent-white"
            />
        </div>
    )
}
export default VolumeControl
