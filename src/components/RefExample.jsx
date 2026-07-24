import { useRef, useState } from "react";

const inputClass =
  "w-full rounded-xl border-2 border-line bg-white px-4 py-2.5 font-medium text-ink-900 placeholder:text-ink-500/60 outline-none transition focus:-translate-y-0.5 focus:shadow-[3px_3px_0_0_#2c2a3a]";

const RefExample = () => {
  const inputRef = useRef(null);
  const [submitted, setSubmitted] = useState("");

  // Reach into the real DOM node and focus it — no state involved.
  const focusInput = () => {
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value.trim();
    if (!value) return;
    setSubmitted(value);
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  return (
    <div className="crayon mx-auto flex w-full max-w-sm flex-col gap-5 rounded-3xl bg-white p-8">
      <span className="crayon inline-flex w-fit rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-ink-900">
        🎯 useRef focus
      </span>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="mb-1.5 block text-sm font-bold text-ink-700">
            Name
          </label>
          <input
            ref={inputRef}
            type="text"
            placeholder="Click Focus, then type…"
            className={inputClass}
          />
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={focusInput}
            className="crayon crayon-press flex-1 rounded-xl bg-brand-500 px-4 py-2.5 font-bold text-white"
          >
            🎯 Focus input
          </button>
          <button
            type="submit"
            className="crayon crayon-press rounded-xl bg-white px-4 py-2.5 font-bold text-ink-900"
          >
            Submit
          </button>
        </div>
      </form>

      {submitted && (
        <p className="text-center text-sm font-bold text-ink-900">
          You typed: <span className="text-brand-600">{submitted}</span>
        </p>
      )}

      <p className="text-center text-sm text-ink-500">
        The ref points at the real input, so we can focus it or read its value.
      </p>
    </div>
  );
};

export default RefExample;
