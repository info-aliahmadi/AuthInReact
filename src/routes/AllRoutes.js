import Layout from "pages/Layout/Layout";
import * as React from "react";
import { Route } from "react-router-dom";
// import PrivateRoute from "utils/privateRoute";
import PrivateRoutes from "routes/privateRoutes";
import PublicRoutes from "routes/publicRoutes";
import PrivateRoute from "utils/PrivateRoute";


const privateRoute = PrivateRoutes.map((route, index) => {
  return route.element ? (
    <PrivateRoute
      key={index}
      path={route.path}
      exact={route.exact}
      name={route.name}
      element={route.element}
      permission={route.permission}
    />
  ) : null;
});
const publicRoute = PublicRoutes.map((route, index) => {
  return route.element ? (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      name={route.name}
      element={route.element}
    />
  ) : null;
});

export const AllRoutes = (
  <Route path="/" element={<Layout />}>
    {privateRoute}
    {publicRoute}
  </Route>
);
