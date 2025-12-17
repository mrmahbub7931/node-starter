import { createBrowserRouter } from "react-router-dom";
import RootProvider from "./RootProvider";
import AdminLayout from "../components/admin/AdminLayout";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminRoute from "./AdminRoute";
import AuthRoute from "./AuthRoute";
import AdminLogin from "../pages/auth/AdminLogin";

const AppRouter = createBrowserRouter([
  {
    element: <RootProvider />,  
    children: [
      {
        path: "/login",
        element: (
          <AuthRoute>
            <AdminLogin />
          </AuthRoute>
        ),
      },
      {
        path: "/admin",
        element: (
          <AdminRoute>
            <AdminLayout />
          </AdminRoute>
        ),
        children: [
          { path: "dashboard", element: <AdminDashboard /> },
        ],
      },
    ],
  },
]);

export default AppRouter;