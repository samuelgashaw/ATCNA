import React from "react";
import logo from "../../images/logo11.png";
import EthioUsaFlag from "../../images/ethiousa.jpg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      //
      style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
      id="navPage"
    >
      <NavLink
        exact
        className="navbar-brand text-capitalize ml-0 "
        to="/"
        style={{ color: "#FFC30C" }}
      >
        <div className=" row">
          <div colspan="3" className=" center">
            <img className="header__logo" src={logo} alt="H4T" />{" "}
          </div>

          <div className="">
            <div className="display-5 header__logo__text">
              Hope for Tebassie
            </div>
            <div className="display-4 header__abbr">H4T</div>
            <div className="display-5 header__logo__text">ተስፋ ለጠባሴ</div>
          </div>
        </div>
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="header__nav">
          <ul className="navbar-nav ml-auto list-unstyled">
            <li className="nav-item">
              <NavLink
                exact
                className="nav-link  text-capitalize ml-3 main-nav-active"
                activeClassName="active"
                to="/"
                style={{ color: "#FFC30C" }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link text-capitalize ml-3"
                to="/about"
                style={{ color: "#FFC30C" }}
              >
                about
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link text-capitalize ml-3"
                to="/causes"
                style={{ color: "#FFC30C" }}
              >
                causes
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link  text-capitalize ml-3"
                to="/contact"
                style={{ color: "#FFC30C" }}
              >
                contact us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="active"
                className="nav-link  text-capitalize ml-3 mr-3 "
                to="/login"
                style={{ color: "#FFC30C" }}
              >
                Login
              </NavLink>
            </li>

            <li className="">
              <NavLink
                exact
                className="text-capitalize "
                to="/donate"
                style={{ outline: "none", color: "#FFC30C" }}
              >
                <form className="form-inline my-2 my-lg-0">
                  <button className="btn btn-outline-warning my-2 my-sm-0">
                    Donate
                  </button>
                </form>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
