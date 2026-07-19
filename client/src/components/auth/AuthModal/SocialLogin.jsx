import { FcGoogle } from "react-icons/fc";
import useAuth from "../../../hooks/useAuth";

const SocialLogin = ({ onSuccess }) => {
  const { loginWithGoogle } = useAuth();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();

      onSuccess?.();   // Close modal
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-6">
      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-white/10" />
        </div>

        <div className="relative flex justify-center">
          <span className="bg-[#1B1A3A] px-4 text-sm text-gray-400">
            OR
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:bg-white/10"
      >
        <FcGoogle size={22} />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;