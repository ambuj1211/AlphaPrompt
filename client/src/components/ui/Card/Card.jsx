import { motion } from "framer-motion";
import clsx from "clsx";

export default function Card({
  children,
  className,
  hover = true,
  padding = "md",
  ...props
}) {
  const paddings = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      whileHover={
        hover
          ? {
              y: -6,
              scale: 1.02,
            }
          : {}
      }
      transition={{
        duration: 0.25,
      }}
      className={clsx(
        "glass",
        paddings[padding],
        "rounded-2xl",
        "border",
        "border-white/10",
        "shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}