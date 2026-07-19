import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";
import FloatingCards from "./FloatingCards";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-7xl items-center gap-16 px-6">

      <div className="flex-1 space-y-10">

        <HeroContent />

        <HeroActions />

        <HeroStats />

      </div>

      <div className="flex-1">

        <FloatingCards />

      </div>

    </section>
  );
}