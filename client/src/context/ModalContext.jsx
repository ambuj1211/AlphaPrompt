import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mode, setMode] = useState("login");

    const openAuthModal = (initialMode = "login") => {
        setMode(initialMode);
        setIsOpen(true);
    };

    const closeAuthModal = () => {
        setIsOpen(false);
    };

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                mode,
                setMode,
                openAuthModal,
                closeAuthModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);