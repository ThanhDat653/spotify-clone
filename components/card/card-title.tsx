import React from 'react'
import Image from 'next/image'

import PlayTrackButton from '../button/play-track-button'

const CardTitle = () => {
    return (
        <div className="hover:bg-elevated-base group/top-result relative w-[170px] cursor-pointer rounded p-3 transition-all duration-200">
            <Image
                src={'/thumbnail.jpg'}
                alt="thumnail"
                width={158}
                height={158}
                className="rounded"
            />
            <p className="mt-3 line-clamp-2 w-full text-sm font-normal text-gray-500">
                HIEUTHUHAI, Phuc Du, Thịnh Suy and more
            </p>
            <PlayTrackButton className="absolute right-5 bottom-1/3 translate-y-2 opacity-0 transition-all delay-75 ease-in group-hover/top-result:translate-y-0 group-hover/top-result:opacity-100" />
        </div>
    )
}

export default CardTitle
