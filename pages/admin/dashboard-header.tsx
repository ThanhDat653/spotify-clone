import { Bell, Search, User } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { SidebarTrigger } from '@/components/ui/sidebar'

export function DashboardHeader() {
    return (
        <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-[#282828] bg-[#121212] px-6">
            <SidebarTrigger className="text-[#b3b3b3] hover:text-white" />
            <div className="relative max-w-md flex-1">
                <Search className="absolute top-1/2 left-2 h-4 w-4 -translate-y-1/2 text-[#b3b3b3]" />
                <Input
                    placeholder="Search songs, artists, or albums..."
                    className="border-[#282828] bg-[#282828] pl-8 text-white placeholder:text-[#b3b3b3] focus-visible:ring-[#1DB954] focus-visible:ring-offset-0"
                />
            </div>
            <div className="ml-auto flex items-center gap-2">
                <Button
                    variant="ghost"
                    size="icon"
                    className="text-[#b3b3b3] hover:text-white"
                >
                    <Bell className="h-5 w-5" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-[#282828] text-white hover:bg-[#333333]"
                >
                    <User className="h-5 w-5" />
                </Button>
            </div>
        </header>
    )
}
