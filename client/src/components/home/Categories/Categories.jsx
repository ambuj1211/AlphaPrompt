import CategoryCard from "./CategoryCard";
import { categories } from "./categoryData";

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-16 text-center">

        <h2 className="text-4xl font-bold text-white">
          Browse by Category
        </h2>

        <p className="mt-4 text-slate-400">
          Explore prompts organized by AI tool and use case.
        </p>

      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            {...category}
          />
        ))}

      </div>

    </section>
  );
}