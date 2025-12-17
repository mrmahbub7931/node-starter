import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const AuthRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? <Navigate to="/admin/dashboard" /> : children;
};

export default AuthRoute;