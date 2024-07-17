import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

const NavBar = ({ isAuth = true }) => {
  return (
    <nav>
      <Link to="/">
        <h1 className="logo">SoulFull</h1>
      </Link>
      {isAuth && <Search />}
      <div className="profile">
        {isAuth ? (
          <>
            <Link className="subscribe" to="/payment">
              Subscribe
            </Link>
            <Link to="/profile/1">
              <div className="avatar">h</div>
            </Link>
          </>
        ) : (
          <div className="profile signout">
            <Link to="/signin">sign in</Link>
            <Link to="/signup">sign up</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
