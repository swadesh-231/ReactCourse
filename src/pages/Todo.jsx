import { useState } from "react";
import { Link } from "react-router";

const filters = ["All", "Active", "Done"];

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn useState", done: true },
    { id: 2, text: "Build a todo app", done: false },
    { id: 3, text: "Catch all 151 Pokémon", done: false },
  ]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("All");

  const addTodo = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos((prev) => [{ id: Date.now(), text: trimmed, done: false }, ...prev]);
    setText("");
  };

  const toggle = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );

  const remove = (id) => setTodos((prev) => prev.filter((t) => t.id !== id));

  const clearDone = () => setTodos((prev) => prev.filter((t) => !t.done));

  const visible = todos.filter((t) =>
    filter === "Active" ? !t.done : filter === "Done" ? t.done : true,
  );

  const remaining = todos.filter((t) => !t.done).length;

  const filterBtn = (value) =>
    `rounded-lg px-3 py-1.5 text-sm font-bold transition-colors ${
      filter === value ? "bg-brand-500 text-white" : "text-ink-500"
    }`;

  return (
    <section className="py-16 sm:py-20">
      {/* Back to projects */}
      <Link
        to="/projects"
        className="crayon crayon-press inline-flex items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 font-bold text-ink-900"
      >
        ← Back to Projects
      </Link>

      {/* Header */}
      <div className="mx-auto mt-8 max-w-2xl text-center">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center gap-2.5 text-sm font-bold"
        >
          <span className="text-ink-500">Projects</span>
          <span aria-hidden="true" className="text-brand-400">
            →
          </span>
          <span className="crayon rounded-full bg-mint px-3 py-1 text-ink-900">
            Todo
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          The <span className="marker">Todo App</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          Add, complete, and filter tasks — a{" "}
          <code className="font-bold text-brand-600">useState</code> &amp; lists
          classic.
        </p>
      </div>

      {/* App */}
      <div className="mx-auto mt-10 max-w-xl">
        {/* Add form */}
        <form onSubmit={addTodo} className="flex gap-3">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="✏️ What needs doing?"
            className="w-full flex-1 rounded-xl border-2 border-line bg-white px-4 py-2.5 font-medium text-ink-900 placeholder:text-ink-500/60 outline-none transition focus:-translate-y-0.5 focus:shadow-[3px_3px_0_0_#2c2a3a]"
          />
          <button
            type="submit"
            className="crayon crayon-press shrink-0 rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white"
          >
            Add
          </button>
        </form>

        {/* Controls */}
        <div className="mt-5 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="crayon flex shrink-0 rounded-xl bg-white p-1">
            {filters.map((value) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={filterBtn(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <p className="text-center text-sm font-bold text-ink-500 sm:text-right">
            {remaining} left
          </p>
        </div>

        {/* List */}
        <div className="mt-6 flex flex-col gap-3">
          {visible.length === 0 ? (
            <div className="py-12 text-center text-ink-500">
              <span className="text-3xl" aria-hidden="true">
                🎉
              </span>
              <p className="mt-2 text-sm font-bold">Nothing here — all clear!</p>
            </div>
          ) : (
            visible.map((todo) => (
              <div
                key={todo.id}
                className="crayon flex items-center gap-3 rounded-2xl bg-white p-4"
              >
                <button
                  onClick={() => toggle(todo.id)}
                  aria-label={todo.done ? "Mark as active" : "Mark as done"}
                  className={`crayon crayon-press flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                    todo.done ? "bg-mint text-ink-900" : "bg-white text-white"
                  }`}
                >
                  {todo.done ? "✓" : ""}
                </button>
                <p
                  className={`flex-1 font-medium ${
                    todo.done
                      ? "text-ink-500 line-through"
                      : "text-ink-900"
                  }`}
                >
                  {todo.text}
                </p>
                <button
                  onClick={() => remove(todo.id)}
                  aria-label="Delete task"
                  className="shrink-0 rounded-lg px-2 py-1 text-lg text-ink-500 transition-colors hover:text-brand-600"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        {todos.some((t) => t.done) && (
          <div className="mt-6 text-center">
            <button
              onClick={clearDone}
              className="text-sm font-bold text-ink-500 underline transition-colors hover:text-brand-600"
            >
              Clear completed
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Todo;
