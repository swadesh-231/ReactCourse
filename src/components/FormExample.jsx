import { useState } from "react";

const inputClass =
  "w-full rounded-xl border-2 border-line bg-white px-4 py-2.5 font-medium text-ink-900 placeholder:text-ink-500/60 outline-none transition focus:-translate-y-0.5 focus:shadow-[3px_3px_0_0_#2c2a3a]";

const FormExample = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted({ name: name.trim(), email: email.trim() });
  };

  const handleClear = () => {
    setName("");
    setEmail("");
    setSubmitted(null);
  };

  return (
    <div className="grid items-start gap-8 lg:grid-cols-2">
      {/* Form — left */}
      <form
        onSubmit={handleSubmit}
        className="crayon space-y-4 rounded-2xl bg-white p-6"
      >
        <span className="crayon inline-flex rounded-full bg-sky px-4 py-1.5 text-sm font-bold text-ink-900">
          📝 form state
        </span>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-ink-700">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ada Lovelace"
            className={inputClass}
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-bold text-ink-700">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ada@example.com"
            className={inputClass}
          />
        </div>

        <div className="flex gap-3">
          <button
            type="submit"
            className="crayon crayon-press flex-1 rounded-xl bg-brand-500 px-4 py-3 font-bold text-white"
          >
            Submit →
          </button>
          <button
            type="button"
            onClick={handleClear}
            className="crayon crayon-press rounded-xl bg-white px-4 py-3 font-bold text-ink-900"
          >
            Clear
          </button>
        </div>
      </form>

      {/* Result — right */}
      <div className="crayon rounded-2xl bg-white p-6">
        <span className="crayon inline-flex rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-ink-900">
          ✅ submitted
        </span>

        {submitted ? (
          <div className="mt-6 flex flex-col items-center text-center">
            <div className="crayon flex h-16 w-16 -rotate-3 items-center justify-center rounded-2xl bg-sun font-display text-2xl font-bold text-ink-900">
              {submitted.name.charAt(0).toUpperCase()}
            </div>
            <p className="mt-4 font-display text-xl font-bold text-ink-900">
              {submitted.name}
            </p>
            <p className="text-sm font-medium text-ink-500">{submitted.email}</p>
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center gap-2 rounded-2xl border-2 border-dashed border-line/30 py-10 text-center">
            <span className="text-3xl" aria-hidden="true">
              👀
            </span>
            <p className="max-w-56 text-sm text-ink-500">
              Fill the form and hit submit — your details show up here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormExample;
