import { useState } from "react";

// A tiny stand-in for nested routes: each "route" is a tab with a panel.
const tabs = [
  {
    id: "home",
    label: "Home",
    panel: { emoji: "🏠", title: "Home", text: "The index route." },
  },
  {
    id: "about",
    label: "About",
    panel: {
      emoji: "📖",
      title: "About",
      text: "Rendered inside the parent's <Outlet />.",
    },
  },
  {
    id: "help",
    label: "Help",
    panel: { emoji: "💬", title: "Help", text: "Same layout, new content." },
  },
];

const RouterOutletExample = () => {
  const [active, setActive] = useState("home");
  const { panel } = tabs.find((t) => t.id === active);

  const tabClass = (id) =>
    `flex-1 rounded-lg px-3 py-1.5 text-center text-sm font-bold transition-colors ${
      active === id ? "bg-brand-500 text-white" : "text-ink-500"
    }`;

  return (
    <div className="crayon flex flex-col gap-5 rounded-3xl bg-white p-6">
      <span className="crayon inline-flex w-fit rounded-full bg-sun px-4 py-1.5 text-sm font-bold text-ink-900">
        🧭 nested routes + Outlet
      </span>

      {/* The parent "layout": the tab bar stays mounted across changes. */}
      <div>
        <div className="crayon flex gap-1 rounded-xl bg-cream p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={tabClass(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* This box is the <Outlet /> — only its contents swap. */}
        <div className="crayon relative mt-4 flex min-h-36 items-center justify-center rounded-xl bg-white p-6 text-center">
          <span className="absolute right-2 top-2 font-mono text-[10px] font-bold text-ink-500/60">
            &lt;Outlet /&gt;
          </span>
          <div>
            <div className="text-4xl" aria-hidden="true">
              {panel.emoji}
            </div>
            <p className="mt-2 font-display text-lg font-bold text-ink-900">
              {panel.title}
            </p>
            <p className="mt-1 text-sm text-ink-500">{panel.text}</p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-ink-500">
        The tabs stay put — only the{" "}
        <code className="font-bold text-brand-600">&lt;Outlet /&gt;</code> content
        swaps.
      </p>
    </div>
  );
};

export default RouterOutletExample;
