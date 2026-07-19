import clsx from "clsx";

export default function Skeleton({
  className = "",
  rounded = "xl",
}) {
  const radius = {
    sm: "rounded",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <div
      className={clsx(
        "animate-pulse bg-white/10",
        radius[rounded],
        className
      )}
    />
  );
}