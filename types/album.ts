import { ISong } from './song'
import { IUser } from './user'

export interface IAlbum {
    id: number
    title: string
    poster: string
    creator: IUser
    songs: ISong[]
}
