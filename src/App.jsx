import NavBar from './components/NavBar'
import Hero from './components/Hero'
import CreatePost from './components/CreatePost'
import Feed from './components/Feed'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />
      <main>
        <Hero />
        <section className="mx-auto -mt-10 max-w-5xl px-4">
          <CreatePost />
          <Feed />
        </section>
      </main>
      <footer className="border-t border-gray-100 py-8 text-center text-sm text-gray-500">
        Built for vibes. Not affiliated with Valve/Steam.
      </footer>
    </div>
  )
}

export default App
