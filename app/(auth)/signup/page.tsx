import Link from 'next/link'

import { Icons } from '@/components/icons'
import SignUpForm from '@/components/sign-up-form'

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="pt-8 pb-6">
                <Link href={'/'}>
                    <Icons.logo className="h-12 w-12 text-white" />
                </Link>
            </div>
            <div className="flex w-[324px] flex-col gap-6">
                <h1 className="text-center text-5xl font-bold text-white">
                    Sign upw to start listening
                </h1>
                <SignUpForm />
                <div className="border-t border-[#818181] pt-6 text-center text-sm">
                    Already have an account?
                    <Link
                        href={'/login'}
                        className="hover:text-primary ml-1 text-white underline"
                    >
                        Sign up for Spotify
                    </Link>
                </div>
            </div>
        </div>
    )
}
