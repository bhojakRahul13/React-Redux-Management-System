import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ children, component: Component, ...rest }) {
  const user = useSelector((state) => state.login.loggedIn);

  return user ? (
    <Route {...rest} component={Component} />
  ) : (
    <Redirect to={"/"} />
  );
}

export default ProtectedRoute;