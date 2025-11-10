import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function ChatArea({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight
  }, [children])

  return (
    <section ref={ref} className="h-[calc(100vh-56px)] flex-1 overflow-y-auto bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-3xl p-4">
        {children}
      </div>
    </section>
  )
}
