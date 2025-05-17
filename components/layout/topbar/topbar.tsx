'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logoutAction } from '@/actions/common'
import { clearAuth } from '@/redux/features/auth.slice'
import { Bell, ChevronLeft, ChevronRight, Search, Users } from 'lucide-react'

import { useRedux } from '@/hooks/use-redux'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'

export default function TopBar() {
    const { appSelector, dispatch } = useRedux()
    const { isAuthenticated, user } = appSelector((state) => state.auth)
    const router = useRouter()

    return (
        <header className="flex h-fit items-center justify-between bg-black pt-3">
            {/* Left Section */}
            <div className="flex items-center gap-2">
                {/* Back / Forward: chỉ hiện trên md trở lên */}
                <div className="hidden items-center gap-1 md:flex">
                    <button
                        className="p-2 hover:cursor-pointer"
                        onClick={() => router.back()}
                    >
                        <ChevronLeft size={20} />
                    </button>
                    <button
                        className="p-2 hover:cursor-pointer"
                        onClick={() => router.forward()}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                {/* Home Icon */}
                <Link
                    href={'/'}
                    className="flex size-9 items-center justify-center rounded-full bg-neutral-800 hover:bg-neutral-700"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="none"
                        className="mb-[3px] size-5"
                    >
                        <path d="M3 9.5L12 3l9 6.5V21a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1V9.5z" />
                    </svg>
                </Link>

                {/* Search Box */}
                <div className="ml-2 flex w-[200px] items-center rounded-full bg-neutral-800 px-3 py-2 md:ml-4 md:w-[300px]">
                    <Search className="h-4 w-4 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="What do you want to play?"
                        className="ml-2 w-full bg-transparent text-sm text-white placeholder:text-neutral-400 focus:outline-none"
                    />
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3">
                {isAuthenticated ? (
                    <>
                        <button className="hidden h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-700 md:flex">
                            <Bell size={20} className="text-white" />
                        </button>
                        <button className="hidden h-8 w-8 items-center justify-center rounded-full hover:bg-neutral-700 md:flex">
                            <Users size={20} className="text-white" />
                        </button>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Avatar className="size-8">
                                    <AvatarImage
                                        className="rounded-full bg-white object-contain"
                                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${user?.avatar}`}
                                    />
                                    <AvatarFallback>
                                        {user?.username
                                            .split('')[0]
                                            .toUpperCase()}
                                    </AvatarFallback>
                                </Avatar>
                            </PopoverTrigger>
                            <PopoverContent className="w-56">
                                <div className="flex flex-col gap-2">
                                    <Link
                                        href={`/profile/`}
                                        className="text-md"
                                    >
                                        Profile
                                    </Link>
                                    <Button
                                        onClick={() => {
                                            logoutAction()
                                            dispatch(clearAuth())
                                        }}
                                        variant={null}
                                        size={null}
                                    >
                                        Logout
                                    </Button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </>
                ) : (
                    <>
                        <Button
                            variant={null}
                            size={null}
                            className="text-subdued text-sm"
                            asChild
                        >
                            <Link href="/signup">Sign up</Link>
                        </Button>
                        <Button
                            className="rounded-full bg-white text-black"
                            asChild
                        >
                            <Link href="/login">Login</Link>
                        </Button>
                    </>
                )}
            </div>
        </header>
    )
}
