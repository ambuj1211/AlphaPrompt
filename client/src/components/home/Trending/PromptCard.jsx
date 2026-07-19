import Card from "../../ui/Card/Card";
import Button from "../../ui/Button/Button";
import {
  Heart,
  Eye,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function PromptCard({
  image,
  title,
  category,
  author,
  likes,
  views,
}) {
  return (
    <Card className="overflow-hidden p-0">

      <img
        src={image}
        alt={title}
        className="h-52 w-full object-cover"
      />

      <div className="p-6">

        <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
          <Sparkles size={14} />
          {category}
        </span>

        <h3 className="mt-4 text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          by {author}
        </p>

        <div className="mt-5 flex items-center gap-5 text-slate-400">

          <span className="flex items-center gap-2">
            <Heart size={18} />
            {likes.toLocaleString()}
          </span>

          <span className="flex items-center gap-2">
            <Eye size={18} />
            {views.toLocaleString()}
          </span>

        </div>

        <Button
          className="mt-6 w-full"
          rightIcon={<ArrowRight size={18} />}
        >
          View Prompt
        </Button>

      </div>

    </Card>
  );
}