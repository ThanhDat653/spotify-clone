import { ISong } from './song'
import { IUser } from './user'

export interface IPlaylist {
    id: number
    name: string
    createAt: string
    poster: string
    user: IUser
    songs: ISong[]
}
