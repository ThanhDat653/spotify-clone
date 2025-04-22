'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'

import { cn } from '@/lib/utils'

function OptionToggle({
    className,
    ...props
}: React.ComponentProps<typeof TogglePrimitive.Root>) {
    return (
        <TogglePrimitive.Root
            data-slot="option-toggle"
            className={cn(
                'text-subdued relative flex h-7 cursor-pointer flex-col items-center gap-1 hover:text-white [&_svg]:size-[17px]',
                'data-[state=on]:text-primary data-[state=on]:after:bg-primary',
                'after:absolute after:bottom-0 after:block after:size-1 after:-translate-y-1/2 after:rounded-full',
                className
            )}
            {...props}
        />
    )
}

export { OptionToggle }
