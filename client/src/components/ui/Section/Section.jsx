import clsx from "clsx";

const spacings = {
  none: "py-0",
  sm: "py-12",
  md: "py-16",
  lg: "py-20",
  xl: "py-24",
};

export default function Section({
  children,
  className,
  spacing = "lg",
  ...props
}) {
  return (
    <section
      className={clsx(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10",
        spacings[spacing],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
