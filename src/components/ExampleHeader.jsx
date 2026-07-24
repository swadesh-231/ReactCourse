const ExampleHeader = ({ n, tint, title, subtitle }) => (
  <div className="flex items-center gap-4">
    <span
      className={`crayon flex h-11 w-11 shrink-0 -rotate-3 items-center justify-center rounded-xl font-display text-xl font-bold text-ink-900 ${tint}`}
    >
      {n}
    </span>
    <div>
      <h2 className="font-display text-2xl font-bold text-ink-900">{title}</h2>
      <p className="text-sm text-ink-500">{subtitle}</p>
    </div>
  </div>
);

export default ExampleHeader;
