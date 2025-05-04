/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import StoreProvider from '@/redux/store-provider'

const spotifyMix = localFont({
    src: '/font/SpotifyMix-Regular.woff2',
})

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'Clone by ntdat',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${spotifyMix.className} antialiased`}>
                <StoreProvider>{children}</StoreProvider>
            </body>
        </html>
    )
}
