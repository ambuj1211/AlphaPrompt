const stats = [
  {
    value: "10K+",
    label: "Prompts",
  },
  {
    value: "5K+",
    label: "Creators",
  },
  {
    value: "100K+",
    label: "Likes",
  },
];

export default function HeroStats() {
  return (
    <div className="flex flex-wrap gap-10 pt-8">

      {stats.map((item) => (
        <div key={item.label}>

          <h2 className="text-3xl font-bold text-white">

            {item.value}

          </h2>

          <p className="text-slate-400">

            {item.label}

          </p>

        </div>
      ))}

    </div>
  );
}