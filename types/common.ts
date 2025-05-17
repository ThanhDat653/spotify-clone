export interface IPageProps<T> {
    params: Promise<T>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export type LoginRespond = {
    token: string
    user: {
        id: string
        name: string
        avatar: string
        role: string
    }
}

export interface ILandingResponse {
    playlists_by_genre: PlaylistsByGenre[]
    top_trending_songs: TopTrendingSong[]
    random_albums: RandomAlbum[]
}

interface PlaylistsByGenre {
    genre: string
    songs: IGenreSong[]
}

export interface IGenreSong {
    id: number
    title: string
    duration: number
    url: string
    thumbnail: string
    play_count: number
    genre: Genre[]
    albums: Album[]
    artist: Artist[]
}

interface Genre {
    id: number
    name: string
}

interface Album {
    id: number
    title: string
}

interface Artist {
    id: number
    username: string
    fullname?: string
}

interface TopTrendingSong {
    id: number
    title: string
    duration: number
    url: string
    thumbnail: string
    play_count: number
    genre: Genre2[]
    albums: Album2[]
    artist: Artist2[]
}

interface Genre2 {
    id: number
    name: string
}

interface Album2 {
    id: number
    title: string
}

interface Artist2 {
    id: number
    username: string
    fullname?: string
}

interface RandomAlbum {
    id: number
    title: string
    releaseDate: string
    poster: string
    creator: Creator
    songs: ISongAlbum[]
}

interface Creator {
    id: number
    username: string
    avatar: string
    role: Role
    fullname?: string
}

interface Role {
    id: number
    name: string
}

export interface ISongAlbum {
    id: number
    title: string
    duration: number
    artist: Artist3[]
    url: string
    thumbnail: string
}

interface Artist3 {
    id: number
    username: string
    fullname?: string
}
