import { useAuthUser, useAuthHeader } from "react-auth-kit";
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const RequireTeacher = ({ children }) => {
  const user = useAuthUser()();
  const token = useAuthHeader()();

  if (token && user._id && user?.role === "teacher") {
    return children;
  }

  return <Navigate to="/login" replace />;
};

export default RequireTeacher;
