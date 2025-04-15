import React from 'react'
import Image from 'next/image'

const CardTitle = () => {
    return (
        <div className="hover:bg-base w-[170px] cursor-pointer rounded p-3">
            <Image
                src={'/thumbnail.jpg'}
                alt="thumnail"
                width={150}
                height={150}
                className="rounded"
            />
            <p className="mt-3 line-clamp-2 w-full text-sm text-gray-500">
                HIEUTHUHAI, Phuc Du, Thịnh Suy and more
            </p>
        </div>
    )
}

export default CardTitle
