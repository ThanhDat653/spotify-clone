/* eslint-disable @typescript-eslint/no-unused-vars */
import { BookOpen, Heart, Home, Music2, Search, Users } from 'lucide-react'

const Sidebar = () => {
    return (
        <div className="bg-base flex h-full w-80 flex-col rounded-md px-3 py-4 text-white">
            {/* Logo hoặc tiêu đề */}
            <div className="mb-6 ml-2 text-sm font-bold">Your Library</div>
            {/* Navigation Menu */}
            <div className="mb-4 flex flex-col gap-4">
                <FeatSection
                    buttonLabel="Create playlist"
                    description="It's easy, we'll help you"
                    title="Create your first playlist"
                    key={'create-playlist'}
                />
                <FeatSection
                    buttonLabel="Browse podcasts"
                    description="We'll keep you updated on new episodes"
                    title="Let's find some podcasts to follow"
                    key={'browse-podcasts'}
                />
            </div>
        </div>
    )
}

const SidebarItem = ({
    icon,
    label,
}: {
    icon: React.ReactNode
    label: string
}) => (
    <div className="flex cursor-pointer items-center gap-3 text-gray-300 hover:text-white">
        {icon}
        <span>{label}</span>
    </div>
)

const SidebarPlaylist = ({ name }: { name: string }) => (
    <p className="mb-2 flex cursor-pointer items-center gap-2 hover:text-white">
        <Music2 size={16} className="text-gray-500" />
        {name}
    </p>
)

const FeatSection = ({
    title,
    description,
    buttonLabel,
}: {
    title: string
    description: string
    buttonLabel: string
}) => (
    <section className="bg-elevated-base flex flex-col gap-2 rounded-lg px-5 py-4 text-white">
        <h5 className="text-sm font-bold">{title}</h5>
        <p className="text-[13px] font-medium">{description}</p>

        <button className="mt-3 w-fit rounded-full bg-white px-5 py-[6px] text-base text-[13px] font-bold hover:scale-105 hover:cursor-pointer">
            {buttonLabel}
        </button>
    </section>
)

export default Sidebar
