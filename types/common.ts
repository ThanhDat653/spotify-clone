export interface IPageProps<T> {
    params: Promise<T>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export type LoginRespond = {
    token: string
    user: {
        id: string
        name: string
        avatar: string
        role: string
    }
}
