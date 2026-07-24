import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const tint =
    count > 0 ? "bg-mint" : count < 0 ? "bg-blush" : "bg-sun";

  return (
    <div className="crayon mx-auto flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl bg-white p-8">
      <span className="crayon rounded-full bg-sky px-4 py-1.5 text-sm font-bold text-ink-900">
        🧮 useState counter
      </span>

      {/* The value held in state */}
      <div
        className={`crayon flex h-32 w-32 -rotate-2 items-center justify-center rounded-3xl ${tint}`}
      >
        <span className="font-display text-6xl font-bold tabular-nums text-ink-900">
          {count}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setCount(count - 1)}
          aria-label="Decrease"
          className="crayon crayon-press flex h-12 w-12 items-center justify-center rounded-xl bg-blush font-display text-2xl font-bold text-ink-900"
        >
          −
        </button>
        <button
          onClick={() => setCount(0)}
          className="crayon crayon-press rounded-xl bg-white px-4 py-2.5 font-bold text-ink-900"
        >
          Reset
        </button>
        <button
          onClick={() => setCount(count + 1)}
          aria-label="Increase"
          className="crayon crayon-press flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 font-display text-2xl font-bold text-white"
        >
          +
        </button>
      </div>

      <p className="text-center text-sm text-ink-500">
        Every click calls <code className="font-bold text-brand-600">setCount</code>{" "}
        and React re-draws the number.
      </p>
    </div>
  );
};

export default Counter;
