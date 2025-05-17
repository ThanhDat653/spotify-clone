import ENDPOINTS from '@/constants/endpoints'
import { LandingResponse, LoginRespond } from '@/types/common'

import { getPublic, postPublic } from '@/lib/api'

export const login = async (payload: {
    username: string
    password: string
}) => {
    return postPublic<LoginRespond>(ENDPOINTS.AUTH.LOGIN, {
        body: payload,
    })
}

export const signup = async (payload: {
    username: string
    email: string
    password: string
}) => {
    return postPublic<LoginRespond>(ENDPOINTS.AUTH.REGISTER, {
        body: payload,
    })
}

export const landing_playlist = async () => {
    return getPublic<LandingResponse>(ENDPOINTS.LANDING_PAGE.GET_PLAYLIST)
}
