import Card from "../../ui/Card/Card";

export default function FloatingCards() {
  return (
    <div className="hidden lg:flex items-center justify-center">

      <Card className="w-80">

        <img
          src="https://picsum.photos/500/300"
          alt="AI Prompt"
          className="rounded-xl"
        />

        <h3 className="mt-5 text-xl font-semibold text-white">

          Cinematic Portrait Prompt

        </h3>

        <p className="mt-2 text-slate-300">

          Generate ultra-realistic cinematic portraits with dramatic lighting.

        </p>

      </Card>

    </div>
  );
}