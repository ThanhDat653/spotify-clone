import ENDPOINTS from '@/constants/endpoints'
import { IAlbum } from '@/types/album'

import { getPublic } from '@/lib/api'

export const getAlbumById = async (id: string) => {
    return getPublic<IAlbum>(`${ENDPOINTS.ALBUMS.GET_ONE(id)}`)
}
