import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "services/Auth/Authentication/AuthenticationProvider";
import Authorize from "../Authorization/Authorize";

function Authenticate(props) {
  var authenticationContext = useContext(AuthenticationContext);
  var [isAuthenticated, setAuthenticated] = useState();

  useEffect(() => {
    const authenticationCheck = () => {
      authenticationContext.isAuthenticated().then((authenticate) => {
        setAuthenticated(authenticate);
      });
    };
    authenticationCheck();
  }, []);

  if (isAuthenticated === true) {
    return <Authorize {...props}>{props.children}</Authorize>;
  } else if (isAuthenticated === false) {
    return <Navigate to="/login" />;
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}
export default Authenticate;
