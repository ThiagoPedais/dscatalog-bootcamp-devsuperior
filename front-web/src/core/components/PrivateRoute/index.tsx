/* eslint-disable no-restricted-globals */
import { Navigate, useLocation } from 'react-router-dom';
import { hasAnyRoles, isAuthenticated, Role } from '../../../util/requests';

// type Props = {
//   component: React.ComponentType;
//   // element: React.ElementType<any>;
//   path: string;
// };



// const PrivateRoute = ({ component, path }: Props) => {

//   return (
//     <Route
//       path={path}
//       element={() =>
//         isAuthenticated() ? component : <Navigate to="/admin/auth/login" />
//       }
//     />
//   );
// };


// export default PrivateRoute;


type ProtectedRouteProps = {
  outlet: JSX.Element;
  roles?: Role[];
};



// const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {


// <Route
//   path={path}
//   element={({ location }) =>
//     isAuthenticated() ? outlet : <Navigate to={{
//       pathname: "/admin/auth/login",
//       state: {from: location} 
//     }} />
//   }
// />



//   if (isAuthenticated()) {
//     return outlet;
//   } else {
//     return <Navigate to={{
//       pathname: "/admin/auth/login",    

//     }} replace={true} />;

//   }
// }

const ProtectedRoute = ({ outlet, roles = []}: ProtectedRouteProps) => {
  const auth = isAuthenticated();
  const location = useLocation();

  if (auth === undefined) {
    return null; // or loading spinner, etc...
  }

  return !auth
    ? (<Navigate to={"/admin/auth/login"} state={{ from: location }} replace />)
    : !hasAnyRoles(roles) ? (
      <Navigate to={"/admin/products"} replace />
    ) : (
      outlet
    );
};

// if (auth === undefined) {
//   return null; // or loading spinner, etc...
// }

// return !auth
//   ? outlet 
//   : <Navigate to={"/admin/auth/login"} state={{ from: location }} replace />;
// };


export default ProtectedRoute;