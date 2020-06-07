import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import NotFoundpage from './components/pages/NotFoundPage';
import Details from './components/pages/Details';

import { Switch, Route } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/events" component={Events} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFoundpage} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;