import React from 'react'
import ENDPOINTS from '@/constants/endpoints'
import UserTable from '@/pages/admin/user-table'
import { IArtist } from '@/types/user'

import { get } from '@/lib/api'

async function Page() {
    const data = await get<IArtist[]>(ENDPOINTS.ARTISTS.GET_ALL)
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Artists</h1>
            <UserTable data={data} />
        </div>
    )
}

export default Page
