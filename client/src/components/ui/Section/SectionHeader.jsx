import clsx from "clsx";

export default function SectionHeader({
  title,
  description,
  action,
  className,
  titleClassName,
}) {
  return (
    <header
      className={clsx(
        "mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div>
        <h2
          className={clsx(
            "text-3xl font-bold tracking-tight text-white sm:text-4xl",
            titleClassName
          )}
        >
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-400">
            {description}
          </p>
        )}
      </div>

      {action && <div className="shrink-0">{action}</div>}
    </header>
  );
}
