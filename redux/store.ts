import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from './features/app.slice'
import { authReducer } from './features/auth.slice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            app: appReducer,
            auth: authReducer,
        },
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
