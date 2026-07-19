import { motion } from "framer-motion";
import clsx from "clsx";

const variants = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20",

  secondary:
    "bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-500/20",

  outline:
    "border border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-xl",

  ghost:
    "hover:bg-white/10 text-white",

  danger:
    "bg-red-600 hover:bg-red-500 text-white",
};

const sizes = {
  sm: "px-3 py-2 text-sm",

  md: "px-5 py-2.5 text-base",

  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  loading = false,
  disabled = false,
  className,
  ...props
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      disabled={disabled || loading}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-300",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {loading ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
          Loading...
        </>
      ) : (
        <>
          {leftIcon}
          {children}
          {rightIcon}
        </>
      )}
    </motion.button>
  );
}