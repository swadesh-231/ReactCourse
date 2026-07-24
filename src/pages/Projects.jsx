import { NavLink } from "react-router";

const projects = [
  {
    title: "Pokédex",
    emoji: "🔴",
    tint: "bg-blush",
    description: "Browse and search the original Pokémon, powered by the PokéAPI.",
    to: "/projects/pokedex",
  },
  {
    title: "Todo App",
    emoji: "✅",
    tint: "bg-mint",
    description: "Add, complete, and filter tasks — a useState & lists classic.",
    to: "/projects/todo",
  },
  {
    title: "Tic-Tac-Toe",
    emoji: "⭕",
    tint: "bg-sky",
    description: "Two-player X's and O's with live winner detection.",
    to: "/projects/tictactoe",
  },
];

const Projects = () => {
  return (
    <section className="py-16 sm:py-20">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <span className="crayon inline-flex items-center rounded-full bg-sun px-4 py-1.5 text-sm font-bold text-ink-900">
          🛠️ Projects
        </span>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Build <span className="marker">real things</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          Hands-on mini-apps that put the lessons to work. Click one to dive in.
        </p>
      </div>

      {/* Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const inner = (
            <>
              <div
                className={`crayon flex h-12 w-12 -rotate-3 items-center justify-center rounded-xl text-2xl ${project.tint}`}
              >
                <span aria-hidden="true">{project.emoji}</span>
              </div>
              <h2 className="mt-5 font-display text-xl font-bold text-ink-900">
                {project.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {project.description}
              </p>
              <span className="mt-4 inline-block text-sm font-bold text-brand-600">
                {project.to ? "Open project →" : "Coming soon"}
              </span>
            </>
          );

          return project.to ? (
            <NavLink
              key={project.title}
              to={project.to}
              className="crayon crayon-press block rounded-2xl bg-white p-6"
            >
              {inner}
            </NavLink>
          ) : (
            <div
              key={project.title}
              className="crayon rounded-2xl bg-white p-6 opacity-60"
            >
              {inner}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
