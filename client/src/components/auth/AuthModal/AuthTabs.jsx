const AuthTabs = ({ mode, setMode }) => {
  return (
    <div className="flex px-6 pt-4">
      <button
        onClick={() => setMode("login")}
        className={`flex-1 rounded-l-xl py-3 text-sm font-semibold transition-all duration-300 ${
          mode === "login"
            ? "bg-violet-600 text-white shadow-lg"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
        }`}
      >
        Login
      </button>

      <button
        onClick={() => setMode("register")}
        className={`flex-1 rounded-r-xl py-3 text-sm font-semibold transition-all duration-300 ${
          mode === "register"
            ? "bg-violet-600 text-white shadow-lg"
            : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
        }`}
      >
        Register
      </button>
    </div>
  );
};

export default AuthTabs;