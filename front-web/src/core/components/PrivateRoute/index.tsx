import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../../util/requests';

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
};

const ProtectedRoute = ({ outlet }: ProtectedRouteProps) => {
  if (isAuthenticated()) {
    return outlet;
  } else {
    return <Navigate to="/admin/auth/login" />;
  }
}

export default ProtectedRoute;