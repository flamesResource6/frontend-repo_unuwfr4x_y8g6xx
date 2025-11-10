import { motion } from 'framer-motion'
import { Hash, Volume2, UserPlus, Settings, Mic, Headphones } from 'lucide-react'

const channels = [
  { id: 'general', label: 'general' },
  { id: 'clips', label: 'clips' },
  { id: 'lfg', label: 'lfg' },
  { id: 'strategy', label: 'strategy' },
]

export default function ChannelSidebar() {
  return (
    <aside className="hidden h-[calc(100vh-56px)] w-64 flex-col border-r border-gray-100 bg-white/70 backdrop-blur md:flex">
      <div className="px-4 py-3">
        <div className="text-sm font-semibold text-gray-900">Pulse server</div>
        <div className="text-xs text-gray-500">voice · text</div>
      </div>

      <div className="px-2 py-2">
        <div className="mb-1 px-2 text-xs font-semibold uppercase tracking-wide text-gray-500">Text Channels</div>
        <ul className="space-y-1">
          {channels.map((c) => (
            <motion.li key={c.id} whileHover={{ x: 4 }}>
              <button className="flex w-full items-center gap-2 rounded-md px-2 py-1.5 text-left text-gray-700 hover:bg-gray-100">
                <Hash className="h-4 w-4 text-gray-500" />
                <span className="text-sm">{c.label}</span>
              </button>
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="mt-auto border-t border-gray-100 p-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900">you</div>
            <div className="text-xs text-gray-500">online</div>
          </div>
          <button className="rounded-md p-2 hover:bg-gray-100"><Mic className="h-4 w-4" /></button>
          <button className="rounded-md p-2 hover:bg-gray-100"><Headphones className="h-4 w-4" /></button>
          <button className="rounded-md p-2 hover:bg-gray-100"><Settings className="h-4 w-4" /></button>
        </div>
      </div>
    </aside>
  )
}
