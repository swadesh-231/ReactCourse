import { useState } from "react";

const BatchUpdate = () => {
  const [count, setCount] = useState(0);

  // ❌ Stale: all three read the SAME count, React batches → only +1
  const bumpStale = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // ✅ Functional: each update builds on the previous → +3
  const bumpFunctional = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  return (
    <div className="crayon mx-auto flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl bg-white p-8">
      <span className="crayon rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-ink-900">
        ⚡ batch update
      </span>

      <div className="crayon flex h-32 w-32 -rotate-2 items-center justify-center rounded-3xl bg-sky">
        <span className="font-display text-6xl font-bold tabular-nums text-ink-900">
          {count}
        </span>
      </div>

      <div className="flex w-full flex-col gap-3">
        <button
          onClick={bumpStale}
          className="crayon crayon-press rounded-xl bg-blush px-4 py-2.5 font-bold text-ink-900"
        >
          +3 the wrong way <span className="text-ink-500">(only +1)</span>
        </button>
        <button
          onClick={bumpFunctional}
          className="crayon crayon-press rounded-xl bg-mint px-4 py-2.5 font-bold text-ink-900"
        >
          +3 the right way <span className="text-ink-500">(+3)</span>
        </button>
        <button
          onClick={() => setCount(0)}
          className="crayon crayon-press rounded-xl bg-white px-4 py-2.5 font-bold text-ink-900"
        >
          Reset
        </button>
      </div>

      <p className="text-center text-sm text-ink-500">
        Same three clicks — different result. That&apos;s batching!
      </p>
    </div>
  );
};

export default BatchUpdate;
