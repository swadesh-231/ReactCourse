import { useState } from "react";

const swatches = [
  { name: "Sun", value: "#ffd45c" },
  { name: "Blush", value: "#ff9dc4" },
  { name: "Sky", value: "#7fc4ff" },
  { name: "Mint", value: "#8be3a8" },
  { name: "Grape", value: "#7a6cff" },
];

const BgChanger = () => {
  const [bg, setBg] = useState("#ffd45c");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bg.toUpperCase());
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="crayon mx-auto flex w-full max-w-sm flex-col items-center gap-6 rounded-3xl bg-white p-8">
      <span className="crayon rounded-full bg-sky px-4 py-1.5 text-sm font-bold text-ink-900">
        🎨 background changer
      </span>

      <div
        className="crayon flex h-32 w-full items-center justify-center rounded-2xl transition-colors duration-300"
        style={{ backgroundColor: bg }}
      >
        <span className="crayon rounded-full bg-white px-3 py-1 font-mono text-sm font-bold text-ink-900">
          {bg.toUpperCase()}
        </span>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {swatches.map((s) => (
          <button
            key={s.value}
            onClick={() => setBg(s.value)}
            aria-label={s.name}
            style={{ backgroundColor: s.value }}
            className={`crayon crayon-press h-10 w-10 rounded-xl ${
              bg === s.value
                ? "ring-2 ring-line ring-offset-2 ring-offset-white"
                : ""
            }`}
          />
        ))}
      </div>

      <button
        onClick={handleCopy}
        className="crayon crayon-press rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white"
      >
        {copied ? "✓ Copied!" : `📋 Copy ${bg.toUpperCase()}`}
      </button>

      <p className="text-center text-sm text-ink-500">
        The chosen color lives in state — pick one, then copy the hex.
      </p>
    </div>
  );
};

export default BgChanger;
