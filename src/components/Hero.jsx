import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[480px] w-full overflow-hidden rounded-b-3xl">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
            Minimal, modern, social for gamers
          </div>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Your gaming circle, beautifully simple
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-700 sm:text-lg">
            Share what you play, follow friends, and build hype. No store. No clutter. Just vibes.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#create" className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">Create Post</a>
            <a href="#feed" className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:border-gray-400">Browse Feed</a>
          </div>
        </div>
      </div>

      {/* gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white" />
    </section>
  );
}
