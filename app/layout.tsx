/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import localFont from 'next/font/local'

import './globals.css'

import StoreProvider from '@/redux/store-provider'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { ScrollArea } from '@/components/ui/scroll-area'
import MainLayout from '@/components/layout/main-layout'
import PlayerBar from '@/components/layout/player-bar/player-bar'
import Sidebar from '@/components/layout/sidebar/sidebar'
import SignUpBar from '@/components/layout/signup-bar/signup-bar'
import TopBar from '@/components/layout/topbar/topbar'
import TrackPreview from '@/components/layout/track-preview'

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
                <StoreProvider>
                    <MainLayout>{children}</MainLayout>
                </StoreProvider>
            </body>
        </html>
    )
}
