import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Type → crayon accent tint
const typeTint = {
  normal: "bg-cream",
  fire: "bg-blush",
  water: "bg-sky",
  electric: "bg-sun",
  grass: "bg-mint",
  ice: "bg-sky",
  fighting: "bg-blush",
  poison: "bg-brand-300",
  ground: "bg-sun",
  flying: "bg-sky",
  psychic: "bg-blush",
  bug: "bg-mint",
  rock: "bg-sun",
  ghost: "bg-brand-300",
  dragon: "bg-brand-300",
  dark: "bg-ink-500",
  steel: "bg-sky",
  fairy: "bg-blush",
};

const statLabels = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};

const PokemonDetail = () => {
  const { name } = useParams();
  // Holds the result keyed by the name it was fetched for, so loading/error
  // can be derived — no synchronous setState reset when the param changes.
  const [result, setResult] = useState(null);

  useEffect(() => {
    let ignore = false;

    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        if (!res.ok) throw new Error("Pokémon not found");
        return res.json();
      })
      .then((data) => {
        if (ignore) return;
        setResult({
          name,
          pokemon: {
            id: data.id,
            name: data.name,
            image:
              data.sprites.other["official-artwork"].front_default ||
              data.sprites.front_default,
            types: data.types.map((t) => t.type.name),
            height: data.height / 10, // dm → m
            weight: data.weight / 10, // hg → kg
            abilities: data.abilities.map((a) => a.ability.name),
            stats: data.stats.map((s) => ({
              name: s.stat.name,
              value: s.base_stat,
            })),
          },
        });
      })
      .catch((err) => {
        if (!ignore) setResult({ name, error: err.message });
      });

    return () => {
      ignore = true;
    };
  }, [name]);

  // Result is only current if it was fetched for the name in the URL.
  const ready = result && result.name === name;
  const loading = !ready;
  const error = ready ? result.error : null;
  const pokemon = ready ? result.pokemon : null;

  return (
    <section className="py-16 sm:py-20">
      {/* Back to Pokédex */}
      <Link
        to="/projects/pokedex"
        className="crayon crayon-press inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 font-bold text-ink-900"
      >
        ← Back to Pokédex
      </Link>

      {loading ? (
        <div className="flex flex-col items-center gap-3 py-24 text-ink-500">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-line/20 border-t-brand-500" />
          <p className="text-sm font-bold">Loading Pokémon…</p>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center gap-3 py-24 text-center text-ink-500">
          <span className="text-4xl" aria-hidden="true">
            😿
          </span>
          <p className="text-sm font-bold">Couldn&apos;t load “{name}”: {error}</p>
          <Link
            to="/projects/pokedex"
            className="crayon crayon-press mt-2 rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white"
          >
            Back to the Pokédex
          </Link>
        </div>
      ) : (
        <div className="mx-auto mt-8 max-w-3xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Artwork */}
            <div className="crayon flex flex-col items-center rounded-3xl bg-white p-6">
              <p className="self-start font-mono text-sm font-bold text-ink-500">
                #{String(pokemon.id).padStart(3, "0")}
              </p>
              <div className="crayon mt-2 flex aspect-square w-full items-center justify-center rounded-2xl bg-cream">
                <img
                  src={pokemon.image}
                  alt={pokemon.name}
                  className="h-4/5 w-4/5 object-contain"
                />
              </div>
              <h1 className="mt-4 font-display text-3xl font-bold text-ink-900">
                {capitalize(pokemon.name)}
              </h1>
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {pokemon.types.map((type) => (
                  <span
                    key={type}
                    className={`crayon rounded-full px-3 py-1 text-sm font-bold text-ink-900 ${
                      typeTint[type] || "bg-cream"
                    }`}
                  >
                    {capitalize(type)}
                  </span>
                ))}
              </div>
            </div>

            {/* Facts */}
            <div className="flex flex-col gap-4">
              {/* Height / weight */}
              <div className="grid grid-cols-2 gap-4">
                <div className="crayon rounded-2xl bg-white p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-500">
                    Height
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-ink-900">
                    {pokemon.height} m
                  </p>
                </div>
                <div className="crayon rounded-2xl bg-white p-4 text-center">
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-500">
                    Weight
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-ink-900">
                    {pokemon.weight} kg
                  </p>
                </div>
              </div>

              {/* Abilities */}
              <div className="crayon rounded-2xl bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-500">
                  Abilities
                </p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {pokemon.abilities.map((ability) => (
                    <span
                      key={ability}
                      className="crayon rounded-full bg-cream px-3 py-1 text-sm font-bold text-ink-900"
                    >
                      {capitalize(ability.replace("-", " "))}
                    </span>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="crayon rounded-2xl bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-500">
                  Base stats
                </p>
                <div className="mt-3 flex flex-col gap-2.5">
                  {pokemon.stats.map((stat) => (
                    <div key={stat.name} className="flex items-center gap-3">
                      <span className="w-16 shrink-0 text-sm font-bold text-ink-500">
                        {statLabels[stat.name] || stat.name}
                      </span>
                      <div className="h-3 flex-1 overflow-hidden rounded-full border-2 border-line bg-cream">
                        <div
                          className="h-full rounded-full bg-brand-500"
                          style={{
                            width: `${Math.min(100, (stat.value / 200) * 100)}%`,
                          }}
                        />
                      </div>
                      <span className="w-8 shrink-0 text-right font-mono text-sm font-bold text-ink-900">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PokemonDetail;
