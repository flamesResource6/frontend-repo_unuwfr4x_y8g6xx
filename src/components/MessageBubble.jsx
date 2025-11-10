import { motion } from 'framer-motion'

export default function MessageBubble({ author = 'you', text, time }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="group relative mb-3 flex items-start gap-3">
      <div className="h-9 w-9 flex-shrink-0 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
      <div className="max-w-[80%] rounded-2xl border border-gray-200 bg-white/90 p-3 shadow-sm backdrop-blur">
        <div className="mb-0.5 text-xs font-semibold text-gray-900">{author} <span className="ml-2 font-normal text-gray-500">{time}</span></div>
        <div className="text-sm text-gray-800">{text}</div>
      </div>
      <div className="absolute -left-2 top-2 hidden h-3 w-3 rotate-45 rounded-sm border-l border-t border-gray-200 bg-white/90 shadow-sm group-hover:block" />
    </motion.div>
  )
}
