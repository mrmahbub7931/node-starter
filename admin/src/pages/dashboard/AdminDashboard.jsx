import {useAuth} from "../../context/AuthContext";

const AdminDashboard = () => {
    const {logout} = useAuth();

    return (
        <>
            <div>Admin Dashboard</div>
            <button onClick={logout}>Logout</button>
        </>
    );
};

export default AdminDashboard;