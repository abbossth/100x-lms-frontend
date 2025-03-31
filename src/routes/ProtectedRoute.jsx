import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from 'react-router'; // ✅ fixed import

const ProtectedRoute = () => {
    const location = useLocation();
    const accessToken = useSelector((state) => state.auth.accessToken);

    return accessToken
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectedRoute;
