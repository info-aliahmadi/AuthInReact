import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { AuthenticationProvider } from "services/Auth/Authentication/AuthenticationProvider";
// import PermissionProvider from "services/Auth/PermissionProvider/permissionProvider";
import { AllRoutes } from "routes/AllRoutes";
import { AuthorizationProvider } from "services/Auth/Authorization/AuthorizationProvider";

// var fetchPermission = (currentUser) => async (permission) => {
//   return currentUser?.permissions?.find((x) => x.key === permission);
// };

export default function App() {
  // var userData = useContext(AuthContext).getUser();
  // const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    // if (!currentUser) {
    //   userData.then((user) => {
    //     setCurrentUser(user);
    //   });
    // }
  });
  return (
    <>
      <AuthenticationProvider>
        {/* <AuthorizationProvider> */}
          <BrowserRouter>
            {/* <PermissionProvider fetchPermission={fetchPermission(currentUser)}> */}
            {/* {AllRoutes} */}
            <Routes>
              {AllRoutes}

              {/*<Route component={Page404}/>*/}
            </Routes>
            {/* </PermissionProvider> */}
          </BrowserRouter>
        {/* </AuthorizationProvider> */}
      </AuthenticationProvider>
    </>
  );
}
