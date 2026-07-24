import { NavLink } from "react-router";

const tabClass = ({ isActive }) =>
  `crayon crayon-press rounded-xl px-5 py-2 text-sm font-bold ${
    isActive ? "bg-brand-500 text-white" : "bg-white text-ink-900"
  }`;

const LessonTabs = () => (
  <div className="mt-8 flex flex-wrap justify-center gap-3">
    <NavLink to="/learn/props" className={tabClass}>
      Props
    </NavLink>
    <NavLink to="/learn/usestate" className={tabClass}>
      useState
    </NavLink>
    <NavLink to="/learn/useeffect" className={tabClass}>
      useEffect
    </NavLink>
    <NavLink to="/learn/useref" className={tabClass}>
      useRef
    </NavLink>
  </div>
);

export default LessonTabs;
