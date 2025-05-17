'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { login, signup } from '@/service/common'

import { loginSchema, signupSchema } from '@/lib/validations/common'

export type LoginFormState =
    | {
          message?: string
          fields?: {
              username: string
              password: string
          }
      }
    | undefined

export const loginAction = async (
    state: LoginFormState,
    payload: FormData
): Promise<LoginFormState> => {
    const formData = Object.fromEntries(payload.entries())
    const safeParse = loginSchema.safeParse(formData)
    if (!safeParse.success) {
        return {
            fields: safeParse.data,
        }
    }
    try {
        const { data } = safeParse
        const response = await login(data)
        console.log('Login response:', response)
        const { token } = response
        if (!token) {
            return {
                message: 'Login failed. Please check your credentials.',
            }
        }
        const allCookies = await cookies()
        allCookies.set('_session', token, {
            httpOnly: true,
            secure: true,
            path: '/',
            maxAge: 60 * 60 * 24 * 7,
        })
    } catch (error) {
        console.error('Error during login action:', error)
        return {
            message: 'An error occurred during login. Please try again.',
        }
    }
    redirect('/')
}

export type SignUpFormState =
    | {
          message?: string
          fields?: {
              username: string
              email: string
              password: string
              confirmPassword: string
          }
      }
    | undefined

export const signupAction = async (
    state: SignUpFormState,
    payload: FormData
) => {
    const formData = Object.fromEntries(payload.entries())
    const safeParse = signupSchema.safeParse(formData)
    if (!safeParse.success) {
        return {
            fields: safeParse.data,
        }
    }
    const data = await signup(safeParse.data)

    try {
    } catch (error) {
        console.error('Error during signup action:', error)
        return {
            message: 'An error occurred during signup. Please try again.',
        }
    }
    redirect('/login')
}

export const logoutAction = async () => {
    const allCookies = await cookies()
    allCookies.delete('_session')
    redirect('/')
}
