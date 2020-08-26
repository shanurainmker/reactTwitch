import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "../GoogleAuth";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="menu">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="menu">
          All stream
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
