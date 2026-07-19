import { useEffect, useState } from "react";
import {
    Mail,
    RefreshCw,
    LoaderCircle,
    CheckCircle2,
} from "lucide-react";

import useAuth from "../../../hooks/useAuth";

const VerificationPending = ({ setMode }) => {
    const {
        checkEmailVerification,
        resendVerificationEmail,
        logout,
    } = useAuth();

    const [checking, setChecking] = useState(true);
    const [verified, setVerified] = useState(false);

    const [resending, setResending] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const interval = setInterval(async () => {
            try {
                const isVerified =
                    await checkEmailVerification();

                if (isVerified) {
                    clearInterval(interval);

                    setVerified(true);

                    setTimeout(async () => {
                        await logout();

                        setMode("login");
                    }, 1500);
                }
            } catch (error) {
                console.error(error);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [checkEmailVerification, logout, setMode]);

    const handleResend = async () => {
        try {
            setResending(true);

            await resendVerificationEmail();

            setMessage(
                "Verification email sent again successfully. Please check your Inbox or Spam/Junk folder."
            );
        } catch (error) {
            setMessage(error.message);
        } finally {
            setResending(false);
        }
    };

    if (verified) {
        return (
            <div className="space-y-6 py-6 text-center">
                <CheckCircle2
                    size={64}
                    className="mx-auto text-green-500"
                />

                <h2 className="text-2xl font-bold text-white">
                    Email Verified
                </h2>

                <p className="text-gray-300">
                    Redirecting to Login...
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-center">
                <div className="rounded-full bg-violet-500/10 p-5">
                    <Mail
                        size={48}
                        className="text-violet-400"
                    />
                </div>
            </div>

            <div className="space-y-3 text-center">
                <h2 className="text-2xl font-bold text-white">
                    Verify your Email
                </h2>

                <p className="text-gray-300">
                    A verification email has been sent to
                    your registered email address.
                </p>
            </div>

            <div className="rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4">
                <ul className="space-y-2 text-sm text-yellow-200">
                    <li>✓ Check your Inbox.</li>
                    <li>✓ Check your Spam / Junk folder.</li>
                    <li>✓ Click the verification link.</li>
                    <li>
                        ✓ This page will automatically detect
                        when your email has been verified.
                    </li>
                </ul>
            </div>

            <div className="flex items-center justify-center gap-2 text-violet-400">
                <LoaderCircle
                    className="animate-spin"
                    size={18}
                />

                <span>Waiting for verification...</span>
            </div>

            <button
                type="button"
                disabled={resending}
                onClick={handleResend}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-violet-600 py-3 font-semibold text-white transition hover:bg-violet-700 disabled:opacity-50"
            >
                <RefreshCw
                    size={18}
                    className={
                        resending ? "animate-spin" : ""
                    }
                />

                {resending
                    ? "Sending..."
                    : "Resend Verification Email"}
            </button>

            {message && (
                <div className="rounded-xl bg-green-500/10 p-3 text-sm text-green-400">
                    {message}
                </div>
            )}
        </div>
    );
};

export default VerificationPending;