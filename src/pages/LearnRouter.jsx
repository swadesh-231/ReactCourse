import RouterOutletExample from "../components/RouterOutletExample";
import RouterHooksExample from "../components/RouterHooksExample";
import ExampleHeader from "../components/ExampleHeader";
import LessonTabs from "../components/LessonTabs";

const CodePanel = ({ children }) => (
  <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
    <pre className="whitespace-pre">{children}</pre>
  </div>
);

const steps = [
  {
    icon: "🧭",
    tint: "bg-sky",
    title: "Nested routes",
    description:
      "Routes can nest inside one another — a parent route wraps a group of child routes that share its layout.",
  },
  {
    icon: "🕳️",
    tint: "bg-blush",
    title: "The Outlet",
    description:
      "The parent renders <Outlet /> as a placeholder — React Router drops the matched child route right there.",
  },
  {
    icon: "🪝",
    tint: "bg-mint",
    title: "Router hooks",
    description:
      "useNavigate, useParams, useLocation & useSearchParams let components read the URL and navigate in code.",
  },
];

const hooks = [
  {
    name: "useNavigate()",
    tint: "bg-sun",
    signature: "const navigate = useNavigate()",
    description:
      "Navigate in code: navigate(\"/projects\") to go somewhere, or navigate(-1) to go back.",
  },
  {
    name: "useParams()",
    tint: "bg-blush",
    signature: "const { id } = useParams()",
    description:
      "Read dynamic URL segments — for a route like /member/:id it hands you { id }.",
  },
  {
    name: "useLocation()",
    tint: "bg-sky",
    signature: "const { pathname } = useLocation()",
    description:
      "The current URL as an object — pathname, search, hash. Handy for 'is this tab active?' checks.",
  },
  {
    name: "useSearchParams()",
    tint: "bg-mint",
    signature: "const [params, setParams] = useSearchParams()",
    description:
      "Read and update the query string (?sort=name) — like useState, but stored in the URL.",
  },
  {
    name: "<Link> / <NavLink>",
    tint: "bg-sun",
    signature: '<NavLink to="/about">About</NavLink>',
    description:
      "Declarative navigation without a page reload. NavLink also knows when its route is active.",
  },
  {
    name: "<Outlet />",
    tint: "bg-blush",
    signature: "<Outlet />",
    description:
      "The slot inside a parent route where the matched child route is rendered.",
  },
];

const outletCode = `import { Routes, Route, Outlet, NavLink } from "react-router";

// Parent renders shared UI + an <Outlet/> for the child
function Layout() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>

      <Outlet />   {/* the child route shows up here */}
    </div>
  );
}

<Routes>
  <Route element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
</Routes>`;

const hooksCode = `import { useParams, useNavigate } from "react-router";

function Member() {
  const { id } = useParams();      // read /member/:id
  const navigate = useNavigate();  // go in code

  return (
    <>
      <button onClick={() => navigate(-1)}>← Back</button>
      <p>Member id: {id}</p>
    </>
  );
}

<Route path="/member/:id" element={<Member />} />`;

const LearnRouter = () => {
  return (
    <section className="py-16 sm:py-20">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2.5 text-sm font-bold"
        >
          <span className="text-ink-500">Learn</span>
          <span aria-hidden="true" className="text-brand-400">
            →
          </span>
          <span className="crayon rounded-full bg-brand-200 px-3 py-1 text-ink-900">
            Router
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Learn <span className="marker">React Router</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          <code className="font-bold text-brand-600">react-router</code> maps
          URLs to components — so a single-page app can have many pages. Nest
          routes with <code className="font-bold text-brand-600">Outlet</code>{" "}
          and drive them with a handful of hooks.
        </p>
      </div>

      <LessonTabs />

      {/* How it works */}
      <div className="mx-auto mt-16 max-w-4xl">
        <h2 className="text-center text-3xl font-bold text-ink-900">
          How it <span className="marker">works</span>
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="crayon rounded-2xl bg-white p-6">
              <div
                className={`crayon flex h-12 w-12 -rotate-3 items-center justify-center rounded-xl text-2xl ${step.tint}`}
              >
                <span aria-hidden="true">{step.icon}</span>
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Example 1: Nested routes & Outlet */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="1"
          tint="bg-sun"
          title="Nested routes & <Outlet />"
          subtitle="One layout, many child pages slotted into the Outlet."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          Wrap child routes in a parent that has no{" "}
          <code className="font-bold text-brand-600">path</code> but does render
          an <code className="font-bold text-brand-600">&lt;Outlet /&gt;</code>.
          The parent&apos;s shared UI stays mounted while the child swaps.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <CodePanel>{outletCode}</CodePanel>
          <RouterOutletExample />
        </div>
      </div>

      {/* Example 2: Dynamic routes + hooks */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="2"
          tint="bg-blush"
          title="Dynamic routes, useParams & useNavigate"
          subtitle="Read the :id from the URL and navigate in code."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          A <code className="font-bold text-brand-600">:id</code> segment makes
          the route dynamic.{" "}
          <code className="font-bold text-brand-600">useParams</code> reads it,
          and <code className="font-bold text-brand-600">useNavigate</code> lets
          a button move around — exactly how this site&apos;s Pokédex opens a
          Pokémon&apos;s details.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <CodePanel>{hooksCode}</CodePanel>
          <RouterHooksExample />
        </div>
      </div>

      {/* Example 3: Common hooks reference */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="3"
          tint="bg-mint"
          title="The hooks you'll actually use"
          subtitle="A quick reference for everyday routing."
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {hooks.map((hook) => (
            <div key={hook.name} className="crayon rounded-2xl bg-white p-5">
              <div className="flex items-center gap-3">
                <span
                  className={`crayon flex h-9 w-9 shrink-0 -rotate-3 items-center justify-center rounded-lg text-sm ${hook.tint}`}
                  aria-hidden="true"
                >
                  🪝
                </span>
                <h3 className="font-display text-lg font-bold text-ink-900">
                  {hook.name}
                </h3>
              </div>
              <pre className="crayon mt-3 overflow-x-auto rounded-lg bg-ink-900 px-3 py-2 font-mono text-xs text-white">
                {hook.signature}
              </pre>
              <p className="mt-3 text-sm leading-relaxed text-ink-500">
                {hook.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnRouter;
