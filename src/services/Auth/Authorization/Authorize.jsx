import AccessDenied from "pages/AccessDenied";
import React, { useContext, useState } from "react";
import { AuthorizationContext } from "services/Auth/Authorization/AuthorizationProvider";

function Authorize(props) {
  var [isAuthorized, setIsAuthorized] = useState();
  var authorizationContext = useContext(AuthorizationContext);

  if (props.permission) {
    authorizationContext.isAuthorized(props.permission).then((isAuthorized) => {
      setIsAuthorized(isAuthorized);
    });
  } else {
    setIsAuthorized(false);
  }

  if (isAuthorized) {
    return <>{props.children}</>;
  } else if (!isAuthorized) {
    return <AccessDenied />;
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}
export default Authorize;
