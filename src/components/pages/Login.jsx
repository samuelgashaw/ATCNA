import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import EthioUsaFlag from "../../images/ethiousa.jpg";
// import "../layout/Navbar.css";
import logo from "../../images/logo11.png";

import { NavLink } from "react-router-dom";
// import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     history.push("/");
    //   })
    //   .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    // some fancy firbase register

    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((auth) => {
    //     console.log(auth);
    //     if (auth) {
    //       history.push("/");
    //     }
    //   })
    //   .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <NavLink
        exact
        className="navbar-brand text-capitalize ml-0 "
        to="/"
        style={{ color: "#FFC30C" }}
      >
        <div className=" row">
          <div colspan="3" className=" center">
            <img className="login__logo" src={logo} alt="H4T" />{" "}
          </div>
          {/* 
          <div className="">
            <div className="display-5 header__logo__text">
              Hope for Tebassie
            </div>
            <div className="display-4 header__abbr">H4T</div>
            <div className="display-5 header__logo__text">ተስፋ ለጠባሴ</div>
          </div> */}
        </div>
      </NavLink>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in , you agree to Hope for Tebassie (H4T)'s Conditions of
          Use and Privacy Notice.
        </p>

        <button
          className="login__registerButton"
          type="submit"
          onClick={register}
        >
          Create your User Account
        </button>
      </div>
    </div>
  );
}

export default Login;
