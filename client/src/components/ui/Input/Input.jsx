import clsx from "clsx";

export default function Input({
  label,
  error,
  helperText,
  leftIcon,
  rightIcon,
  className,
  type = "text",
  ...props
}) {
  return (
    <div className="w-full">

      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-300">
          {label}
        </label>
      )}

      <div
        className={clsx(
          "glass flex items-center gap-3 rounded-2xl px-4 py-3 transition-all duration-300",
          error
            ? "border-red-500/60"
            : "focus-within:border-indigo-500/60",
          className
        )}
      >
        {leftIcon && (
          <span className="text-slate-400">
            {leftIcon}
          </span>
        )}

        <input
          type={type}
          className="
            w-full
            bg-transparent
            text-white
            placeholder:text-slate-500
            outline-none
          "
          {...props}
        />

        {rightIcon && (
          <span className="text-slate-400">
            {rightIcon}
          </span>
        )}
      </div>

      {helperText && !error && (
        <p className="mt-2 text-sm text-slate-500">
          {helperText}
        </p>
      )}

      {error && (
        <p className="mt-2 text-sm text-red-400">
          {error}
        </p>
      )}

    </div>
  );
}