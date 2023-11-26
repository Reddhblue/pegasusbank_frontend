import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.scss";

import { ErrorContextProvider } from "./context/errors";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ErrorContextProvider>
  </React.StrictMode>
);
