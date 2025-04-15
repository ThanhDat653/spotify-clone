import { createSlice } from '@reduxjs/toolkit';

interface IAppState {
	currentPlayTrack: string | null;
	isPlaying: boolean;
}

const initialState: IAppState = {
	currentPlayTrack: null,
	isPlaying: false,
};

const appSlice = createSlice({
	name: '@app',
	initialState,
	reducers: {
		setCurrentPlayTrack(state, action) {
			state.currentPlayTrack = action.payload;
		},
		setIsPlaying(state, action) {
			state.isPlaying = action.payload;
		},
	},
});

export const { setCurrentPlayTrack, setIsPlaying } = appSlice.actions;
export const appReducer = appSlice.reducer;
