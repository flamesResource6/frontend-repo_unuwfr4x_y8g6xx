import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ServerSidebar from './components/ServerSidebar'
import ChannelSidebar from './components/ChannelSidebar'
import ChatArea from './components/ChatArea'
import MessageBubble from './components/MessageBubble'
import Composer from './components/Composer'

function App() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  const load = async () => {
    try {
      const res = await fetch(`${backend}/api/feed`)
      const data = await res.json()
      setItems(Array.isArray(data.items) ? data.items : [])
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
    const handler = () => load()
    window.addEventListener('refresh-feed', handler)
    return () => window.removeEventListener('refresh-feed', handler)
  }, [])

  const onSend = async (text) => {
    const payload = { author_handle: 'you', text }
    const res = await fetch(`${backend}/api/posts`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    if (!res.ok) throw new Error('Failed to send')
    await load()
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main>
        <Hero />

        {/* Discord-like, animated, interactive chat UI */}
        <section className="mx-auto -mt-10 mb-16 max-w-[1400px] rounded-3xl border border-gray-100 bg-white/70 shadow-sm backdrop-blur">
          <div className="flex">
            <ServerSidebar />
            <ChannelSidebar />
            <div className="flex min-w-0 flex-1 flex-col">
              <ChatArea>
                {loading && (
                  <div className="mx-auto my-8 w-full max-w-sm rounded-xl border border-gray-200 bg-white p-4 text-center text-gray-600 shadow-sm">
                    Loading messages…
                  </div>
                )}
                {!loading && items.length === 0 && (
                  <div className="mx-auto my-8 w-full max-w-sm rounded-xl border border-dashed border-gray-200 bg-white p-6 text-center text-gray-600">
                    No messages yet. Say hi to start the vibe.
                  </div>
                )}
                {items.map((m) => (
                  <MessageBubble
                    key={m._id}
                    author={m.author_handle || 'anon'}
                    text={m.text}
                    time={new Date(m.created_at || Date.now()).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  />
                ))}
              </ChatArea>
              <Composer onSend={onSend} />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        Built for vibes. Not affiliated with Valve/Steam.
      </footer>
    </div>
  )
}

export default App
