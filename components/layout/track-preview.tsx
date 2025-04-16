import React from 'react'

import { ResizablePanel } from '../ui/resizable'

function TrackPreview({
    ...props
}: React.ComponentProps<typeof ResizablePanel>) {
    return <ResizablePanel {...props}>Test</ResizablePanel>
}

export default TrackPreview
