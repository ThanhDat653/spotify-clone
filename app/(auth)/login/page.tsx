import Link from 'next/link'

import { Icons } from '@/components/icons'
import LoginForm from '@/components/login-form'

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="pt-8 pb-6">
                <Link href={'/'}>
                    <Icons.logo className="h-12 w-12 text-white" />
                </Link>
            </div>
            <div className="flex w-[364px] flex-col gap-6">
                <h1 className="text-5xl font-bold text-white">
                    Login to Spotify
                </h1>
                <LoginForm />

                <div className="border-t border-[#818181] pt-6 text-center text-sm">
                    Don&apos;t have an account?
                    <Link
                        href={'/signup'}
                        className="hover:text-primary ml-1 text-white underline"
                    >
                        Sign up for Spotify
                    </Link>
                </div>
            </div>
        </div>
    )
}
