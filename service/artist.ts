import ENDPOINTS from '@/constants/endpoints'
import { IArtist, IUser } from '@/types/user'

import { getPublic } from '@/lib/api'

export const getArtistById = async (artistId: string) => {
    return getPublic<IArtist>(ENDPOINTS.ARTISTS.GET_ONE(artistId))
}
