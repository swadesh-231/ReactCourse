import ExampleHeader from "../components/ExampleHeader";
import LessonTabs from "../components/LessonTabs";

/* ---- Little presentational components used by the demos ---- */

const GreetingCard = ({ name, emoji }) => (
  <div className="crayon flex items-center gap-3 rounded-xl bg-cream px-4 py-3">
    <span className="text-2xl" aria-hidden="true">
      {emoji}
    </span>
    <p className="font-bold text-ink-900">Hi, {name}!</p>
  </div>
);

const ProfileCard = ({ name, role, emoji }) => (
  <div className="crayon flex items-center gap-4 rounded-xl bg-cream px-4 py-3">
    <span
      className="crayon flex h-11 w-11 -rotate-3 items-center justify-center rounded-xl bg-sun text-2xl"
      aria-hidden="true"
    >
      {emoji}
    </span>
    <div>
      <p className="font-display font-bold text-ink-900">{name}</p>
      <p className="text-sm text-ink-500">{role}</p>
    </div>
  </div>
);

const Panel = ({ title, children }) => (
  <div className="crayon rounded-xl bg-cream px-4 py-3">
    <p className="font-display font-bold text-ink-900">{title}</p>
    <p className="mt-1 text-sm text-ink-500">{children}</p>
  </div>
);

const LabeledDemo = ({ label, children }) => (
  <div>
    <p className="mb-1.5 text-xs font-bold uppercase tracking-wide text-ink-500">
      {label}
    </p>
    {children}
  </div>
);

/* ---- Shared data for the "different ways" demo ---- */
const user = { name: "Ada", emoji: "👋" };

const steps = [
  {
    icon: "📨",
    tint: "bg-sky",
    title: "Pass data down",
    description:
      "Props are inputs you hand to a component as JSX attributes — like function arguments.",
  },
  {
    icon: "📖",
    tint: "bg-blush",
    title: "Read them",
    description:
      "The component receives a single props object holding everything you passed.",
  },
  {
    icon: "✂️",
    tint: "bg-mint",
    title: "Destructure",
    description:
      "Pull out just the fields you need right in the parameter list for cleaner code.",
  },
];

const LearnProps = () => {
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
          <span className="crayon rounded-full bg-blush px-3 py-1 text-ink-900">
            Props
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Passing <span className="marker">props</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          Props let a parent hand data to a child component. Here are the common
          ways to pass them — and how to read them cleanly with destructuring.
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

      {/* Example 1: Different ways to pass props */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="1"
          tint="bg-sun"
          title="Three ways to pass"
          subtitle="Literal values, variables, or spread an object."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          All three render the exact same card — pick whichever reads best. The
          spread <code className="font-bold text-brand-600">{"{...user}"}</code>{" "}
          copies every key of the object onto the component as props.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-sky">const</span> user = {"{ "}name:{" "}
              <span className="text-mint">"Ada"</span>, emoji:{" "}
              <span className="text-mint">"👋"</span> {"}"};{"\n\n"}
              <span className="text-ink-500">{"// 1) literal values"}</span>
              {"\n"}
              &lt;<span className="text-sun">GreetingCard</span> name=
              <span className="text-mint">"Grace"</span> emoji=
              <span className="text-mint">"💻"</span> /&gt;{"\n\n"}
              <span className="text-ink-500">{"// 2) from variables"}</span>
              {"\n"}
              &lt;<span className="text-sun">GreetingCard</span> name={"{"}
              user.name{"}"} emoji={"{"}user.emoji{"}"} /&gt;{"\n\n"}
              <span className="text-ink-500">{"// 3) spread the object"}</span>
              {"\n"}
              &lt;<span className="text-sun">GreetingCard</span>{" "}
              <span className="text-blush">{"{...user}"}</span> /&gt;
            </pre>
          </div>

          <div className="crayon space-y-4 rounded-3xl bg-white p-6">
            <span className="crayon inline-flex w-fit rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-ink-900">
              📨 same card, 3 ways
            </span>
            <LabeledDemo label="Literal values">
              <GreetingCard name="Grace" emoji="💻" />
            </LabeledDemo>
            <LabeledDemo label="From variables">
              <GreetingCard name={user.name} emoji={user.emoji} />
            </LabeledDemo>
            <LabeledDemo label="Spread {...user}">
              <GreetingCard {...user} />
            </LabeledDemo>
          </div>
        </div>
      </div>

      {/* Example 2: Destructuring props */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="2"
          tint="bg-sky"
          title="Destructuring props"
          subtitle="Grab the fields you need in the parameter list."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          Instead of reaching through{" "}
          <code className="font-bold text-brand-600">props.name</code> every
          time, destructure them right where the component is defined.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-ink-500">{"// ❌ reading from props"}</span>
              {"\n"}
              <span className="text-sky">function</span>{" "}
              <span className="text-sun">Profile</span>(props) {"{"}
              {"\n"}
              {"  "}
              <span className="text-sky">return</span> &lt;p&gt;{"{"}props.name
              {"}"}&lt;/p&gt;;{"\n"}
              {"}"}
              {"\n\n"}
              <span className="text-ink-500">{"// ✅ destructured"}</span>
              {"\n"}
              <span className="text-sky">function</span>{" "}
              <span className="text-sun">Profile</span>(
              <span className="text-blush">{"{ name, role }"}</span>) {"{"}
              {"\n"}
              {"  "}
              <span className="text-sky">return</span> &lt;p&gt;{"{"}name{"}"} —{" "}
              {"{"}role{"}"}&lt;/p&gt;;{"\n"}
              {"}"}
            </pre>
          </div>

          <div className="crayon space-y-4 rounded-3xl bg-white p-6">
            <span className="crayon inline-flex w-fit rounded-full bg-sky px-4 py-1.5 text-sm font-bold text-ink-900">
              ✂️ destructured props
            </span>
            <ProfileCard name="Ada Lovelace" role="First programmer" emoji="👩‍💻" />
            <ProfileCard name="Alan Turing" role="Code breaker" emoji="🧠" />
          </div>
        </div>
      </div>

      {/* Example 3: Children */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="3"
          tint="bg-mint"
          title="The children prop"
          subtitle="Whatever you put between the tags becomes a prop too."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          Anything nested inside a component arrives as the special{" "}
          <code className="font-bold text-brand-600">children</code> prop.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-sky">const</span>{" "}
              <span className="text-sun">Panel</span> = (
              <span className="text-blush">{"{ title, children }"}</span>) =&gt;
              {" ("}
              {"\n"}
              {"  "}&lt;<span className="text-sky">section</span>&gt;{"\n"}
              {"    "}&lt;h3&gt;{"{"}title{"}"}&lt;/h3&gt;{"\n"}
              {"    "}
              {"{"}children{"}"}
              {"\n"}
              {"  "}&lt;/<span className="text-sky">section</span>&gt;{"\n"}
              {");"}
              {"\n\n"}
              &lt;<span className="text-sun">Panel</span> title=
              <span className="text-mint">"Tip"</span>&gt;{"\n"}
              {"  "}Props can be whole chunks of JSX!{"\n"}
              &lt;/<span className="text-sun">Panel</span>&gt;
            </pre>
          </div>

          <div className="crayon space-y-4 rounded-3xl bg-white p-6">
            <span className="crayon inline-flex w-fit rounded-full bg-mint px-4 py-1.5 text-sm font-bold text-ink-900">
              🎁 children prop
            </span>
            <Panel title="Tip">Props can be whole chunks of content!</Panel>
            <Panel title="Reuse">
              The same Panel wraps any content you nest inside it.
            </Panel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnProps;
