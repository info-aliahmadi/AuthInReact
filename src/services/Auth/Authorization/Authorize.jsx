import AccessDenied from "pages/AccessDenied";
import React, { useContext, useEffect, useState } from "react";
import { AuthorizationContext } from "./AuthorizationProvider";


function Authorize(props) {
  var [isAuthorizedResult, setIsAuthorizedResult] = useState();

  const { isAuthorized } = useContext(AuthorizationContext);

  useEffect(() => {
    const authorizitionCheck = async () => {
      if (props.permission) {
        isAuthorized(props.permission)
          .then((isAuthorized) => {
            setIsAuthorizedResult(isAuthorized);
          })
          .catch((error) => {
            setIsAuthorizedResult(false);
            console.log(error);
          });
      }
    };
    authorizitionCheck();
  }, [isAuthorized, props.permission]);

  if (isAuthorizedResult === true) {
    return <>{props.children}</>;
  } else if (isAuthorizedResult === false) {
    return props.accessDeniedElement ? props.AccessDeniedElement : <AccessDenied />;
  } else {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
}
export default Authorize;
