import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        React Reading List
      </a>
      <Link style = {{ color: "black", font: "arial", marginRight: "10px" }} to = "/Search">Search </Link>
      <Link style = {{ color: "black", font: "arial" }} to = "/Books">Books </Link>
    </nav>
  );
}

export default Nav;
