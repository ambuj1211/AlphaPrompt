import { Search, X } from "lucide-react";

export default function SearchBar({
  value = "",
  onChange,
  onClear,
  placeholder = "Search AI prompts...",
  className = "",
}) {
  return (
    <div
      className={`
        glass
        flex
        items-center
        gap-3
        rounded-2xl
        px-5
        py-3
        w-full
        ${className}
      `}
    >
      <Search
        size={20}
        className="text-slate-400"
      />

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          flex-1
          bg-transparent
          outline-none
          text-white
          placeholder:text-slate-400
        "
      />

      {value && (
        <button
          onClick={onClear}
          className="
            text-slate-400
            hover:text-white
            transition
          "
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}