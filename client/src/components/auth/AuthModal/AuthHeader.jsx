import { X } from "lucide-react";

const TITLES = {
  login: {
    title: "Welcome Back",
    subtitle: "Sign in to continue exploring AI prompts.",
  },
  register: {
    title: "Create Account",
    subtitle: "Join AlphaPrompt and start sharing prompts.",
  },
  forgot: {
    title: "Forgot Password",
    subtitle: "We'll send you a password reset link.",
  },
};

const AuthHeader = ({ mode = "login", onClose }) => {
  const { title, subtitle } = TITLES[mode] || TITLES.login;

  return (
    <div className="relative border-b border-white/10 px-6 py-5">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 rounded-lg p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
        aria-label="Close"
      >
        <X size={20} />
      </button>

      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-400">
        {subtitle}
      </p>
    </div>
  );
};

export default AuthHeader;