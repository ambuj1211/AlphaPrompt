import {
  Github,
  Instagram,
  Linkedin,
  Sparkles,
  Twitter,
} from "lucide-react";

import Section from "../../ui/Section";

const footerLinks = [
  {
    title: "Discover",
    links: ["Explore prompts", "Categories", "Trending", "Latest"],
  },
  {
    title: "Community",
    links: ["Create prompt", "Top creators", "Guidelines", "Feedback"],
  },
  {
    title: "Company",
    links: ["About us", "Contact", "Privacy policy", "Terms of service"],
  },
];

const socialLinks = [
  { label: "Follow AlphaPrompt on X", icon: Twitter, href: "#" },
  { label: "Follow AlphaPrompt on Instagram", icon: Instagram, href: "#" },
  { label: "Connect with AlphaPrompt on LinkedIn", icon: Linkedin, href: "#" },
  { label: "View AlphaPrompt on GitHub", icon: Github, href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-white/10 bg-slate-950/40">
      <Section spacing="lg">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <a href="#top" className="inline-flex items-center gap-3" aria-label="AlphaPrompt home">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/20">
                <Sparkles size={20} aria-hidden="true" />
              </span>
              <span className="text-xl font-bold text-white">AlphaPrompt</span>
            </a>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Discover, save and share exceptional AI prompts for your next creative breakthrough.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, icon: Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white"
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map(({ title, links }) => (
            <nav key={title} aria-label={title}>
              <h2 className="text-sm font-semibold text-white">{title}</h2>
              <ul className="mt-5 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition hover:text-indigo-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} AlphaPrompt. All rights reserved.</p>
          <p>Built for curious minds and better AI workflows.</p>
        </div>
      </Section>
    </footer>
  );
}
