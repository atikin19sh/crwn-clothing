import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          Logo
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="signIn">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
