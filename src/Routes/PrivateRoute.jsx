import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import ContentLoader from "react-content-loader";
const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  //   console.log("user from: privete", user);
  if (loader) {
    return (
      <ContentLoader
        viewBox="0 0 400 200"
        width={400}
        height={200}
        title="Loading news..."
      >
        <rect x="42.84" y="9.93" rx="5" ry="5" width="143.55" height="86.59" />
        <rect x="192.84" y="9.67" rx="0" ry="0" width="148.72" height="12.12" />
        <rect x="192.84" y="25.67" rx="0" ry="0" width="89" height="9" />

        <rect x="42.84" y="107" rx="5" ry="5" width="143.55" height="86.59" />
        <rect x="192.84" y="107" rx="0" ry="0" width="148.72" height="12.12" />
        <rect x="192.84" y="123" rx="0" ry="0" width="89" height="9" />
      </ContentLoader>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
};

export default PrivateRoute;
