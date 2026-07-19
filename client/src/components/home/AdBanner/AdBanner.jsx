import { Sparkles, ArrowRight } from "lucide-react";
import Button from "../../ui/Button";

export default function AdBanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <div className="glass relative overflow-hidden rounded-3xl p-10 lg:p-16">

        {/* Decorative Blurs */}

        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative z-10 flex flex-col items-center text-center">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-indigo-300">

            <Sparkles size={18} />

            Discover Premium AI Prompts

          </div>

          <h2 className="max-w-3xl text-4xl font-bold text-white lg:text-5xl">

            Unlock High-Quality Prompts
            Built by Expert Creators

          </h2>

          <p className="mt-6 max-w-2xl text-lg text-slate-300">

            Browse thousands of curated prompts for ChatGPT,
            Gemini, Claude, Midjourney and more.

          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Button
              size="lg"
              rightIcon={<ArrowRight size={18} />}
            >
              Explore Now
            </Button>

            <Button
              size="lg"
              variant="outline"
            >
              Learn More
            </Button>

          </div>

        </div>

      </div>

    </section>
  );
}