import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import useAuth from "../../../hooks/useAuth";
import SocialLogin from "./SocialLogin";

const RegisterForm = ({ setMode, onClose }) => {
    const { register } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            setLoading(true);

            await register(
                formData.name,
                formData.email,
                formData.password
            );

            onClose?.();
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="space-y-5"
            >
                {/* Name */}
                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Email
                    </label>

                    <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-violet-500"
                    />
                </div>

                {/* Password */}
                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Password
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white outline-none focus:border-violet-500"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Confirm Password */}
                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Confirm Password
                    </label>

                    <div className="relative">
                        <input
                            type={
                                showConfirmPassword
                                    ? "text"
                                    : "password"
                            }
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 pr-12 text-white outline-none focus:border-violet-500"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(
                                    !showConfirmPassword
                                )
                            }
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <div className="rounded-xl bg-red-500/10 p-3 text-sm text-red-400">
                        {error}
                    </div>
                )}

                {/* Register Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading
                        ? "Creating Account..."
                        : "Create Account"}
                </button>

                <p className="text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <button
                        type="button"
                        onClick={() => setMode("login")}
                        className="font-medium text-violet-400 hover:text-violet-300"
                    >
                        Sign In
                    </button>
                </p>
            </form>

            <SocialLogin />
        </>
    );
};

export default RegisterForm;