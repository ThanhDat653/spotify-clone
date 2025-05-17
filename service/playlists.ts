import ENDPOINTS from '@/constants/endpoints'
import { IPlaylist } from '@/types/playlist'

import { getPublic } from '@/lib/api'

export const getPlaylistById = async (playlistId: string) => {
    return getPublic<IPlaylist>(ENDPOINTS.PLAYLISTS.GET_ONE(playlistId))
}
