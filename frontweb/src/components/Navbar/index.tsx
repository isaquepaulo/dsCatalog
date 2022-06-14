import "./styles.css";
import "bootstrap/js/src/collapse.js";
import { Link, NavLink } from "react-router-dom";
import {
  getTokenData,
  isAuthenticated,
  removeAuthData,
  TokenData,
} from "util/request";
import React, { useEffect } from "react";
import { useState } from "react";
import history from "util/history";

type AuthData = {
  authenticated: boolean;
  tokenData?: TokenData;
};

const Navbar = () => {
  const [authData, setAuthData] = useState<AuthData>({ authenticated: false });
  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthData({
        authenticated: false,
      });
    }
  }, []);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthData({
      authenticated: false,
    });
    history.replace("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
        <div className="container-fluid">
          <Link to="/" className="nav-logo-text">
            <h4>DS Catalog</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#dscatalog-navbar"
            aria-controls="dscatalog-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="dscatalog-navbar">
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <NavLink
                  to="/"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className={(navData) => (navData.isActive ? "active" : "")}
                >
                  CÁTALOGO
                </NavLink>
              </li>
              <NavLink
                to="/admin"
                className={(navData) => (navData.isActive ? "active" : "")}
              >
                ADMIN
              </NavLink>
            </ul>
          </div>

          <div className="nav-login-logout">
            {authData.authenticated ? (
              <>
                <span className="nav-username">
                  {authData.tokenData?.user_name}
                </span>
                <a href="#logout" onClick={handleLogoutClick}>
                  Logout
                </a>
              </>
            ) : (
              <Link to="/admin/auth">Login</Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
