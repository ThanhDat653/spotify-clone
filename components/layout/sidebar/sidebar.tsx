/* eslint-disable @typescript-eslint/no-unused-vars */
import { Home, Search, BookOpen, Heart, Music2, Users } from "lucide-react";

const Sidebar = () => {
   return (
      <div className="w-64 h-screen bg-black text-white flex flex-col p-4">
         {/* Logo hoặc tiêu đề */}
         <div className="text-2xl font-bold mb-6">Spotify</div>

         {/* Navigation Menu */}
         <nav className="flex flex-col gap-4">
            <SidebarItem icon={<Home size={20} />} />
            <SidebarItem icon={<Search size={20} />} />
            <SidebarItem icon={<BookOpen size={20} />} />
         </nav>

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

const SidebarItem = ({ icon }: { icon: React.ReactNode }) => (
   <div className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer text-base">
      {icon}
   </div>
);

const SidebarPlaylist = ({ name }: { name: string }) => (
   <p className="hover:text-white cursor-pointer mb-2 flex items-center gap-2">
      <Music2 size={16} className="text-gray-500" />
      {name}
   </p>
);

export default Sidebar;
