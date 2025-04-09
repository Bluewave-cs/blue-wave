import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fontsource/montserrat/index.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/500.css";

import { BlueWave } from "./presentation/home/home";
import { ToastProvider } from "./presentation/home/components/toast_context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ToastProvider>
      <BlueWave />
    </ToastProvider>
  </StrictMode>
);
