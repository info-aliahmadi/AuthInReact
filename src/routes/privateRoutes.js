import React from "react"; //const DashboardDefault = React.lazy(() => import("Demo/Dashboard/Default"));

const AdminPage = React.lazy(() => import("pages/admin/admin"));

let PrivateRoutes = [
  {
    path: "/admin",
    exact: true,
    name: "dashboard  page",
    element: <AdminPage />,
    permission: "AUTH_GET.PERMISSION.LIST",
  },
];

export default PrivateRoutes;
