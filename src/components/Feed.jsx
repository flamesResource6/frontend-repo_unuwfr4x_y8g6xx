import { useEffect, useState } from 'react';

export default function Feed() {
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await fetch(`${backend}/api/feed`);
      const data = await res.json();
      setItems(Array.isArray(data.items) ? data.items : []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
    const handler = () => load();
    window.addEventListener('refresh-feed', handler);
    return () => window.removeEventListener('refresh-feed', handler);
  }, []);

  return (
    <section id="feed" className="mx-auto mb-16 mt-6 max-w-2xl space-y-4 px-4">
      {loading && <div className="text-center text-gray-500">Loading…</div>}
      {!loading && items.length === 0 && (
        <div className="rounded-2xl border border-dashed border-gray-200 bg-white p-8 text-center text-gray-600">
          No posts yet. Be the first to share.
        </div>
      )}
      {items.map((item) => (
        <article key={item._id} className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
            <div>
              <div className="text-sm font-semibold text-gray-900">{item.author_handle || 'anon'}</div>
              <div className="text-xs text-gray-500">{new Date(item.created_at || Date.now()).toLocaleString()}</div>
            </div>
          </div>
          <p className="text-gray-800">{item.text}</p>
          {item.image_url && (
            <img src={item.image_url} alt="" className="mt-3 w-full rounded-xl" />
          )}
        </article>
      ))}
    </section>
  );
}
