import { createSlice, PayloadAction } from '@reduxjs/toolkit'

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
    isMuted: boolean
    repeatMode: 'off' | 'one' | 'all'
    volume: number
    previewTrack: boolean
    previewQueue: boolean
}

const initialState: IAppState = {
    track: {
        id: '1',
        name: 'Exit Sign',
        artists: ['Hieuthuhai', 'Marcus'],
        image: '/nadtt-canva.jpg',
        duration: 0,
        url: 'https://vnso-pt-8-tf-a128-z3.zmdcdn.me/7344b975eefcf8d39c675a8a7a2fe245?authen=exp=1746699419~acl=/7344b975eefcf8d39c675a8a7a2fe245*~hmac=500078ed44f7e27867a4daece13ca84a',
    },
    isMuted: false,
    isPlaying: false,
    previewTrack: false,
    repeatMode: 'off',
    volume: 100,
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
        setIsMuted(state, action) {
            const { payload } = action
            state.isMuted = payload
        },
        setVolume(state, action) {
            const { payload } = action
            if (payload >= 0 && payload <= 100) {
                state.volume = payload
            }
        },
        setRepeatMode(state, action: PayloadAction<IAppState['repeatMode']>) {
            const { payload } = action
            state.repeatMode = payload
        },
    },
})

export const {
    setIsPlaying,
    setVolume,
    setIsMuted,
    setPreviewTrack,
    setPreviewQueue,
    setRepeatMode,
} = appSlice.actions
export const appReducer = appSlice.reducer
