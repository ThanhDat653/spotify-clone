import ENDPOINTS from '@/constants/endpoints'
import { SongsTable } from '@/pages/admin/song-table'
import { ISong } from '@/types/song'

import { get } from '@/lib/api'

export default async function Page() {
    const data = await get<ISong[]>(ENDPOINTS.SONGS.GET_ALL)

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Songs</h1>
            <SongsTable data={data} />
        </div>
    )
}
