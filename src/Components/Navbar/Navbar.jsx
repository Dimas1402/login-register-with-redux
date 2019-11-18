import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/Navbar.scss";
import logoPP from "../../Asset/logoPP.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const signOut = () => {
    localStorage.removeItem("token");
  };
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <img className="img-pp" src={logoPP} alt="" />

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-list    "></i>
      </button>
      <div className="collapse navbar-collapse ml-3 mt-2" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink exact to="/home" activeClassName="active">
            <li className="nav-item ">
              <p style={{ cursor: "pointer" }} className="nav-link" href="#">
                Home
              </p>
            </li>
          </NavLink>
          <NavLink  to="/menu1" activeClassName="active">
          <li className="nav-item">
            <p style={{ cursor: "pointer" }} className="nav-link" href="#">
              Menu 1
            </p>
          </li>
          </NavLink>
          <NavLink  to="/menu2" activeClassName="active">
          <li className="nav-item">
            <p style={{ cursor: "pointer" }} className="nav-link" href="#">
              Menu 2
            </p>
          </li>
          </NavLink>
        </ul>
        <div className="ml-auto"></div>

        <p style={{ cursor: "pointer" }} className="nav-link" onClick={signOut}>
          <Link to="/">
            logOut <i className="fas fa-sign-out-alt"></i>
          </Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
