import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';

//import Home2 from './components/pages/Home2';
import About from './components/pages/About';
import Events from './components/pages/Events';
import Contact from './components/pages/Contact';
import NotFoundpage from './components/pages/NotFoundPage';
import Details from './components/pages/Details';
import UnderConstruction from './components/pages/UnderConstruction';
import { Switch, Route } from 'react-router-dom';
import Causes from './components/pages/Causes';
class App extends Component {
  render() {
    return (
      <div id="navPage">
        <Navbar />
        <div>
          <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/causes" component={Causes} />
            <Route exact path="/events" component={Events} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/details" component={Details} />
            <Route exact path="/membersArea" component={UnderConstruction} />
            <Route exact path="/donate" component={UnderConstruction} />
            <Route component={NotFoundpage} />
          </Switch>
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
