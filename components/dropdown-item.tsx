import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import {
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
} from '@/components/ui/dropdown-menu'

import { Icons } from './icons'

function DropdownMenuAddToPlaylist() {
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <div className="flex items-center gap-2">
                    <Icons.plus className="size-4" />
                    <span>Add to playlist</span>
                </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
                <Command className="h-[220px] bg-[#282828]">
                    <CommandInput placeholder="Type a command or search..." />
                    <CommandList>
                        <div className="cursor-pointer p-3 pr-4 hover:bg-[hsla(0,0%,100%,.1)]">
                            <div className="flex items-center gap-2 text-[hsla(0,0%,100%,.9)]">
                                <Icons.plus className="size-4" />
                                <span>New playlist</span>
                            </div>
                        </div>
                        <CommandEmpty></CommandEmpty>

                        <CommandSeparator />
                        <DropdownMenuItem asChild>
                            <CommandItem>Slatt On</CommandItem>
                        </DropdownMenuItem>

                        <CommandItem>Favorite</CommandItem>
                    </CommandList>
                </Command>
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    )
}

function DropdownMenuToggleLikeTrack() {
    return (
        <DropdownMenuItem>
            <div className="flex items-center gap-2">
                <Icons.circleCheck className="size-4" />
                <span className="text-[hsla(0,0%,100%,.9)]">
                    Remove from your Liked Songs
                </span>
            </div>
        </DropdownMenuItem>
    )
}

function DropdownMenuAddToQueue() {
    return (
        <DropdownMenuItem>
            <div className="flex items-center gap-2">
                <Icons.addToQueue className="size-4" />
                <span className="text-[hsla(0,0%,100%,.9)]">Add to queue</span>
            </div>
        </DropdownMenuItem>
    )
}

function DropdownMenuGoToTrackRadio() {
    return (
        <DropdownMenuItem>
            <div className="flex items-center gap-2">
                <Icons.signal className="size-4" />
                <span className="text-[hsla(0,0%,100%,.9)]">
                    Go to song radio
                </span>
            </div>
        </DropdownMenuItem>
    )
}

function DropdownMenuGoToArtists() {
    return (
        <DropdownMenuItem>
            <div className="flex items-center gap-2">
                <Icons.artist className="size-4" />
                <span className="text-[hsla(0,0%,100%,.9)]">Go to Artist</span>
            </div>
        </DropdownMenuItem>
    )
}

function DropdownMenuGoToAlbum() {
    return (
        <DropdownMenuItem>
            <div className="flex items-center gap-2">
                <Icons.track className="size-4" />
                <span className="text-[hsla(0,0%,100%,.9)]">Go to Album</span>
            </div>
        </DropdownMenuItem>
    )
}

function DropdownMenuViewCredits() {
    return (
        <DropdownMenuItem>
            <div className="flex items-center gap-2">
                <Icons.equalizer className="size-4" />
                <span className="text-[hsla(0,0%,100%,.9)]">View credits</span>
            </div>
        </DropdownMenuItem>
    )
}

function DropdownMenuShareTrack() {
    return (
        <DropdownMenuSub>
            <DropdownMenuSubTrigger>
                <div className="flex items-center gap-2">
                    <Icons.share className="size-4" />
                    <span>Share</span>
                </div>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
                <DropdownMenuItem>
                    <div className="flex items-center gap-2">
                        <Icons.copy className="size-4" />
                        <span className="text-[hsla(0,0%,100%,.9)]">
                            Copy Song Link
                        </span>
                    </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="flex items-center gap-2">
                        <Icons.embed className="size-4" />
                        <span className="text-[hsla(0,0%,100%,.9)]">
                            Embed Track
                        </span>
                    </div>
                </DropdownMenuItem>
            </DropdownMenuSubContent>
        </DropdownMenuSub>
    )
}

export {
    DropdownMenuAddToPlaylist,
    DropdownMenuToggleLikeTrack,
    DropdownMenuAddToQueue,
    DropdownMenuGoToTrackRadio,
    DropdownMenuGoToArtists,
    DropdownMenuGoToAlbum,
    DropdownMenuViewCredits,
    DropdownMenuShareTrack,
}
