import logo from "../../../assets/logos/logo.svg";

export default function NavLogo() {
  return (
    <a href="/" className="flex items-center gap-3">
      <img
        src={logo}
        alt="AlphaPrompt"
        className="h-11 w-11 object-contain"
      />

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-white">
          AlphaPrompt
        </h1>

        <p className="text-sm text-slate-400">
          AI Prompt Marketplace
        </p>
      </div>
    </a>
  );
}