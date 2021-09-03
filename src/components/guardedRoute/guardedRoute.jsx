import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRestApi } from "../../context/restApiContext";

const GuardedRoute = ({ component: Component, ...rest }) => {
  const { user } = useRestApi();
  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default GuardedRoute;
