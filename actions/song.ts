import { post } from '@/lib/api'

export const addSongToPlaylist = async (songId: string) => {
    const data = await post(`/api/playlist/${songId}/add-song/`)
    return data
}
