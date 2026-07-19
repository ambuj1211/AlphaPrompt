import Home from "./pages/Home/Home";
import AuthModal from "./components/auth/AuthModal";
import { useModal } from "./context/ModalContext";

function App() {
  const {
    isOpen,
    mode,
    setMode,
    closeAuthModal,
  } = useModal();

  return (
    <>
      <Home />

      <AuthModal
        isOpen={isOpen}
        mode={mode}
        setMode={setMode}
        onClose={closeAuthModal}
      />
    </>
  );
}

export default App;