import { Sparkles } from "lucide-react";

export default function NavLogo() {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500">
        <Sparkles className="text-white" size={20} />
      </div>

      <div>
        <h1 className="text-xl font-bold text-white">
          AlphaPrompt
        </h1>

        <p className="text-xs text-slate-400">
          AI Prompt Marketplace
        </p>
      </div>
    </div>
  );
}