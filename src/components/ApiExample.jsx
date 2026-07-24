import { useState, useEffect } from "react";

const ApiExample = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(0);

  // Fetch on mount, and again whenever `reload` changes.
  useEffect(() => {
    let ignore = false;

    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        if (!ignore) {
          setUrl(data.message);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          setError(err.message);
          setLoading(false);
        }
      });

    // cleanup: ignore a stale response if it arrives late
    return () => {
      ignore = true;
    };
  }, [reload]);

  const refetch = () => {
    setLoading(true);
    setError(null);
    setReload((n) => n + 1);
  };

  return (
    <div className="crayon mx-auto flex w-full max-w-sm flex-col items-center gap-5 rounded-3xl bg-white p-8">
      <span className="crayon rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-ink-900">
        🐶 useEffect + fetch
      </span>

      <div className="crayon flex h-60 w-full items-center justify-center overflow-hidden rounded-2xl bg-cream">
        {loading ? (
          <div className="flex flex-col items-center gap-3 text-ink-500">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-line/20 border-t-brand-500" />
            <p className="text-sm font-bold">Fetching a good boy…</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center gap-2 px-4 text-center text-ink-500">
            <span className="text-3xl" aria-hidden="true">
              😿
            </span>
            <p className="text-sm font-bold">Couldn&apos;t fetch: {error}</p>
          </div>
        ) : (
          <img
            src={url}
            alt="A random dog"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      <button
        onClick={refetch}
        disabled={loading}
        className="crayon crayon-press rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white disabled:opacity-60"
      >
        {loading ? "Loading…" : "New dog →"}
      </button>

      <p className="text-center text-sm text-ink-500">
        The effect runs on mount — and re-runs each time you fetch a new pup.
      </p>
    </div>
  );
};

export default ApiExample;
