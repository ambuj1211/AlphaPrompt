import { Sparkles } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="space-y-8">

      <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">

        <Sparkles size={16} />

        The Ultimate AI Prompt Marketplace

      </span>

      <div className="space-y-5">

        <h1 className="text-5xl font-black leading-tight text-white lg:text-7xl">

          Discover the

          <span className="block bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

            Best AI Prompts

          </span>

        </h1>

        <p className="max-w-2xl text-lg leading-8 text-slate-300">

          Explore thousands of high-quality prompts for ChatGPT,
          Claude, Gemini, Midjourney, Stable Diffusion and more.

        </p>

      </div>

    </div>
  );
}