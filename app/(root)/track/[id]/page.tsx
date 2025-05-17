import React from 'react'
import ENDPOINTS from '@/constants/endpoints'
import TrackDetail from '@/pages/track-detail'
import { IPageProps } from '@/types/common'
import { ISong } from '@/types/song'

import { getPublic } from '@/lib/api'

async function Page({ params }: IPageProps<{ id: string }>) {
    const { id } = await params
    const data = await getPublic<ISong>(ENDPOINTS.SONGS.GET_ONE(id))
    return <TrackDetail data={data} />
}

export default Page
