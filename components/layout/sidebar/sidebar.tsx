/* eslint-disable @typescript-eslint/no-unused-vars */
import { Home, Search, BookOpen, Heart, Music2, Users } from "lucide-react";

const Sidebar = () => {
   return (
      <div className="w-80 h-full bg-base rounded-md text-white flex flex-col px-3 py-4">
         {/* Logo hoặc tiêu đề */}
         <div className="text-sm font-bold mb-6 ml-2">Your Library</div>
         {/* Navigation Menu */}
         <div className="flex flex-col gap-4 mb-4">
            <FeatSection
               buttonLabel="Create playlist"
               description="It's easy, we'll help you"
               title="Create your first playlist"
               key={"create-playlist"}
            />
            <FeatSection
               buttonLabel="Browse podcasts"
               description="We'll keep you updated on new episodes"
               title="Let's find some podcasts to follow"
               key={"browse-podcasts"}
            />
         </div>
         {/* Divider */}
         <hr className="my-4 border-gray-700" />
         {/* Liked Songs */}
         <div className="flex items-center gap-2 text-purple-400 hover:text-purple-300 cursor-pointer mb-4">
            <Heart size={20} />
            <span>Liked Songs</span>
         </div>
         {/* Playlist */}
         <div className="text-sm text-gray-400 overflow-y-auto flex-1">
            <SidebarPlaylist name="Chill Mix" />
            <SidebarPlaylist name="Lo-fi Coding" />
            <SidebarPlaylist name="Top 100 VN" />
            <SidebarPlaylist name="Workout Vibes" />
         </div>
         {/* Friends Avatar Placeholder (nếu cần) */}
         <hr className="my-4 border-gray-700" />
         <div className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer">
            <Users size={18} />
            <span>Friends</span>
         </div>
      </div>
   );
};

const SidebarItem = ({
   icon,
   label,
}: {
   icon: React.ReactNode;
   label: string;
}) => (
   <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer text-base">
      {icon}
      <span>{label}</span>
   </div>
);

const SidebarPlaylist = ({ name }: { name: string }) => (
   <p className="hover:text-white cursor-pointer mb-2 flex items-center gap-2">
      <Music2 size={16} className="text-gray-500" />
      {name}
   </p>
);

const FeatSection = ({
   title,
   description,
   buttonLabel,
}: {
   title: string;
   description: string;
   buttonLabel: string;
}) => (
   <section className="bg-elevated-base text-white py-4 px-5 rounded-lg flex flex-col gap-2">
      <h5 className="text-sm font-bold">{title}</h5>
      <p className="text-[13px] font-medium">{description}</p>

      <button className="bg-white text-base font-bold rounded-full py-[6px] mt-3 px-5 text-[13px] w-fit hover:scale-105 hover:cursor-pointer">
         {buttonLabel}
      </button>
   </section>
);

export default Sidebar;
