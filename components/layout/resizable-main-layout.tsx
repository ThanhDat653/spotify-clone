'use client'

import React from 'react'

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '../ui/resizable'
import { ScrollArea } from '../ui/scroll-area'
import PlayerBar from './player-bar/player-bar'
import Sidebar from './sidebar/sidebar'
import TopBar from './topbar/topbar'
import TrackPreview from './track-preview'

interface IResizableMainLayoutProps {
    children: React.ReactNode
    defaultLayout?: number[]
    isCollapsible?: boolean
}

function ResizableMainLayout({
    children,
    defaultLayout = [15, 70, 15],
}: IResizableMainLayoutProps) {
    const onLayout = (sizes: number[]) => {
        document.cookie = `react-resizable-panels:layout=${JSON.stringify(sizes)}`
    }
    return (
        <div className="mx-2 flex h-screen flex-col gap-3">
            {/* Fixed height */}
            <div className="h-16">
                <TopBar />
            </div>

            {/* Main content takes remaining height */}
            <ResizablePanelGroup onLayout={onLayout} direction="horizontal">
                <div className="flex flex-1 gap-1 overflow-hidden">
                    <Sidebar minSize={15} defaultSize={defaultLayout[0]} />
                    <ResizableHandle />
                    <ResizablePanel
                        defaultSize={defaultLayout[1]}
                        minSize={30}
                        className="h-full flex-1"
                    >
                        <ScrollArea className="h-full">{children}</ScrollArea>
                    </ResizablePanel>

                    <ResizableHandle />

                    <TrackPreview
                        defaultValue={defaultLayout[2]}
                        maxSize={22.5}
                        minSize={15}
                    />
                </div>
            </ResizablePanelGroup>

            {/* Fixed height */}
            <div className="h-20">
                <PlayerBar />
            </div>
        </div>
    )
}

export default ResizableMainLayout
