// src/components/auth/AuthModal/AuthModal.jsx

import { useEffect } from "react";

import AuthHeader from "./AuthHeader";
import AuthTabs from "./AuthTabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
import VerificationPending from "./VerificationPending";
import useAuth from "../../../hooks/useAuth";

const AuthModal = ({
    isOpen,
    mode = "login",
    setMode,
    onClose,
}) => {
    const { isAuthenticated } = useAuth();

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "auto";
        };
    }, [isOpen, onClose]);

    useEffect(() => {
        if (
            isAuthenticated &&
            isOpen &&
            mode !== "verify"
        ) {
            onClose();
        }
    }, [isAuthenticated, isOpen, mode, onClose]);

    if (!isOpen) return null;
    const renderContent = () => {
        switch (mode) {
            case "register":
                return (
                    <RegisterForm
                        setMode={setMode}
                        onClose={onClose}
                    />
                );
            case "verify":
                return (
                    <VerificationPending
                        setMode={setMode}
                    />
                );
            case "forgot":
                return (
                    <ForgotPassword
                        setMode={setMode}
                    />
                );

            case "login":
            default:
                return (
                    <LoginForm
                        setMode={setMode}
                        onClose={onClose}
                    />
                );
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm p-4"
            onClick={onClose}
        >
            <div className="flex min-h-full items-center justify-center">
                <div
                    className="my-8 w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#1B1A3A]/95 shadow-2xl max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                >
                    <AuthHeader
                        mode={mode}
                        onClose={onClose}
                    />

                    {mode !== "forgot" && (
                        <AuthTabs
                            mode={mode}
                            setMode={setMode}
                        />
                    )}

                    <div className="p-6">
                        {renderContent()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthModal;