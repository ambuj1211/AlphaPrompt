import { useState } from "react";

import SearchBar from "../../ui/SearchBar/SearchBar";
import Button from "../../ui/Button/Button";

import useAuth from "../../../hooks/useAuth";
import { useModal } from "../../../context/ModalContext";

export default function NavActions() {
  const [search, setSearch] = useState("");

  const { user, isAuthenticated, logout } = useAuth();
  const { openAuthModal } = useModal();

  return (
    <div className="hidden lg:flex items-center gap-4">
      {/* Search */}
      <div className="w-72">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
        />
      </div>

      {/* Guest */}
      {!isAuthenticated ? (
        <>
          <Button
            variant="ghost"
            onClick={() => openAuthModal("login")}
          >
            Login
          </Button>

          <Button
            onClick={() => openAuthModal("register")}
          >
            Sign Up
          </Button>
        </>
      ) : (
        <>
          {/* User Avatar */}
          <button
            className="flex items-center gap-2"
          >
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

            <span className="text-sm text-white">
              {user?.displayName}
            </span>
          </button>

          <Button
            variant="ghost"
            onClick={logout}
          >
            Logout
          </Button>
        </>
      )}
    </div>
  );
}