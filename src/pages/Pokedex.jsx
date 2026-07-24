import { useState, useEffect } from "react";
import { Link } from "react-router";

const PAGE_SIZE = 12;

const artwork = (id) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Pokedex = () => {
  // All the component's state lives in one object.
  const [listState, setListState] = useState({
    pokemons: [],
    loading: true,
    error: null,
    query: "",
    sortBy: "id", // "id" | "name"
    page: 1,
  });

  const { pokemons, loading, error, query, sortBy, page } = listState;

  // Merge a partial change into the state object.
  const update = (changes) => setListState((prev) => ({ ...prev, ...changes }));

  useEffect(() => {
    let ignore = false;

    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((res) => {
        if (!res.ok) throw new Error("Request failed");
        return res.json();
      })
      .then((data) => {
        if (ignore) return;
        const list = data.results.map((p) => {
          const id = Number(p.url.split("/").filter(Boolean).pop());
          return { id, name: p.name, image: artwork(id) };
        });
        update({ pokemons: list, loading: false });
      })
      .catch((err) => {
        if (!ignore) update({ error: err.message, loading: false });
      });

    return () => {
      ignore = true;
    };
  }, []);

  // filter → sort → paginate
  const processed = pokemons
    .filter((p) => p.name.includes(query.trim().toLowerCase()))
    .sort((a, b) =>
      sortBy === "name" ? a.name.localeCompare(b.name) : a.id - b.id,
    );

  const totalPages = Math.max(1, Math.ceil(processed.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = processed.slice(start, start + PAGE_SIZE);

  const handleSearch = (e) => update({ query: e.target.value, page: 1 });

  const changeSort = (value) => update({ sortBy: value, page: 1 });

  const sortBtn = (value) =>
    `rounded-lg px-3 py-1.5 text-sm font-bold transition-colors ${
      sortBy === value ? "bg-brand-500 text-white" : "text-ink-500"
    }`;

  return (
    <section className="py-16 sm:py-20">
      {/* Back to projects */}
      <Link
        to="/projects"
        className="crayon crayon-press inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 font-bold text-ink-900"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="mx-auto mt-8 max-w-2xl text-center">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2.5 text-sm font-bold"
        >
          <span className="text-ink-500">Projects</span>
          <span aria-hidden="true" className="text-brand-400">
            →
          </span>
          <span className="crayon rounded-full bg-blush px-3 py-1 text-ink-900">
            Pokédex
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          The <span className="marker">Pokédex</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          Browse, search, and sort the original 151 — fetched live from the
          PokéAPI with <code className="font-bold text-brand-600">useEffect</code>
          .
        </p>
      </div>

      {/* Controls: search + sort */}
      <div className="mx-auto mt-8 flex max-w-3xl flex-col items-stretch gap-3 sm:flex-row sm:items-center">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="🔍 Search by name…"
          className="w-full flex-1 rounded-xl border-2 border-line bg-white px-4 py-2.5 font-medium text-ink-900 placeholder:text-ink-500/60 outline-none transition focus:-translate-y-0.5 focus:shadow-[3px_3px_0_0_#2c2a3a]"
        />
        <div className="crayon flex shrink-0 rounded-xl bg-white p-1">
          <button onClick={() => changeSort("id")} className={sortBtn("id")}>
            Number
          </button>
          <button onClick={() => changeSort("name")} className={sortBtn("name")}>
            Name A–Z
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10">
        {loading ? (
          <div className="flex flex-col items-center gap-3 py-16 text-ink-500">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-line/20 border-t-brand-500" />
            <p className="text-sm font-bold">Catching them all…</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center gap-2 py-16 text-center text-ink-500">
            <span className="text-3xl" aria-hidden="true">
              😿
            </span>
            <p className="text-sm font-bold">Couldn&apos;t load: {error}</p>
          </div>
        ) : processed.length === 0 ? (
          <div className="py-16 text-center text-ink-500">
            <span className="text-3xl" aria-hidden="true">
              🔍
            </span>
            <p className="mt-2 text-sm font-bold">No Pokémon match “{query}”.</p>
          </div>
        ) : (
          <>
            <p className="mb-5 text-center text-sm font-bold text-ink-500">
              Showing {start + 1}–{start + visible.length} of {processed.length}
            </p>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
              {visible.map((p) => (
                <Link
                  key={p.id}
                  to={`/projects/pokedex/${p.name}`}
                  className="crayon crayon-press flex flex-col items-center rounded-2xl bg-white p-4"
                >
                  <div className="crayon flex h-28 w-full items-center justify-center rounded-xl bg-cream">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="h-24 w-24 object-contain"
                    />
                  </div>
                  <p className="mt-3 font-mono text-xs font-bold text-ink-500">
                    #{String(p.id).padStart(3, "0")}
                  </p>
                  <p className="font-display text-lg font-bold text-ink-900">
                    {capitalize(p.name)}
                  </p>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={() => update({ page: Math.max(1, currentPage - 1) })}
                disabled={currentPage === 1}
                className="crayon crayon-press rounded-xl bg-white px-4 py-2.5 font-bold text-ink-900 disabled:cursor-not-allowed disabled:opacity-40"
              >
                ← Prev
              </button>
              <span className="font-display text-sm font-bold text-ink-900">
                Page {currentPage} / {totalPages}
              </span>
              <button
                onClick={() => update({ page: Math.min(totalPages, currentPage + 1) })}
                disabled={currentPage === totalPages}
                className="crayon crayon-press rounded-xl bg-brand-500 px-4 py-2.5 font-bold text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Pokedex;
