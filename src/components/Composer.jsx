import { useState } from 'react'
import { motion } from 'framer-motion'
import { ImagePlus, Smile, SendHorizonal } from 'lucide-react'

export default function Composer({ onSend }) {
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!value.trim()) return
    setLoading(true)
    try {
      await onSend?.(value)
      setValue('')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={submit} className="sticky bottom-0 mx-auto max-w-3xl border-t border-gray-200 bg-white/90 p-3 backdrop-blur">
      <div className="flex items-end gap-2">
        <button type="button" className="hidden rounded-lg border border-gray-200 p-2 text-gray-600 hover:bg-gray-50 sm:block"><ImagePlus className="h-5 w-5" /></button>
        <div className="relative flex-1">
          <motion.textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Message #general"
            rows={1}
            className="w-full resize-none rounded-2xl border border-gray-200 bg-white/80 p-3 pr-12 text-sm shadow-sm outline-none backdrop-blur placeholder:text-gray-400 focus:border-gray-300"
            whileFocus={{ boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}
          />
          <button type="button" className="absolute right-10 top-1/2 -translate-y-1/2 rounded-lg p-2 text-gray-600 hover:bg-gray-100"><Smile className="h-5 w-5" /></button>
          <button disabled={loading || !value.trim()} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-gray-900 p-2 text-white disabled:opacity-50">
            <SendHorizonal className="h-5 w-5" />
          </button>
        </div>
      </div>
    </form>
  )
}
