import React from 'react'
import AlbumDetail from '@/pages/album-detail'
import { getAlbumById } from '@/service/album'
import { IPageProps } from '@/types/common'

async function Page({ params }: IPageProps<{ id: string }>) {
    const { id } = await params
    const data = await getAlbumById(id)
    return <AlbumDetail data={data} />
}

export default Page
