import React, { Component } from "react";
//import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

//import Home2 from './components/pages/Home2';
import About from "./components/pages/About";
import Events from "./components/pages/Events";
import Contact from "./components/pages/Contact";
import NotFoundpage from "./components/pages/NotFoundPage";
import Details from "./components/pages/Details";
import UnderConstruction from "./components/pages/UnderConstruction";
import Login from "./components/pages/Login";
import { Switch, Route } from "react-router-dom";
import Causes from "./components/pages/Causes";
class App extends Component {
  render() {
    return (
      <div id="navPage">
        <div>
          <Switch>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/" exact>
              <Navbar /> <Home />
            </Route>
            <Route path="/about" exact>
              <Navbar />
              <About />
            </Route>
            <Route path="/causes" exact>
              <Navbar />
              <Causes />
            </Route>
            <Route path="/contact" exact>
              <Navbar />
              <Contact />
            </Route>
            <Route path="/donate" exact>
              <Navbar />
              <UnderConstruction />
            </Route>
            <Route component={NotFoundpage} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
