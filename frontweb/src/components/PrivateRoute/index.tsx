import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "util/request";

function PrivateRoute() {
  const auth = isAuthenticated();
  return auth ? <Outlet /> : <Navigate to="/admin/auth/login" />;
}

export default PrivateRoute;
