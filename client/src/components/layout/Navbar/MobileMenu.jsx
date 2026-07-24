import { Menu, X } from "lucide-react";

export default function MobileMenu({ isOpen, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="lg:hidden rounded-xl p-2 text-white hover:bg-white/10 transition"
      aria-label="Toggle navigation"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </button>
  );
}