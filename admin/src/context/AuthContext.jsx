import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken"));

  const login = (jwt) => {
    localStorage.setItem("adminToken", jwt);
    setToken(jwt);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setToken(null);
  };

  // ✅ Must return children
  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};