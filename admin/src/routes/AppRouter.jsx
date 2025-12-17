import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/admin/AdminLayout";
import AdminDashboard from "../pages/dashboard/AdminDashboard";
import AdminRoute from "./AdminRoute";
import AuthRoute from "./AuthRoute";
import AdminLogin from "../pages/auth/AdminLogin";
import { AuthProvider } from "../context/AuthContext";

const AppRouter = createBrowserRouter([
    {
        element: <AuthProvider />,
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