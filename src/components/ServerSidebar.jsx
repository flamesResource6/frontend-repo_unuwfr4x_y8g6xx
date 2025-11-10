import { motion } from 'framer-motion'
import { Plus, Home, Gamepad2, Users2, Compass } from 'lucide-react'

const iconClasses = 'h-5 w-5'

const servers = [
  { id: 'home', icon: <Home className={iconClasses} />, color: 'from-gray-900 to-gray-700' },
  { id: 'fps', icon: <Gamepad2 className={iconClasses} />, color: 'from-emerald-500 to-emerald-600' },
  { id: 'moba', icon: <Users2 className={iconClasses} />, color: 'from-indigo-500 to-indigo-600' },
  { id: 'discover', icon: <Compass className={iconClasses} />, color: 'from-rose-500 to-orange-500' },
]

export default function ServerSidebar() {
  return (
    <aside className="hidden h-[calc(100vh-56px)] w-[72px] flex-col items-center gap-3 border-r border-gray-100 bg-white/80 px-3 py-3 backdrop-blur md:flex">
      {servers.map((s, i) => (
        <motion.button
          key={s.id}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
          className={`group relative grid aspect-square w-12 place-items-center rounded-2xl bg-gradient-to-br ${s.color} text-white shadow-sm transition-all hover:rounded-xl`}
        >
          {s.icon}
          <span className="pointer-events-none absolute left-14 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-gray-900 px-2 py-1 text-xs text-white shadow-md group-hover:block">{s.id}</span>
        </motion.button>
      ))}
      <motion.button
        whileHover={{ rotate: 90 }}
        className="mt-auto grid aspect-square w-12 place-items-center rounded-2xl border border-dashed border-gray-300 text-gray-600 hover:bg-gray-50"
      >
        <Plus className={iconClasses} />
      </motion.button>
    </aside>
  )
}
