// import { Navigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const PrivateRoute = ({ children }) => {
//   const { user } = useSelector((state) => state.auth);

//   if (user) return children;
//   return <Navigate to='/login' />;
// };

// export default PrivateRoute;

import { Navigate, Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import Spinner from './Spinner'

const PrivateRoute = () => {
  const { loggedIn, checkingStatus } = useAuthStatus()

  if (checkingStatus) {
    return <Spinner />
  }
  return loggedIn ? <Outlet /> : <Navigate to={'/login'} />
}

export default PrivateRoute
