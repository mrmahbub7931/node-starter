import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const RootProvider = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default RootProvider;