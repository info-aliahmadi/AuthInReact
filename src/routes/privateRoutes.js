import React from "react"; //const DashboardDefault = React.lazy(() => import("Demo/Dashboard/Default"));

const AdminPage = React.lazy(() => import("pages/admin/admin"));

let PrivateRoutes = [
  {
    path: "/admin",
    exact: true,
    name: "His Person Detail Page",
    element: <AdminPage />,
    permission: "ADMIN",
  },
];

export default PrivateRoutes;
