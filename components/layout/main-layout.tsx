import React from 'react'
import { cookies } from 'next/headers'

import ResizableMainLayout from './resizable-main-layout'

async function MainLayout({ children }: { children: React.ReactNode }) {
    const data = await cookies()
    const layout = data.get('react-resizable-panels:layout')

    let defaultLayout
    if (layout) {
        defaultLayout = JSON.parse(layout.value)
    }
    return (
        <ResizableMainLayout defaultLayout={defaultLayout}>
            {children}
        </ResizableMainLayout>
    )
}

export default MainLayout
