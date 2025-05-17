import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
    clientPrefix: 'NEXT_PUBLIC_',
    client: {
        NEXT_PUBLIC_SPOTIFY_BACKEND_URL: z.string().min(1),
        NEXT_PUBLIC_MEDIA_URL: z.string().min(1),
    },
    runtimeEnv: {
        NEXT_PUBLIC_SPOTIFY_BACKEND_URL: process.env.NEXT_PUBLIC_SPOTIFY_BACKEND_URL,
        NEXT_PUBLIC_MEDIA_URL: process.env.NEXT_PUBLIC_MEDIA_URL,
    },
})
