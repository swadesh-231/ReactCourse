import { useState } from "react";
import { Link } from "react-router";

const LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const getWinner = (squares) => {
  for (const [a, b, c] of LINES) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { player: squares[a], line: [a, b, c] };
    }
  }
  return null;
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = getWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  const play = (i) => {
    if (squares[i] || winner) return;
    setSquares((prev) => {
      const next = prev.slice();
      next[i] = xIsNext ? "X" : "O";
      return next;
    });
    setXIsNext((prev) => !prev);
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const status = winner
    ? `${winner.player} wins!`
    : isDraw
      ? "It's a draw!"
      : `${xIsNext ? "X" : "O"}'s turn`;

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
          <span className="crayon rounded-full bg-sky px-3 py-1 text-ink-900">
            Tic-Tac-Toe
          </span>
        </nav>
        <h1 className="mt-6 text-4xl font-bold text-ink-900 sm:text-5xl">
          <span className="marker">Tic-Tac-Toe</span>
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-500">
          Two players, one board — a{" "}
          <code className="font-bold text-brand-600">useState</code> &amp;
          derived-state classic.
        </p>
      </div>

      {/* Game */}
      <div className="mx-auto mt-10 flex max-w-sm flex-col items-center gap-6">
        {/* Status */}
        <div
          className={`crayon rounded-full px-6 py-2 font-display text-lg font-bold text-ink-900 ${
            winner ? "bg-mint" : isDraw ? "bg-sun" : "bg-white"
          }`}
        >
          {status}
        </div>

        {/* Board */}
        <div className="crayon grid w-full grid-cols-3 gap-2 rounded-3xl bg-white p-3">
          {squares.map((value, i) => {
            const inWin = winner?.line.includes(i);
            return (
              <button
                key={i}
                onClick={() => play(i)}
                disabled={Boolean(value) || Boolean(winner)}
                aria-label={`Square ${i + 1}${value ? `, ${value}` : ""}`}
                className={`crayon flex aspect-square w-full items-center justify-center rounded-2xl font-display text-4xl font-bold transition-colors sm:text-5xl ${
                  inWin ? "bg-mint" : "bg-cream"
                } ${
                  value === "X"
                    ? "text-brand-600"
                    : value === "O"
                      ? "text-blush"
                      : "text-ink-900 hover:bg-sun/40"
                } ${!value && !winner ? "crayon-press" : ""}`}
              >
                {value}
              </button>
            );
          })}
        </div>

        {/* Reset */}
        <button
          onClick={reset}
          className="crayon crayon-press rounded-xl bg-brand-500 px-6 py-2.5 font-bold text-white"
        >
          ↻ New game
        </button>
      </div>
    </section>
  );
};

export default TicTacToe;
