import { useState } from "react";
import NavLogo from "./NavLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";
import SearchBar from "../../ui/SearchBar/SearchBar";
import Button from "../../ui/Button/Button";
import useAuth from "../../../hooks/useAuth";
import { useModal } from "../../../context/ModalContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const { user, isAuthenticated, logout } = useAuth();
  const { openAuthModal } = useModal();

  const links = ["Explore", "Trending", "Categories", "Community"];

  return (
    <header className="sticky top-0 z-50">
      <nav className="glass mx-auto mt-5 flex max-w-7xl items-center justify-between rounded-2xl px-6 py-4 relative">
        <NavLogo />

        {/* Desktop Navigation */}
        <NavLinks />

        {/* Desktop Actions */}
        <NavActions />

        {/* Mobile Toggle Button */}
        <MobileMenu isOpen={isOpen} onToggle={() => setIsOpen((prev) => !prev)} />

        {/* Mobile Dropdown Menu (Visible only when isOpen is true) */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-3 p-6 rounded-2xl flex flex-col gap-6 lg:hidden z-50 bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl">
            {/* Mobile Search */}
            <div className="w-full">
              <SearchBar
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onClear={() => setSearch("")}
              />
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <button
                  key={link}
                  className="text-left text-slate-300 hover:text-white transition py-1 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </button>
              ))}
            </div>

            <hr className="border-white/10" />

            {/* Mobile Auth Actions */}
            <div className="flex flex-col gap-3">
              {!isAuthenticated ? (
                <>
                  <Button
                    variant="ghost"
                    onClick={() => {
                      openAuthModal("login");
                      setIsOpen(false);
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => {
                      openAuthModal("register");
                      setIsOpen(false);
                    }}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3">
                    <img
                      src={
                        user?.photoURL ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          user?.displayName || "User"
                        )}`
                      }
                      alt={user?.displayName || "User"}
                      className="h-10 w-10 rounded-full border border-white/20"
                    />
                    <span className="text-sm text-white font-medium">
                      {user?.displayName}
                    </span>
                  </div>

                  <Button
                    variant="ghost"
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                  >
                    Logout
                  </Button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}