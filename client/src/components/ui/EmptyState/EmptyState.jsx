const EmptyState = ({ title = "Nothing here yet", description }) => {
  return (
    <div className="rounded-2xl border border-dashed border-white/20 p-8 text-center">
      <h3 className="font-semibold text-white">{title}</h3>
      {description && <p className="mt-2 text-slate-300">{description}</p>}
    </div>
  );
};

export default EmptyState;
