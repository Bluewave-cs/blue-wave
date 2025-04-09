import { Children, createContext, useContext, useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastContext = createContext({
  showToast: (message: string, bg?: string) => {},
});

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: any;
}) => {
  const [toast, setToast] = useState({
    show: false,
    message: "",
    bg: "success",
  });

  const showToast = (message: string, bg: string = "success") => {
    setToast({ show: true, message, bg });
    setTimeout(() => setToast({ show: false, message: "", bg }), 3000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {/* Toast en un solo lugar */}
      <ToastContainer position="top-end" className="p-3">
        <Toast
          bg={toast.bg}
          show={toast.show}
          onClose={() => setToast({ ...toast, show: false })}
        >
          <Toast.Header>
            <strong className="me-auto">Notificación</strong>
          </Toast.Header>
          <Toast.Body>{toast.message}</Toast.Body>
        </Toast>
      </ToastContainer>
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
