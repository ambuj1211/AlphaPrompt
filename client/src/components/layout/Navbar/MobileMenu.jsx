import { Menu } from "lucide-react";

export default function MobileMenu() {
  return (
    <button className="lg:hidden rounded-xl p-2 text-white hover:bg-white/10 transition">
      <Menu size={24} />
    </button>
  );
}