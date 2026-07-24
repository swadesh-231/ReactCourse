const Footer = () => {
  return (
    <footer className="mt-24 border-t-2 border-line bg-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-5 py-8 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="crayon flex h-7 w-7 -rotate-6 items-center justify-center rounded-lg bg-brand-500 font-display text-sm font-bold text-white">
            R
          </span>
          <span className="font-display text-base font-bold text-ink-900">
            ReactCourse
          </span>
        </div>
        <p className="text-sm text-ink-500">
          Made with crayons & code · © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
