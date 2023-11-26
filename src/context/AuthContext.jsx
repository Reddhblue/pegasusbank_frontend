import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("at"));

  const updateToken = (token) => {
    setToken(token);
    token ? localStorage.setItem("at", token) : localStorage.removeItem("at");
  };

  return (
    <AuthContext.Provider value={{ token, updateToken }}>
      {children}
    </AuthContext.Provider>
  );
};
