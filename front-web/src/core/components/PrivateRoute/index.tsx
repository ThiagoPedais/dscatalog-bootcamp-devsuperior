import { Navigate, useLocation } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from '../../../util/auth';


type ProtectedRouteProps = {
  outlet: JSX.Element;
  roles?: Role[];
};

const ProtectedRoute = ({ outlet, roles = [] }: ProtectedRouteProps) => {
  const auth = isAuthenticated();
  const location = useLocation();

  if (auth === undefined) {
    return null; // or loading spinner, etc...
  }

  return !auth
    ? (
      <Navigate to={"/admin/auth/login"} state={{ from: location }} replace />
    ) :
    !hasAnyRoles(roles)
      ? (
        <Navigate to={"/admin/products"} replace />
      ) : (
        outlet
      );
};



export default ProtectedRoute;