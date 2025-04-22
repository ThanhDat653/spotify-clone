import { createSlice } from '@reduxjs/toolkit'

interface IAppState {
    track: {
        id: string
        name: string
        artists: string[]
        image: string
        duration: number
        url: string
    } | null
    isPlaying: boolean
    previewTrack: boolean
    previewQueue: boolean
}

const initialState: IAppState = {
    track: {
        id: '1',
        name: 'Như Cách Anh Đã Từng Thôi',
        artists: ['HURRYKNG'],
        image: '/nadtt-canva.jpg',
        duration: 0,
        url: '/nadtt.mp3',
    },
    isPlaying: false,
    previewTrack: false,
    previewQueue: false,
}

const appSlice = createSlice({
    name: '@app',
    initialState,
    reducers: {
        setIsPlaying(state, action) {
            state.isPlaying = action.payload
        },
        setPreviewTrack(state, action) {
            state.previewTrack = action.payload
            state.previewQueue = !action.payload
        },
        setPreviewQueue(state, action) {
            const { payload } = action
            if (payload) {
                state.previewTrack = false
            }

            state.previewQueue = action.payload
        },
    },
})

export const { setIsPlaying, setPreviewTrack, setPreviewQueue } =
    appSlice.actions
export const appReducer = appSlice.reducer
