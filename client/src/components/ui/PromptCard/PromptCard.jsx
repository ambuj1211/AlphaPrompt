import { motion } from "framer-motion";
import {
  Heart,
  Eye,
  Bookmark,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import Button from "../Button";
import Card from "../Card";

export default function PromptCard({
  title,
  description,
  image,
  category,
  author,
  likes = 0,
  views = 0,
  featured = false,
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="overflow-hidden p-0">

        {/* Image */}

        <div className="relative">

          <img
            src={image}
            alt={title}
            className="h-56 w-full object-cover"
          />

          {featured && (
            <span
              className="
                absolute
                left-4
                top-4
                flex
                items-center
                gap-1
                rounded-full
                bg-indigo-600
                px-3
                py-1
                text-xs
                font-semibold
                text-white
              "
            >
              <Sparkles size={14} />
              Featured
            </span>
          )}

        </div>

        {/* Body */}

        <div className="p-6">

          <span
            className="
              inline-flex
              rounded-full
              bg-indigo-500/10
              px-3
              py-1
              text-xs
              font-medium
              text-indigo-300
            "
          >
            {category}
          </span>

          <h3 className="mt-4 text-xl font-bold text-white line-clamp-2">
            {title}
          </h3>

          <p className="mt-3 text-sm leading-6 text-slate-400 line-clamp-3">
            {description}
          </p>

          <div className="mt-5 text-sm text-slate-500">
            by <span className="text-white">{author}</span>
          </div>

          {/* Stats */}

          <div className="mt-6 flex items-center justify-between">

            <div className="flex gap-5">

              <div className="flex items-center gap-2 text-slate-400">
                <Heart size={18} />
                {likes.toLocaleString()}
              </div>

              <div className="flex items-center gap-2 text-slate-400">
                <Eye size={18} />
                {views.toLocaleString()}
              </div>

            </div>

            <Bookmark
              size={20}
              className="cursor-pointer text-slate-400 transition hover:text-indigo-400"
            />

          </div>

          <Button
            className="mt-6 w-full"
            rightIcon={<ArrowRight size={18} />}
          >
            View Prompt
          </Button>

        </div>

      </Card>
    </motion.div>
  );
}