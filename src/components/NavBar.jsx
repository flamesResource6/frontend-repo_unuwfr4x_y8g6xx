import { Menu, Search, Bell } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center gap-4 px-4">
        <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
          <Menu size={18} />
        </button>
        <span className="font-semibold tracking-tight">Pulse</span>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700 sm:flex">
            <Search size={16} className="text-gray-500" />
            <input placeholder="Search" className="w-40 bg-transparent outline-none" />
          </div>
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50">
            <Bell size={18} />
          </button>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </div>
      </div>
    </header>
  );
}
