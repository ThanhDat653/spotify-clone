import { ISong } from '@/types/song'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IAppState {
    track: ISong | null
    isPlaying: boolean
    isMuted: boolean
    isShuffle: boolean
    repeatMode: 'off' | 'one' | 'all'
    volume: number
    previewTrack: boolean
    previewQueue: boolean
    currentSongInQueue: number
    queue: {
        playlistId?: number
        playlistName?: string
        tracks: ISong[]
    } | null
}

const initialState: IAppState = {
    isShuffle: false,
    track: null,
    isMuted: false,
    isPlaying: false,
    previewTrack: false,
    repeatMode: 'off',
    volume: 100,
    currentSongInQueue: 0,

    previewQueue: false,
    queue: null,
}

const appSlice = createSlice({
    name: '@app',
    initialState,
    reducers: {
        setIsPlaying(state, action) {
            state.isPlaying = action.payload
        },
        setTrack(state, action: PayloadAction<ISong>) {
            const { payload } = action
            if (state.track?.id === payload.id) {
                state.isPlaying = !state.isPlaying
                return
            }
            state.track = payload
            state.isPlaying = true
            state.previewTrack = true
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
        setQueue: (
            state,
            action: PayloadAction<{
                playlistId?: number
                playlistName?: string
                track: ISong[]
            }>
        ) => {
            state.queue = {
                playlistId: action.payload.playlistId,
                playlistName: action.payload.playlistName,
                tracks: action.payload.track,
            }
        },
        setIsShuffle: (state, action: PayloadAction<boolean>) => {
            const { payload } = action
            state.isShuffle = payload
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
    setQueue,
    setIsShuffle,
    setTrack,
} = appSlice.actions
export const appReducer = appSlice.reducer
