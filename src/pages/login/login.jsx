import React, { useContext } from "react";
import logo from "logo.svg";
import { AuthenticationContext } from "services/Auth/Authentication/AuthenticationProvider";
import axios from "axios";
const apiRoot = "https://localhost:7134";
function Login() {
 debugger
  var loginStatus = useContext(AuthenticationContext).login("admin", "admin", true);

  function submit() {
    axios.get(apiRoot + "/Auth/GetPermissionList").then(function () {
      debugger;
    });
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
