import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";

import { ErrorContextProvider } from "./context/errors";
import { AuthContextProvider } from "./context/AuthContext";
import { UserContextProvider } from "./context/UserDetailsContext";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Toaster richColors position="top-right" />
    <ErrorContextProvider>
      <AuthContextProvider>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </AuthContextProvider>
    </ErrorContextProvider>
  </React.StrictMode>
);
