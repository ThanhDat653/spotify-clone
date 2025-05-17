import { IAlbum } from './album'
import { IPlaylist } from './playlist'
import { ISong } from './song'

export interface IUser {
    id: number
    fullname: string
    avatar: string
    email: string
    createAt: string
    username: string
    role: IRole
}

export interface IRole {
    id: number
    name: string
}

export interface IArtist extends IUser {
    songs: ISong[]
    albums: IAlbum[]
}

export interface AuthMeResponse {
    id: number
    playlists: IPlaylist[]
    username: string
    email: string
    avatar: string
    role: IRole
    fullname: string
}
