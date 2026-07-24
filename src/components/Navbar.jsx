import { NavLink, useLocation } from "react-router";

const base =
  "rounded-xl px-3.5 py-1.5 text-sm font-bold transition-colors";
const activeClass = "crayon bg-sun text-ink-900";
const idleClass = "text-ink-500 hover:text-ink-900";

const linkClass = ({ isActive }) =>
  `${base} ${isActive ? activeClass : idleClass}`;

const Navbar = () => {
  const { pathname } = useLocation();
  const isLearn = pathname.startsWith("/learn");

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-cream">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-6">
        <NavLink to="/" className="group flex items-center gap-2.5">
          <span className="crayon flex h-9 w-9 -rotate-6 items-center justify-center rounded-xl bg-brand-500 font-display text-lg font-bold text-white transition-transform group-hover:rotate-0">
            R
          </span>
          <span className="font-display text-xl font-bold text-ink-900">
            ReactCourse
          </span>
        </NavLink>

        <div className="flex items-center gap-1.5">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink
            to="/learn/props"
            className={`${base} ${isLearn ? activeClass : idleClass}`}
          >
            Learn
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
