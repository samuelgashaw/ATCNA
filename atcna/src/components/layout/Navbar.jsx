import React from 'react';
import logo from '../../logo.png';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
      // style={{ backgroundColor: '#415396' }}
    >
      <Link
        className="navbar-brand  text-capitalize ml-0  "
        to="/"
        style={{ color: '#FFC30C' }}
      >
        <img src={logo} alt="ACTNA" style={{ width: '100px' }} />
        association of tebassie community in north america
        <span style={{ color: '#4FB7F7' }}> (ATCNA)</span>
      </Link>

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
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <Link
              className="nav-link  text-uppercase ml-5"
              to="/"
              style={{ color: '#FFC30C' }}
            >
              home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-uppercase ml-5"
              to="/about"
              style={{ color: '#FFC30C' }}
            >
              about us
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  text-uppercase ml-5"
              to="/events"
              style={{ color: '#FFC30C' }}
            >
              events
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link  text-uppercase ml-5"
              to="/contact"
              style={{ color: '#FFC30C' }}
            >
              contact us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link  text-uppercase ml-5"
              to="/membersArea"
              style={{ color: '#FFC30C' }}
            >
              Member Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
