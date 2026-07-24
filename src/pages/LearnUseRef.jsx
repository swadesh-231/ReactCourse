import RefExample from "../components/RefExample";
import ExampleHeader from "../components/ExampleHeader";
import LessonTabs from "../components/LessonTabs";

const steps = [
  {
    icon: "📦",
    tint: "bg-sky",
    title: "Holds a box",
    description:
      "useRef returns a mutable { current } object that sticks around across every render.",
  },
  {
    icon: "🤫",
    tint: "bg-blush",
    title: "No re-render",
    description:
      "Changing ref.current does not trigger a re-render — great for values the UI doesn't show.",
  },
  {
    icon: "🎯",
    tint: "bg-mint",
    title: "Grab the DOM",
    description:
      "Attach a ref to an element to reach the real node — then call things like .focus().",
  },
];

const LearnUseRef = () => {
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
          <span className="crayon rounded-full bg-mint px-3 py-1 text-ink-900">
            useRef
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Learn <span className="marker">useRef</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          <code className="font-bold text-brand-600">useRef</code> gives you a
          value that survives re-renders without causing one — most often used to
          reach a DOM element directly.
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

      {/* Example 1: Focus a field */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="1"
          tint="bg-sun"
          title="Focus a field"
          subtitle="Point a ref at the input, then focus it on demand."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          We attach <code className="font-bold text-brand-600">inputRef</code> to
          the input. Clicking the button calls{" "}
          <code className="font-bold text-brand-600">inputRef.current.focus()</code>{" "}
          — reaching the real DOM node, no state needed.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-sky">import</span> {"{ useRef }"}{" "}
              <span className="text-sky">from</span>{" "}
              <span className="text-mint">"react"</span>;{"\n\n"}
              <span className="text-sky">const</span> inputRef ={" "}
              <span className="text-sun">useRef</span>(
              <span className="text-blush">null</span>);{"\n\n"}
              <span className="text-ink-500">{"// focus imperatively"}</span>
              {"\n"}
              <span className="text-sky">const</span>{" "}
              <span className="text-sun">focusInput</span> ={" "}
              <span className="text-sky">() =&gt;</span> {"{"}
              {"\n"}
              {"  "}inputRef.current.
              <span className="text-sun">focus</span>();{"\n"}
              {"}"};{"\n\n"}
              &lt;<span className="text-sky">input</span> ref={"{"}inputRef
              {"}"} /&gt;{"\n"}
              &lt;<span className="text-sky">button</span> onClick={"{"}
              focusInput{"}"}&gt;Focus&lt;/
              <span className="text-sky">button</span>&gt;
            </pre>
          </div>

          <RefExample />
        </div>
      </div>
    </section>
  );
};

export default LearnUseRef;
