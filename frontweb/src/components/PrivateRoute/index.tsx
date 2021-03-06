import { Navigate, Outlet, useLocation } from "react-router-dom";
import { Role } from "types/role";
import { hasAnyRoles, isAuthenticated } from "util/auth";

type Props = {
  path: string;
  roles?: Role[];
};

function PrivateRoute({ path, roles = [] }: Props) {
  const auth = isAuthenticated();
  const location = useLocation();

  return !auth ? (
    <Navigate to="/admin/auth/login" state={{ from: location }} />
  ) : !hasAnyRoles(roles) ? (
    <Navigate to="/admin/products" />
  ) : (
    <Outlet />
  );
}

export default PrivateRoute;
