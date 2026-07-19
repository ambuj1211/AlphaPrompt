import {
  PromptCard,
  PromptCardSkeleton,
} from "../../ui/PromptCard";
import { latestPrompts } from "./latestData";

export default function Latest({ loading = false }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="mb-14 flex items-center justify-between">

        <div>
          <h2 className="text-4xl font-bold text-white">
            ✨ Latest Prompts
          </h2>

          <p className="mt-3 text-slate-400">
            Freshly published prompts from our collection.
          </p>
        </div>

      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <PromptCardSkeleton key={index} />
            ))
          : latestPrompts.map((prompt) => (
              <PromptCard
                key={prompt.id}
                {...prompt}
              />
            ))}

      </div>

    </section>
  );
}
