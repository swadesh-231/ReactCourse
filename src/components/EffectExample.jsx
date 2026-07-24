import { useState, useEffect } from "react";

const EffectExample = () => {
  const [running, setRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);

  // Runs after render. Sets up a ticking timer while `running` is true,
  // and cleans it up whenever `running` changes or the component unmounts.
  useEffect(() => {
    if (!running) return;
    const id = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(id); // cleanup
  }, [running]);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="crayon mx-auto flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl bg-white p-8">
      <span className="crayon rounded-full bg-sky px-4 py-1.5 text-sm font-bold text-ink-900">
        ⏱ useEffect timer
      </span>

      <div
        className={`crayon flex h-32 w-40 -rotate-2 items-center justify-center rounded-3xl ${
          running ? "bg-mint" : "bg-sun"
        }`}
      >
        <span className="font-display text-5xl font-bold tabular-nums text-ink-900">
          {mm}:{ss}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setRunning((r) => !r)}
          className="crayon crayon-press rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white"
        >
          {running ? "⏸ Pause" : "▶ Start"}
        </button>
        <button
          onClick={() => {
            setSeconds(0);
            setRunning(false);
          }}
          className="crayon crayon-press rounded-xl bg-white px-5 py-2.5 font-bold text-ink-900"
        >
          Reset
        </button>
      </div>

      <p className="text-center text-sm text-ink-500">
        The effect starts the timer — its cleanup clears it when you pause.
      </p>
    </div>
  );
};

export default EffectExample;
