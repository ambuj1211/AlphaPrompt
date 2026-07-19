const links = [
  "Explore",
  "Trending",
  "Categories",
  "Community",
];

export default function NavLinks() {
  return (
    <div className="hidden lg:flex items-center gap-8">
      {links.map((link) => (
        <button
          key={link}
          className="text-slate-300 transition hover:text-white"
        >
          {link}
        </button>
      ))}
    </div>
  );
}