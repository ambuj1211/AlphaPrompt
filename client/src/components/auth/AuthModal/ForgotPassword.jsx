import { useState } from "react";

import useAuth from "../../../hooks/useAuth";

const ForgotPassword = ({ setMode }) => {
    const { forgotPassword } = useAuth();

    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            await forgotPassword(email);

            setSuccess(
                "Password reset email sent successfully. Please check your inbox."
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5"
        >
            <div>
                <label className="mb-2 block text-sm text-gray-300">
                    Email Address
                </label>

                <input
                    type="email"
                    placeholder="Enter your registered email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition focus:border-violet-500"
                />
            </div>

            {success && (
                <div className="rounded-xl bg-green-500/10 p-3 text-sm text-green-400">
                    {success}
                </div>
            )}

            {error && (
                <div className="rounded-xl bg-red-500/10 p-3 text-sm text-red-400">
                    {error}
                </div>
            )}

            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <button
                type="button"
                onClick={() => setMode("login")}
                className="w-full text-sm text-violet-400 transition hover:text-violet-300"
            >
                ← Back to Login
            </button>
        </form>
    );
};

export default ForgotPassword;