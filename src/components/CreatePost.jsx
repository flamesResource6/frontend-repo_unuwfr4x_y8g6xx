import { useState } from 'react';

export default function CreatePost() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const submit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`${backend}/api/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ author_handle: 'you', text }),
      });
      if (!res.ok) throw new Error('Failed');
      setText('');
      window.dispatchEvent(new CustomEvent('refresh-feed'));
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="create" className="mx-auto my-8 max-w-xl rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      <form onSubmit={submit} className="flex flex-col gap-3">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Share a quick update about your gaming session…"
          className="min-h-[100px] w-full resize-none rounded-xl border border-gray-200 p-3 outline-none focus:border-gray-300"
          maxLength={280}
        />
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">{text.length}/280</span>
          <button
            disabled={loading || !text.trim()}
            className="rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            {loading ? 'Posting…' : 'Post'}
          </button>
        </div>
      </form>
    </section>
  );
}
