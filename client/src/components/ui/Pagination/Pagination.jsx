const Pagination = ({ page = 1, totalPages = 1, onPageChange }) => {
  return (
    <nav className="flex items-center justify-center gap-3" aria-label="Pagination">
      <button disabled={page <= 1} onClick={() => onPageChange?.(page - 1)}>Previous</button>
      <span className="text-slate-200">Page {page} of {totalPages}</span>
      <button disabled={page >= totalPages} onClick={() => onPageChange?.(page + 1)}>Next</button>
    </nav>
  );
};

export default Pagination;
