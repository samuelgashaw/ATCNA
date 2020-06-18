import React from 'react';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{ backgroundColor: '#121214' }}
    >
      <NavLink
        exact
        className="navbar-brand  text-capitalize ml-0 "
        to="/"
        style={{ color: '#FFC30C' }}
      >
        <img src={logo} alt="ACTNA" style={{ width: '100px' }} />
        association of tebassie community in north america
        <span style={{ color: '#4FB7F7' }}>(ATCNA)</span>
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
            {/* <NavLink
              exact
              className="nav-link  text-uppercase ml-5 main-nav-active"
              activeClassName="active"
              to="/"
              style={{ color: '#FFC30C' }}
            >
              Home
            </NavLink> */}
            <NavLink
              exact
              className="nav-link  text-uppercase ml-5 main-nav-active"
              activeClassName="active"
              to="/"
              style={{ color: '#FFC30C' }}
            >
              HomeHome
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="nav-link text-uppercase ml-5"
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
              className="nav-link  text-uppercase ml-5"
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
              className="nav-link  text-uppercase ml-5"
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
              className="nav-link  text-uppercase ml-5 disabled"
              to="/membersArea"
              style={{ color: '#FFC30C' }}
            >
              Member Login
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
