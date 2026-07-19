import { ArrowRight } from "lucide-react";

import Button from "../../ui/Button";
import { PromptCard } from "../../ui/PromptCard";
import { Section, SectionHeader } from "../../ui/Section";
import { mostLikedPrompts } from "./mostLikedData";

export default function MostLiked() {
  return (
    <Section spacing="xl">
      <SectionHeader
        title="Most Liked Prompts"
        description="The community's favorite prompts, curated from the highest-rated creations."
        action={
          <Button variant="outline" rightIcon={<ArrowRight size={18} />}>
            View all
          </Button>
        }
      />

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {mostLikedPrompts.map((prompt) => (
          <PromptCard key={prompt.id} {...prompt} />
        ))}
      </div>
    </Section>
  );
}
