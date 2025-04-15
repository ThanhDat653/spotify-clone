/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import StoreProvider from '@/redux/store-provider'

import PlayerBar from '@/components/layout/player-bar/player-bar'
import Sidebar from '@/components/layout/sidebar/sidebar'
import SignUpBar from '@/components/layout/signup-bar/signup-bar'
import TopBar from '@/components/layout/topbar/topbar'

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
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
            <body className={`${inter.variable} antialiased`}>
                <StoreProvider>
                    <div className="mx-3 flex h-screen flex-col gap-3">
                        {/* Fixed height */}
                        <div className="h-16">
                            <TopBar />
                        </div>

                        {/* Main content takes remaining height */}
                        <div className="flex flex-1 gap-2 overflow-hidden">
                            <Sidebar />
                            <div className="flex-1 overflow-y-auto">
                                {children}
                            </div>
                        </div>

                        {/* Fixed height */}
                        <div className="h-20">
                            <PlayerBar />
                        </div>
                    </div>
                </StoreProvider>
            </body>
        </html>
    )
}
