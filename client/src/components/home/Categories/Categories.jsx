const categories = [
  "Realistic",
  "Anime",
  "Ghibli",
  "Wedding",
  "Portrait",
  "Fantasy",
  "Nature",
  "Architecture",
  "Disney",
  "Pixar",
];

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>

      <div className="flex flex-wrap gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className="px-5 py-2 rounded-full bg-blue-100 hover:bg-blue-600 hover:text-white transition"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}