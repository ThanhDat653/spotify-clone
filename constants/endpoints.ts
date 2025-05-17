const ENDPOINTS = {
    ROLES: {
        GET_ALL: '/api/roles',
        GET_ONE: (id: string) => `/api/roles/${id}/`,
        CREATE: '/api/roles',
        UPDATE: (id: string) => `/api/roles/${id}/`,
        DELETE: (id: string) => `/api/roles/${id}/`,
    },
    USERS: {
        GET_ALL: '/api/users',
        GET_ONE: (id: string) => `/api/users/${id}/`,
        CREATE: '/api/users',
        UPDATE: (id: string) => `/api/users/${id}/`,
    },
    AUTH: {
        LOGIN: '/api/auth/login/',
        LOGOUT: '/api/auth/logout/',
        REGISTER: '/api/auth/register/',
    },
    SONGS: {
        GET_ALL: '/api/songs',
        GET_ONE: (id: string) => `/api/songs/${id}/`,
        CREATE: '/api/songs',
        UPDATE: (id: string) => `/api/songs/${id}/`,
    },
    ALBUMS: {
        GET_ALL: '/api/albums',
        GET_ONE: (id: string) => `/api/albums/${id}/`,
        CREATE: '/api/albums',
        UPDATE: (id: string) => `/api/albums/${id}/`,
    },
    PLAYLISTS: {
        GET_ALL: '/api/playlists/',
        GET_ONE: (id: string) => `/api/playlists/${id}/`,
        CREATE: '/api/playlists/',
        UPDATE: (id: string) => `/api/playlists/${id}/`,
    },
    ARTISTS: {
        GET_ALL: '/api/artists/',
        GET_ONE: (id: string) => `/api/artists/${id}/`,
        CREATE: '/api/artists/',
        UPDATE: (id: string) => `/api/artists/${id}/`,
    },
    LANDING_PAGE: {
        GET_PLAYLIST: '/api/landing-page/',
    },
}

export default ENDPOINTS
