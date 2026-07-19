import SearchBar from "../../ui/SearchBar/SearchBar";
import Button from "../../ui/Button/Button";
import { useState } from "react";

export default function NavActions() {
  const [search, setSearch] = useState("");

  return (
    <div className="hidden lg:flex items-center gap-4">
      <div className="w-72">
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClear={() => setSearch("")}
        />
      </div>

      <Button variant="ghost">
        Login
      </Button>

      <Button>
        Sign Up
      </Button>
    </div>
  );
}