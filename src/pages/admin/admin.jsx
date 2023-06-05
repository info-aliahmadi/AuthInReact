import React from "react";
import logo from "logo.svg";
import Authorize from "services/Auth/Authorization/Authorize";
function Admin() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Dashboard</h1>

          <Authorize permission="SuperAdmin">
            <div> Restricted element </div>
          </Authorize>
        </header>
      </div>
    </>
  );
}
export default Admin;
