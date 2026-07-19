import Card from "../../ui/Card/Card";

export default function CategoryCard({
  icon: Icon,
  title,
  count,
}) {
  return (
    <Card className="cursor-pointer text-center transition-all duration-300 hover:border-indigo-500/40">
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10">
        <Icon className="text-indigo-400" size={28} />
      </div>

      <h3 className="text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-slate-400">
        {count.toLocaleString()} prompts
      </p>
    </Card>
  );
}