import { Navigate, Outlet, useLocation } from "react-router-dom";
import { isAuthenticated } from "util/request";

function PrivateRoute() {
  const location = useLocation();
  const auth = isAuthenticated();
  return  auth ? <Outlet /> : <Navigate to="/admin/auth/login"  state={{ from: location}} />
}

export default PrivateRoute;
