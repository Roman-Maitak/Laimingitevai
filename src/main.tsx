import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { ThemeProvider } from "./features/theme-toggle/model/ThemeProvider.tsx";
// import {} from "./i18n";
import "./app/i18next/i18next.ts";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

injectStyle();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <ToastContainer
        // position="bottom-left"
        // autoClose={5004}
        // limit={1}
        // hideProgressBar={false}
        // newestOnTop={false}
        // closeOnClick
        // rtl={false}
        // pauseOnFocusLoss
        // draggable={false}
        // pauseOnHover
        // theme={theme}
        // transition={Zoom}
        />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
