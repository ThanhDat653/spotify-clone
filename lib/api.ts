'use server'

import { cookies } from 'next/headers'
import { notFound } from 'next/navigation'

import { env } from '@/env.mjs'

const ContentType = {
    json: 'application/json',
    stream: 'text/event-stream',
    audio: 'audio/mpeg',
    form: 'application/x-www-form-urlencoded; charset=UTF-8',
    download: 'application/octet-stream',
    upload: 'multipart/form-data',
} as const

const defaultHeaders: HeadersInit = {
    'Content-Type': ContentType.json,
}

const baseOptions: RequestInit = {
    method: 'GET',
    mode: 'cors',
    headers: defaultHeaders,
    redirect: 'follow',
}

type FetchOptionType = Omit<RequestInit, 'body'> & {
    params?: Record<string, any>
    body?: BodyInit | Record<string, any>
}

type IOtherOptions = {
    isPublicApi?: boolean
}

const TIME_OUT = 100000

const baseFetch = async <T>(
    url: string,
    fetchOptions: FetchOptionType = {},
    { isPublicApi = false }: IOtherOptions = {}
): Promise<T> => {
    const urlPrefix = env.NEXT_PUBLIC_SPOTIFY_BACKEND_URL
    const fullUrl = `${urlPrefix}${url.startsWith('/') ? url : `/${url}`}`

    const {
        method = 'GET',
        params,
        body,
        headers = {},
        ...restOptions
    } = fetchOptions

    const finalHeaders = new Headers({ ...defaultHeaders, ...headers })

    let urlWithParams = fullUrl
    if (method === 'GET' && params) {
        const searchParams = new URLSearchParams()
        for (const [key, value] of Object.entries(params)) {
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value))
            }
        }
        const queryString = searchParams.toString()
        urlWithParams += urlWithParams.includes('?')
            ? `&${queryString}`
            : `?${queryString}`
    }

    if (!isPublicApi) {
        const allCookies = await cookies()
        const token = allCookies.get('_session')?.value
        if (token) {
            finalHeaders.set('Authorization', `Bearer ${token}`)
        }
    }

    const finalOptions: RequestInit = {
        ...baseOptions,
        method,
        headers: finalHeaders,
        ...restOptions,
    }

    if (body && method !== 'GET') {
        finalOptions.body =
            typeof body === 'string' || body instanceof FormData
                ? body
                : JSON.stringify(body)
    }
    console.log('Request URL:', urlWithParams)

    return Promise.race([
        new Promise<never>((_, reject) =>
            setTimeout(() => reject(new Error('request timeout')), TIME_OUT)
        ),
        new Promise<T>(async (resolve, reject) => {
            try {
                const response = await fetch(urlWithParams, {
                    cache: 'no-cache',
                    ...finalOptions,
                })

                if (response.status === 404) {
                    notFound()
                }

                if (response.status === 204) {
                    resolve({ result: 'success' } as unknown as T)
                    return
                }

                const contentType = response.headers.get('Content-Type') || ''
                const data = contentType.includes('application/json')
                    ? await response.json()
                    : await response.text()

                resolve(data as T)
            } catch (error) {
                reject(error)
            }
        }),
    ])
}

const request = async <T>(
    url: string,
    fetchOptions: FetchOptionType = {},
    otherOptions?: IOtherOptions
) => baseFetch<T>(url, fetchOptions, otherOptions)

export const get = async <T>(
    url: string,
    options?: FetchOptionType,
    others?: IOtherOptions
) => request<T>(url, { method: 'GET', ...options }, others)

export const getPublic = async <T>(
    url: string,
    options?: FetchOptionType,
    others?: IOtherOptions
) => get<T>(url, options, { isPublicApi: true, ...others })

export const post = async <T>(
    url: string,
    options?: FetchOptionType,
    others?: IOtherOptions
) => request<T>(url, { method: 'POST', ...options }, others)

export const postPublic = async <T>(
    url: string,
    options?: FetchOptionType,
    others?: IOtherOptions
) => post<T>(url, options, { isPublicApi: true, ...others })

export const put = async <T>(
    url: string,
    options?: FetchOptionType,
    others?: IOtherOptions
) => request<T>(url, { method: 'PUT', ...options }, others)

export const patch = async <T>(
    url: string,
    options?: FetchOptionType,
    others?: IOtherOptions
) => request<T>(url, { method: 'PATCH', ...options }, others)

export const del = async <T>(
    url: string,
    options?: FetchOptionType,
    others?: IOtherOptions
) => request<T>(url, { method: 'DELETE', ...options }, others)
