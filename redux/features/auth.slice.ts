import { IPlaylist } from '@/types/playlist'
import { AuthMeResponse, IRole } from '@/types/user'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { get } from '@/lib/api'

interface IAuthState {
    user: {
        id: number
        username: string
        avatar: string
        role: IRole
        fullname: string
        playlists: IPlaylist[]
    } | null
    token: string | null
    isLoading: boolean
    isAuthenticated: boolean
}
const initialState: IAuthState = {
    user: null,
    token: null,
    isLoading: true,
    isAuthenticated: false,
}
export const getCurrentUser = createAsyncThunk(
    '@auth/getCurrentUser',
    async (_, { rejectWithValue }) => {
        const data = await get<AuthMeResponse>('/api/auth/me/')
        if (!data.id) {
            return rejectWithValue('Failed to fetch user data')
        }
        return data
    }
)

const authSlice = createSlice({
    name: '@auth',
    initialState,
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        },
        clearAuth(state) {
            state.user = null
            state.token = null
            state.isAuthenticated = false
            state.isLoading = false
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload
            state.isAuthenticated = true
        })
        builder.addCase(getCurrentUser.rejected, (state) => {
            state.user = null
            state.isAuthenticated = false
            state.isLoading = false
        })
    },
})

export const authReducer = authSlice.reducer
export const { setUser, setToken, clearAuth } = authSlice.actions
