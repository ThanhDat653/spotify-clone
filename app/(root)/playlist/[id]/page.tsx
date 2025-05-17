import PlaylistDetail from '@/pages/playlist-detail'
import { getPlaylistById } from '@/service/playlists'
import { IPageProps } from '@/types/common'

async function Page({ params }: IPageProps<{ id: string }>) {
    const { id } = await params
    const data = await getPlaylistById(id)

    return <PlaylistDetail data={data} />
}

export default Page
