import { IUser } from './user'

export interface ISong {
    id: number
    title: string
    duration: number
    artist: IUser[]
    url: string
    thumbnail: string
}

export interface IGenre {
    id: number
    name: string
}
