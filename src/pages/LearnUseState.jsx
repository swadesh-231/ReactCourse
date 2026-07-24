import Counter from "../components/Counter";
import BatchUpdate from "../components/BatchUpdate";
import FormExample from "../components/FormExample";
import BgChanger from "../components/BgChanger";
import ExampleHeader from "../components/ExampleHeader";
import LessonTabs from "../components/LessonTabs";

const steps = [
  {
    icon: "📦",
    tint: "bg-sky",
    title: "Hold a value",
    description:
      "useState stores a piece of data that survives between re-renders — here, the count.",
  },
  {
    icon: "🔁",
    tint: "bg-blush",
    title: "Update it",
    description:
      "Call the setter (setCount) to change the value. React notices and re-renders.",
  },
  {
    icon: "✨",
    tint: "bg-mint",
    title: "See it live",
    description:
      "The UI always reflects the latest state — no manual DOM editing required.",
  },
];

const LearnUseState = () => {
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
          <span className="crayon rounded-full bg-sun px-3 py-1 text-ink-900">
            useState
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Learn <span className="marker">useState</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          <code className="font-bold text-brand-600">useState</code> lets a
          component remember things. Give it a starting value and it hands back
          the current value plus a function to change it.
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

      {/* Example 1: Normal count */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="1"
          tint="bg-sun"
          title="Normal count"
          subtitle="One click, one update."
        />
        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-sky">import</span> {"{ useState }"}{" "}
              <span className="text-sky">from</span>{" "}
              <span className="text-mint">"react"</span>;{"\n\n"}
              <span className="text-sky">const</span> [count, setCount] ={" "}
              <span className="text-sun">useState</span>(
              <span className="text-blush">0</span>);{"\n\n"}
              <span className="text-ink-500">{"// increase the count"}</span>
              {"\n"}
              <span className="text-sun">setCount</span>(count{" "}
              <span className="text-blush">+ 1</span>);
            </pre>
          </div>

          <Counter />
        </div>
      </div>

      {/* Example 2: Batch count */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="2"
          tint="bg-blush"
          title="Batch count"
          subtitle="Many updates, one re-render."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          React groups the state updates inside one event into a single
          re-render. So calling{" "}
          <code className="font-bold text-brand-600">setCount</code> three times
          with the same value only adds one — pass a function to build on the
          previous value instead.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-ink-500">
                {"// ❌ only +1 — all read the same count"}
              </span>
              {"\n"}
              <span className="text-sun">setCount</span>(count{" "}
              <span className="text-blush">+ 1</span>);{"\n"}
              <span className="text-sun">setCount</span>(count{" "}
              <span className="text-blush">+ 1</span>);{"\n"}
              <span className="text-sun">setCount</span>(count{" "}
              <span className="text-blush">+ 1</span>);{"\n\n"}
              <span className="text-ink-500">
                {"// ✅ +3 — each builds on the last"}
              </span>
              {"\n"}
              <span className="text-sun">setCount</span>(
              <span className="text-sky">c =&gt;</span> c{" "}
              <span className="text-blush">+ 1</span>);{"\n"}
              <span className="text-sun">setCount</span>(
              <span className="text-sky">c =&gt;</span> c{" "}
              <span className="text-blush">+ 1</span>);{"\n"}
              <span className="text-sun">setCount</span>(
              <span className="text-sky">c =&gt;</span> c{" "}
              <span className="text-blush">+ 1</span>);
            </pre>
          </div>

          <BatchUpdate />
        </div>
      </div>

      {/* Example 3: Form state */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="3"
          tint="bg-mint"
          title="Form state"
          subtitle="Type your details, hit submit, see them on the right."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          Each input keeps its own piece of state. On submit we save a snapshot
          into <code className="font-bold text-brand-600">submitted</code> and
          React renders it in the card on the right.
        </p>

        <div className="mt-8">
          <FormExample />
        </div>
      </div>

      {/* Example 4: Background changer */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="4"
          tint="bg-sky"
          title="Background changer"
          subtitle="Store a color in state and paint with it."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          Each swatch calls{" "}
          <code className="font-bold text-brand-600">setBg</code> with a color.
          State holds the choice, the box&apos;s{" "}
          <code className="font-bold text-brand-600">backgroundColor</code>{" "}
          follows it, and the Copy button writes the hex to your clipboard.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-sky">const</span> [bg, setBg] ={" "}
              <span className="text-sun">useState</span>(
              <span className="text-mint">"#ffd45c"</span>);{"\n\n"}
              &lt;<span className="text-sky">div</span> style={"{{"}{" "}
              backgroundColor: bg {"}}"} /&gt;{"\n\n"}
              <span className="text-ink-500">
                {"// copy the hex to the clipboard"}
              </span>
              {"\n"}
              navigator.clipboard.<span className="text-sun">writeText</span>(bg);
            </pre>
          </div>

          <BgChanger />
        </div>
      </div>
    </section>
  );
};

export default LearnUseState;
