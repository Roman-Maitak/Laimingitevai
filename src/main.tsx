import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import "./index.css";
import { ThemeProvider } from "./features/theme-toggle/model/ThemeProvider.tsx";
// import {} from "./i18n";
import i18n from "./i18next.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <I18NProvide i18n={i18n}> */}
      <App />
      {/* </I18NProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);
