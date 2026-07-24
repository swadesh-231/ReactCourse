const Card = ({ icon, title, description, tint = "bg-sun" }) => {
  return (
    <div className="crayon crayon-press rounded-2xl bg-white p-6">
      <div
        className={`crayon flex h-12 w-12 -rotate-3 items-center justify-center rounded-xl text-2xl ${tint}`}
      >
        <span aria-hidden="true">{icon}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-bold text-ink-900">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
    </div>
  );
};

export default Card;
