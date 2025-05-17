'use client'

import { useState } from 'react'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

import { DashboardHeader } from './dashboard-header'
import { DashboardSidebar } from './dashboard-sidebar'
import { SongsTable } from './song-table'

export function Dashboard({ children }: { children: React.ReactNode }) {
    const [view, setView] = useState<
        'songs' | 'artists' | 'playlists' | 'analytics'
    >('songs')

    return (
        <div className="min-h-screen bg-[#121212] text-white">
            <SidebarProvider>
                <DashboardSidebar />
                <SidebarInset>
                    <DashboardHeader />
                    <main className="p-6">{children}</main>
                </SidebarInset>
            </SidebarProvider>
        </div>
    )
}
