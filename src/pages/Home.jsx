import { NavLink } from "react-router";
import Card from "../components/Card";
import heroImg from "../assets/hero.svg";

const features = [
  {
    icon: "⚛️",
    tint: "bg-sky",
    title: "Modern React",
    description:
      "Hooks, components, and patterns the way real teams build production apps.",
  },
  {
    icon: "🎨",
    tint: "bg-blush",
    title: "Beautiful UI",
    description:
      "Design with Tailwind to craft interfaces that feel playful and polished.",
  },
  {
    icon: "🚀",
    tint: "bg-mint",
    title: "Ship Faster",
    description:
      "Go from idea to deployed app with Vite, routing, and real momentum.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <span className="crayon inline-flex items-center gap-2 rounded-full bg-sun px-4 py-1.5 text-sm font-bold text-ink-900">
            ✏️ The complete React course
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight text-ink-900 sm:text-6xl">
            Learn React, <span className="marker">beautifully.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-500 lg:mx-0">
            Master modern React from the ground up — components, hooks, routing,
            and clean UI design — through hands-on, hand-drawn projects.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <NavLink
              to="/contact"
              className="crayon crayon-press inline-flex items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 py-3 font-bold text-white"
            >
              Get Started →
            </NavLink>
            <NavLink
              to="/about"
              className="crayon crayon-press inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-ink-900"
            >
              Learn More
            </NavLink>
          </div>
        </div>

        {/* Hero visual */}
        <div className="flex justify-center">
          <img
            src={heroImg}
            alt="Hand-drawn React atom sticker"
            className="w-56 rotate-3 sm:w-72 lg:w-80"
          />
        </div>
      </section>

      {/* Features */}
      <section className="pb-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-bold text-ink-900 sm:text-4xl">
            Everything you need to <span className="marker">level up</span>
          </h2>
          <p className="mt-4 text-lg text-ink-500">
            A focused curriculum that takes you from fundamentals to shipping
            real apps.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} {...feature} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
