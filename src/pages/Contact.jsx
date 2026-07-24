const inputClass =
  "w-full rounded-xl border-2 border-line bg-white px-4 py-2.5 font-medium text-ink-900 placeholder:text-ink-500/60 outline-none transition focus:-translate-y-0.5 focus:shadow-[3px_3px_0_0_#2c2a3a]";

const contactDetails = [
  { icon: "✉️", tint: "bg-sky", label: "Email", value: "hello@reactcourse.dev" },
  { icon: "💬", tint: "bg-blush", label: "Community", value: "Join our Discord" },
  { icon: "📍", tint: "bg-mint", label: "Based in", value: "Everywhere online" },
];

const Contact = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="crayon inline-flex items-center rounded-full bg-sky px-4 py-1.5 text-sm font-bold text-ink-900">
          Contact
        </span>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Let&apos;s <span className="marker">talk</span>.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          Questions, feedback, or just want to say hi? Drop us a message and
          we&apos;ll get back to you.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-5">
        {/* Contact info */}
        <ul className="space-y-4 lg:col-span-2">
          {contactDetails.map((item) => (
            <li
              key={item.label}
              className="crayon flex items-center gap-4 rounded-2xl bg-white p-4"
            >
              <span
                className={`crayon flex h-11 w-11 shrink-0 -rotate-3 items-center justify-center rounded-xl text-xl ${item.tint}`}
              >
                <span aria-hidden="true">{item.icon}</span>
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-ink-500">
                  {item.label}
                </p>
                <p className="font-bold text-ink-900">{item.value}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Form */}
        <form
          className="crayon rounded-2xl bg-white p-6 sm:p-8 lg:col-span-3"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-bold text-ink-700">
                Name
              </label>
              <input type="text" placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-ink-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-1.5 block text-sm font-bold text-ink-700">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="How can we help?"
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            className="crayon crayon-press mt-6 w-full rounded-xl bg-brand-500 px-4 py-3 font-bold text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
