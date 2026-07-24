import EffectExample from "../components/EffectExample";
import ApiExample from "../components/ApiExample";
import ExampleHeader from "../components/ExampleHeader";
import LessonTabs from "../components/LessonTabs";

const steps = [
  {
    icon: "🎬",
    tint: "bg-sky",
    title: "Runs after render",
    description:
      "useEffect runs your code after the component has painted to the screen.",
  },
  {
    icon: "🎯",
    tint: "bg-blush",
    title: "Watches deps",
    description:
      "The dependency array tells React exactly when to re-run the effect.",
  },
  {
    icon: "🧹",
    tint: "bg-mint",
    title: "Cleans up",
    description:
      "Return a function and React runs it before the next effect or on unmount.",
  },
];

const LearnUseEffect = () => {
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
          <span className="crayon rounded-full bg-sky px-3 py-1 text-ink-900">
            useEffect
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          Learn <span className="marker">useEffect</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          <code className="font-bold text-brand-600">useEffect</code> lets a
          component run side effects — timers, subscriptions, or syncing with the
          outside world — and clean them up afterwards.
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

      {/* Example 1: Ticking timer */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="1"
          tint="bg-sun"
          title="Ticking timer"
          subtitle="Set up on start, clean up on pause."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          The effect starts a <code className="font-bold text-brand-600">
            setInterval
          </code>{" "}
          when it runs and returns a cleanup that clears it — so pausing tears the
          timer down and starting builds a fresh one.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-sky">import</span> {"{ useState, useEffect }"}{" "}
              <span className="text-sky">from</span>{" "}
              <span className="text-mint">"react"</span>;{"\n\n"}
              <span className="text-sky">const</span> [seconds, setSeconds] ={" "}
              <span className="text-sun">useState</span>(
              <span className="text-blush">0</span>);{"\n\n"}
              <span className="text-sun">useEffect</span>(
              <span className="text-sky">() =&gt;</span> {"{"}
              {"\n"}
              {"  "}
              <span className="text-sky">const</span> id ={" "}
              <span className="text-sun">setInterval</span>(
              {"\n"}
              {"    "}
              <span className="text-sky">() =&gt;</span>{" "}
              <span className="text-sun">setSeconds</span>(
              <span className="text-sky">s =&gt;</span> s{" "}
              <span className="text-blush">+ 1</span>),{"\n"}
              {"    "}
              <span className="text-blush">1000</span>
              {"\n"}
              {"  "});{"\n"}
              {"  "}
              <span className="text-sky">return</span>{" "}
              <span className="text-sky">() =&gt;</span>{" "}
              <span className="text-sun">clearInterval</span>(id);{" "}
              <span className="text-ink-500">{"// cleanup"}</span>
              {"\n"}
              {"}"}, [running]);
            </pre>
          </div>

          <EffectExample />
        </div>
      </div>

      {/* Example 2: API call */}
      <div className="mx-auto mt-16 max-w-4xl">
        <ExampleHeader
          n="2"
          tint="bg-blush"
          title="API call"
          subtitle="Fetch data when the component mounts."
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
          Effects are where data fetching lives. We fetch on mount, track{" "}
          <code className="font-bold text-brand-600">loading</code> and{" "}
          <code className="font-bold text-brand-600">error</code> state, and use a
          cleanup flag so a late response can&apos;t overwrite fresh data.
        </p>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div className="crayon overflow-x-auto rounded-2xl bg-ink-900 p-6 font-mono text-sm leading-relaxed text-white">
            <pre className="whitespace-pre">
              <span className="text-sun">useEffect</span>(
              <span className="text-sky">() =&gt;</span> {"{"}
              {"\n"}
              {"  "}
              <span className="text-sky">let</span> ignore ={" "}
              <span className="text-blush">false</span>;{"\n\n"}
              {"  "}
              <span className="text-sun">fetch</span>(
              <span className="text-mint">"…/breeds/image/random"</span>){"\n"}
              {"    "}.
              <span className="text-sun">then</span>(
              <span className="text-sky">res =&gt;</span> res.
              <span className="text-sun">json</span>()){"\n"}
              {"    "}.
              <span className="text-sun">then</span>(
              <span className="text-sky">data =&gt;</span> {"{"}
              {"\n"}
              {"      "}
              <span className="text-sky">if</span> (
              <span className="text-blush">!</span>ignore){" "}
              <span className="text-sun">setUrl</span>(data.message);{"\n"}
              {"    "}
              {"}"});{"\n\n"}
              {"  "}
              <span className="text-sky">return</span>{" "}
              <span className="text-sky">() =&gt;</span> {"{"} ignore ={" "}
              <span className="text-blush">true</span>; {"}"};{" "}
              <span className="text-ink-500">{"// cleanup"}</span>
              {"\n"}
              {"}"}, [reload]);
            </pre>
          </div>

          <ApiExample />
        </div>
      </div>
    </section>
  );
};

export default LearnUseEffect;
