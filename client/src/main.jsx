import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles/theme.css";
import "./styles/globals.css";
import "./styles/glass.css";
import "./styles/animations.css";
import "./index.css";

import App from "./App.jsx";

import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <ModalProvider>
                <App />
            </ModalProvider>
        </AuthProvider>
    </StrictMode>
);