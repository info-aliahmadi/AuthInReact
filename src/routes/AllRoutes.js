import Layout from "pages/Layout/Layout";
import * as React from "react";
import { Route } from "react-router-dom";
// import PrivateRoute from "utils/privateRoute";
import PrivateRoutes from "routes/privateRoutes";
import PublicRoutes from "routes/publicRoutes";
import Authenticate from "services/Auth/Authentication/Authenticate";
// import PrivateRoute from "utils/PrivateRoute";

const privateRoute = PrivateRoutes.map((route, index) => {
  return (
    route.element && (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={
          <Authenticate permission={route.permission}>
            {route.element}
          </Authenticate>
        }
      />
    )
  );
});
const publicRoute = PublicRoutes.map((route, index) => {
  return (
    route.element && (
      <Route
        key={index}
        path={route.path}
        exact={route.exact}
        name={route.name}
        element={route.element}
      />
    )
  );
});

export const AllRoutes = (
  <Route path="/" element={<Layout />}>
    {privateRoute}
    {publicRoute}
  </Route>
);
