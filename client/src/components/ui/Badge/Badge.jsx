const Badge = ({ children, className = "" }) => {
  return <span className={`rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-200 ${className}`}>{children}</span>;
};

export default Badge;
