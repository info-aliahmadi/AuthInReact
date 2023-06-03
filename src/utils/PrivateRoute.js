import React from "react";
import { Route } from "react-router-dom";
import { AuthenticationConsumer } from "services/Auth/Authentication/AuthenticationProvider";
import { AuthorizationConsumer } from "services/Auth/Authorization/AuthorizationProvider";

function PrivateRoute({ component: Component, ...rest }) {
  debugger
  return (
    <>
      <AuthenticationConsumer>
        {({ isAuthenticated }) => {
          if (!!Component && isAuthenticated()) {
            if (rest.permission) {
              <AuthorizationConsumer>
                {({ isAuthorized }) => {
                  if (!isAuthorized(rest.permission)) {
                    return <div>شما دسترسی لازم را ندارید.</div>;
                  }
                }}
              </AuthorizationConsumer>;
            }
            return <Route {...rest} component={Component} />;
          } else {
            return <span>loading</span>;
          }
        }}
      </AuthenticationConsumer>
    </>
  );
}
export default PrivateRoute;
