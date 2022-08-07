import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAccessToken } from "../pages/login/authSlice";

function RouteGuard({ children, loginPagePath }) {
  const accessToken = useSelector(selectAccessToken);

  if (accessToken) {
    return children;
  } else {
    return <Navigate to={loginPagePath} replace />;
  }
}

export default RouteGuard;
