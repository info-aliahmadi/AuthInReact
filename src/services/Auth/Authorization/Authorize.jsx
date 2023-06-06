import AccessDenied from "pages/AccessDenied";
import React, { useContext, useEffect, useState } from "react";
import { AuthorizationContext } from "./AuthorizationProvider";
function Authorize(props) {
  var authorizationContext = new useContext(AuthorizationContext);
  var [isAuthorized, setIsAuthorized] = useState();

  useEffect(() => {
    const authorizitionCheck = async () => {
      if (props.permission) {
        authorizationContext
          .isAuthorized(props.permission)
          .then((isAuthorized) => {
            setIsAuthorized(isAuthorized);
          });
      }
    };
    authorizitionCheck();
  }, [props.permission]);

  if (isAuthorized === true) {
    return <>{props.children}</>;
  } else if (isAuthorized === false) {
    return props.accessDeniedElement ? (
      props.AccessDeniedElement
    ) : (
      <AccessDenied />
    );
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}
export default Authorize;
