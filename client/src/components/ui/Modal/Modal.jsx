const Modal = ({ isOpen, onClose, children, className = "" }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 p-4" role="dialog" aria-modal="true">
      <div className={`glass w-full max-w-lg p-6 ${className}`}>
        <button className="float-right text-slate-300" onClick={onClose} aria-label="Close modal">×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
