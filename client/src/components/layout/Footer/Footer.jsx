// import FooterCTA from "./FooterCTA";
import FooterColumns from "./FooterColumns";
import FooterBottom from "./FooterBottom";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <FooterCTA /> */}

        <FooterColumns />

        <FooterBottom />
      </div>
    </footer>
  );
}