import React from "react";

const Login = React.lazy(() => import("pages/login/login"));
// import Login from 'pages/login/login';

const PublicRoutes = [
  { path: "login", exact: true, name: "Signup 1", element: <Login /> },
];

export default PublicRoutes;
