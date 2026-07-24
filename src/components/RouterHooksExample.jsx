import { useState } from "react";

const team = [
  { id: "ada", name: "Ada", role: "Engineer", emoji: "👩‍💻" },
  { id: "grace", name: "Grace", role: "Compiler wizard", emoji: "🧙‍♀️" },
  { id: "alan", name: "Alan", role: "Codebreaker", emoji: "🧠" },
];

const RouterHooksExample = () => {
  // `selectedId` stands in for the URL's :id segment. Setting it is like a
  // <Link to={`/member/${id}`}>; clearing it is like navigate(-1).
  const [selectedId, setSelectedId] = useState(null);
  const member = team.find((m) => m.id === selectedId);

  return (
    <div className="crayon flex flex-col gap-5 rounded-3xl bg-white p-6">
      <span className="crayon inline-flex w-fit rounded-full bg-blush px-4 py-1.5 text-sm font-bold text-ink-900">
        🪝 useParams + useNavigate
      </span>

      <div className="crayon flex min-h-52 items-center justify-center rounded-2xl bg-white p-6">
        <div className="w-full">
          {!member ? (
            // The "/" route: a list that links to each member.
            <div className="flex flex-col gap-2">
              <p className="text-sm font-bold text-ink-500">Pick a teammate →</p>
              {team.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedId(m.id)}
                  className="crayon crayon-press flex items-center gap-3 rounded-xl bg-cream px-4 py-2.5"
                >
                  <span className="text-xl" aria-hidden="true">
                    {m.emoji}
                  </span>
                  <span className="font-bold text-ink-900">{m.name}</span>
                  <span className="ml-auto text-brand-600">→</span>
                </button>
              ))}
            </div>
          ) : (
            // The "/member/:id" route: reads the id and can navigate back.
            <div className="text-center">
              <button
                onClick={() => setSelectedId(null)}
                className="crayon crayon-press mb-4 rounded-xl bg-white px-4 py-2 text-sm font-bold text-ink-900"
              >
                ← Back
              </button>
              <div className="text-4xl" aria-hidden="true">
                {member.emoji}
              </div>
              <p className="mt-2 font-display text-xl font-bold text-ink-900">
                {member.name}
              </p>
              <p className="text-sm text-ink-500">{member.role}</p>
              <p className="mt-3 font-mono text-xs font-bold text-brand-600">
                useParams().id === &quot;{member.id}&quot;
              </p>
            </div>
          )}
        </div>
      </div>

      <p className="text-center text-sm text-ink-500">
        Click a name to open{" "}
        <code className="font-bold text-brand-600">/member/:id</code> — the detail
        view reads the id, and “Back” is like{" "}
        <code className="font-bold text-brand-600">navigate(-1)</code>.
      </p>
    </div>
  );
};

export default RouterHooksExample;
