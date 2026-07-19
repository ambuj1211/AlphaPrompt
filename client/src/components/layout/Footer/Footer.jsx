import { Sparkles } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500">
            <Sparkles className="text-white" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white">
              AlphaPrompt
            </h2>

            <p className="text-slate-400">
              AI Prompt Marketplace
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}