import { useState } from "react";
import { NavLink, useLocation } from "react-router";

const base = "rounded-xl px-3.5 py-1.5 text-sm font-bold transition-colors";
const activeClass = "crayon bg-sun text-ink-900";
const idleClass = "text-ink-500 hover:text-ink-900";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/learn/props", label: "Learn", match: "/learn" },
  { to: "/projects", label: "Projects", match: "/projects" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = (link) => {
    if (link.match) return pathname.startsWith(link.match);
    if (link.end) return pathname === link.to;
    return pathname === link.to || pathname.startsWith(`${link.to}/`);
  };

  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-line bg-cream">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-6">
        <NavLink to="/" onClick={close} className="group flex items-center gap-2.5">
          <span className="crayon flex h-9 w-9 -rotate-6 items-center justify-center rounded-xl bg-brand-500 font-display text-lg font-bold text-white transition-transform group-hover:rotate-0">
            R
          </span>
          <span className="font-display text-xl font-bold text-ink-900">
            ReactCourse
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden items-center gap-1.5 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={`${base} ${isActive(link) ? activeClass : idleClass}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="crayon crayon-press flex h-9 w-9 items-center justify-center rounded-xl bg-white text-lg font-bold text-ink-900 md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t-2 border-line bg-cream px-5 py-3 md:hidden">
          <div className="flex flex-col gap-1.5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={close}
                className={`block ${base} ${
                  isActive(link) ? activeClass : idleClass
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
