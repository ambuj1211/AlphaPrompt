export default function FooterBottom() {
  return (
    <div className="border-t border-white/10 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} AlphaPrompt. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </div>
  );
}