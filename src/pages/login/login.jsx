import React, { useContext } from "react";
import logo from "logo.svg";
import { AuthenticationContext } from "services/Auth/Authentication/AuthenticationProvider";
function Login() {
  var loginStatus = useContext(AuthenticationContext);

  function submit() {
    loginStatus.login("admin", "admin", true);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>Login</div>
          <input type="text" id="username"></input>
          <input type="text" id="password"></input>
          <input type="button" onClick={submit}></input>
        </header>
      </div>
    </>
  );
}
export default Login;
