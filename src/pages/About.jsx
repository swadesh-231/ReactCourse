const values = [
  {
    icon: "🎯",
    tint: "bg-sky",
    title: "Practical first",
    description:
      "Every concept is taught through something you actually build — no filler.",
  },
  {
    icon: "🧩",
    tint: "bg-blush",
    title: "Clear over clever",
    description:
      "Readable, maintainable code you can explain — the kind that survives a real codebase.",
  },
  {
    icon: "💜",
    tint: "bg-mint",
    title: "Craft matters",
    description:
      "Good software feels good to use. We treat design and polish as part of the work.",
  },
];

const About = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="crayon inline-flex items-center rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-ink-900">
          About us
        </span>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Built for people who love to <span className="marker">build</span>.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          ReactCourse started with a simple idea: learning to build for the web
          should feel exciting, not overwhelming. We blend solid fundamentals
          with the design sense that makes projects worth showing off.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {values.map((value) => (
          <div
            key={value.title}
            className="crayon rounded-2xl bg-white p-6"
          >
            <div
              className={`crayon flex h-12 w-12 -rotate-3 items-center justify-center rounded-xl text-2xl ${value.tint}`}
            >
              <span aria-hidden="true">{value.icon}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
              {value.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
