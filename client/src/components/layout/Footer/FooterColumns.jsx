import logo from "../../../assets/logos/logo.svg";

const product = [
  "Explore",
  "Trending",
  "Categories",
  "Pricing",
];

const resources = [
  "About",
  "Blog",
  "Privacy",
  "Terms",
];

const community = [
  "GitHub",
  "Discord",
  "LinkedIn",
  "Twitter",
];

export default function FooterColumns() {
  return (
    <section className="grid gap-16 border-t border-white/10 py-16 md:grid-cols-2 lg:grid-cols-4">

      <div>

        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="AlphaPrompt"
            className="h-12 w-12"
          />

          <div>
            <h3 className="text-2xl font-bold text-white">
              AlphaPrompt
            </h3>

            <p className="text-sm text-slate-400">
              AI Prompt Marketplace
            </p>
          </div>

        </div>

        <p className="mt-6 leading-7 text-slate-400">
          Discover high-quality prompts for ChatGPT,
          Claude, Gemini, Midjourney and more.
        </p>

      </div>

      <div>
        <h4 className="mb-5 font-semibold text-white">
          Product
        </h4>

        <ul className="space-y-3">
          {product.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-slate-400 transition hover:text-indigo-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-5 font-semibold text-white">
          Resources
        </h4>

        <ul className="space-y-3">
          {resources.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-slate-400 transition hover:text-indigo-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="mb-5 font-semibold text-white">
          Community
        </h4>

        <ul className="space-y-3">
          {community.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-slate-400 transition hover:text-indigo-400"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>

    </section>
  );
}