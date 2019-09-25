import React from "react";

function Navv() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Deck
      </a>
      <a className="navbar-brand" href="/Login">
        Login
      </a>
      <a className="navbar-brand" href="/Card">
        Cards
      </a>
      <a className="navbar-brand" href="/Battle">
        Battle
      </a>
      {/* <a className="navbar-brand" href="/puma/src/pages/Register.js">
        Register
      </a> */}
      {/* <a className="navbar-brand" href="">
        Logo
      </a> */}
    </nav>
  );
}

export default Navv;
