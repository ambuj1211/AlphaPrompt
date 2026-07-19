import { ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

export default function FooterCTA() {
  return (
    <section className="py-20">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-violet-600/10 to-cyan-500/20" />

        <div className="relative flex flex-col items-center px-8 py-20 text-center">

          <span className="mb-5 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-300">
            🚀 Join Thousands of AI Creators
          </span>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
            Ready to Build Better AI Prompts?
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-400">
            Discover premium prompts, organize your favorites,
            and boost your AI workflow with AlphaPrompt.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Button size="lg">
              Explore Prompts
            </Button>

            <Button variant="outline" size="lg">
              Learn More
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

          </div>

        </div>

      </div>
    </section>
  );
}