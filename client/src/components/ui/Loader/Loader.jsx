const Loader = () => {
  return <div className="loader" role="status" aria-label="Loading" />;
};

export default Loader;
import clsx from "clsx";

export default function Loader({
  size = "md",
  text,
  fullscreen = false,
  className,
}) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
    xl: "h-16 w-16 border-4",
  };

  const content = (
    <div
      className={clsx(
        "flex flex-col items-center justify-center gap-4",
        className
      )}
    >
      <div
        className={clsx(
          "animate-spin rounded-full border-indigo-500 border-t-transparent",
          sizes[size]
        )}
      />

      {text && (
        <p className="text-sm text-slate-400">
          {text}
        </p>
      )}
    </div>
  );

  if (fullscreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md">
        {content}
      </div>
    );
  }

  return content;
}