import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="glass mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4">
        <NavLogo />

        <NavLinks />

        <NavActions />

        <MobileMenu />
      </nav>
    </header>
  );
}