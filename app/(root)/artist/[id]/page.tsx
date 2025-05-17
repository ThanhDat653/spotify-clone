import React from 'react'
import ArtistDetail from '@/pages/artist-detail'
import { getArtistById } from '@/service/artist'
import { IPageProps } from '@/types/common'

async function Page({ params }: IPageProps<{ id: string }>) {
    const { id } = await params
    const data = await getArtistById(id)
    return <ArtistDetail data={data} />
}

export default Page
