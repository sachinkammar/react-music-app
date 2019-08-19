import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
import Home from './components/Home'
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="sidebar-menu">
            <span>
              <svg
                height="50px"
                width="50px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 188.7 123"
                className="sidebar-menu-icon"
              >
                <path
                  d="M133.9,38.3H54.8c-3,0-5.4-2.4-5.4-5.4v0c0-3,2.4-5.4,5.4-5.4l79.1,0c3,0,5.4,2.4,5.4,5.4v0  C139.4,35.9,136.9,38.3,133.9,38.3z"
                />
                <path
                  d="M93.1,66.5H54.8c-3,0-5.4-2.4-5.4-5.4v0c0-3,2.4-5.4,5.4-5.4h38.3c3,0,5.4,2.4,5.4,5.4v0  C98.6,64,96.2,66.5,93.1,66.5z"
                />
                <path
                  d="M113.1,94.3H54.8c-3,0-5.4-2.4-5.4-5.4v0c0-3,2.4-5.4,5.4-5.4h58.2c3,0,5.4,2.4,5.4,5.4v0  C118.5,91.9,116.1,94.3,113.1,94.3z"
                />
              </svg>
            </span>
            <span>Home</span>
          </div>
        </div>
        <Route>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:section" component={Home} />
          </Switch>
        </Route>
        <Navbar />
      </Router>
    );
  }
}
export default App;
