import React from 'react';
import logo from '../../logo.png';
import EthioUsaFlag from '../../images/ethiousa.jpg';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      //  sticky-top
      style={{ backgroundColor: '#121214' }}
    >
      <NavLink
        exact
        className="navbar-brand text-capitalize ml-0 "
        to="/"
        style={{ color: '#FFC30C' }}
      >
        <img
          src={logo}
          alt="H4T"
          width="75"
          height="75"
          className="d-inline-block align-center"
        />

        <h2 className="display-5 d-inline-block align-middle">
          hope for tebassie
          <span style={{ color: '#4FB7F7' }}> (H4T)</span>
        </h2>
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
        <ul className="navbar-nav ml-auto list-unstyled">
          <li className="nav-item">
            <NavLink
              exact
              className="nav-link  text-capitalize ml-3 main-nav-active"
              activeClassName="active"
              to="/"
              style={{ color: '#FFC30C' }}
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
              style={{ color: '#FFC30C' }}
            >
              about us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link  text-capitalize ml-3"
              to="/events"
              style={{ color: '#FFC30C' }}
            >
              events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link  text-capitalize ml-3"
              to="/contact"
              style={{ color: '#FFC30C' }}
            >
              contact us
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link  text-capitalize ml-3 mr-3 "
              to="/membersArea"
              style={{ color: '#FFC30C' }}
            >
              Login
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              exact
              className="text-capitalize "
              to="/donate"
              style={{ outline: 'none', color: '#FFC30C' }}
            >
              <form class="form-inline my-2 my-lg-0">
                <button class="btn btn-outline-warning my-2 my-sm-0">
                  Donate
                </button>
              </form>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
