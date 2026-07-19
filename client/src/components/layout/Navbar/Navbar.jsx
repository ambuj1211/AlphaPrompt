import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-bold text-blue-600">
          AlphaPrompt
        </h1>

        <div className="hidden md:flex w-96">
          <input
            className="w-full border rounded-l-lg px-4 py-2 outline-none"
            placeholder="Search prompts..."
          />

          <button className="bg-blue-600 text-white px-4 rounded-r-lg">
            <FaSearch />
          </button>
        </div>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg">
          Login
        </button>

      </div>
    </nav>
  );
}
