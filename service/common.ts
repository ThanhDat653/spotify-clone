import ENDPOINTS from '@/constants/endpoints'
import { LoginRespond } from '@/types/common'

import { postPublic } from '@/lib/api'

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
        body: {
            ...payload,
            role: 2,
        },
    })
}
