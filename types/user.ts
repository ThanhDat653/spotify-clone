import { IAlbum } from './album'
import { ISong } from './song'

export interface IUser {
    id: string
    name: string
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
