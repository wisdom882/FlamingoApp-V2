import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useRestApi } from "../../context/restApiContext";

const GuardedRoute = ({ component: Component, ...rest }) => {
  let { user, setUser } = useRestApi();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!user) {
          let cookies = document.cookie; //"cookie1=userjson"
          console.log(cookies);
          const cookieUser= JSON.parse(cookies.split('=')[1])
          console.log(cookieUser)
          user = cookieUser
          setUser(cookieUser)
        }
        return user ? <Component {...props} /> : <Redirect to="/" />;
      }}
    />
  );
};

export default GuardedRoute;
