import PromptCard from "./PromptCard";
import { prompts } from "./promptData";

export default function Trending() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-14 flex items-end justify-between">

        <div>

          <h2 className="text-4xl font-bold text-white">
            🔥 Trending Prompts
          </h2>

          <p className="mt-3 text-slate-400">
            Discover the most popular prompts this week.
          </p>

        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {prompts.map((prompt) => (
          <PromptCard
            key={prompt.id}
            {...prompt}
          />
        ))}

      </div>

    </section>
  );
}