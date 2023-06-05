import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "services/Auth/Authentication/AuthenticationProvider";
import Authorize from "../Authorization/Authorize";

function Authenticate(props) {
  var authenticationContext = useContext(AuthenticationContext);

  if (authenticationContext.isAuthenticated()) {
    return <Authorize {...props}>{props.children}</Authorize>;
  } else {
    return <Navigate to="/login" />;
  }
}
export default Authenticate;
