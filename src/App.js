import React, { Component } from "react";
import './App.css';
import { HashRouter as Router, Route,Switch} from "react-router-dom";
import { 
  CSSTransition, 
  TransitionGroup 
} from 'react-transition-group';
import Home from './components/Home';
import  Browse from './components/Browse';
import Navbar from './components/Navbar';
import Playlists from './components/Playlists';
import TrackList from './components/TrackList';
import Player from './components/Player';

const supportsHistory = 'pushState' in window.history;
class App extends Component {
  constructor() {
    super();
    this.state = {
      nightTheme: false
    }
  }

  toggleTheme=()=>{
    this.setState({nightTheme:!this.state.nightTheme},()=>{
      console.log("night theme",this.state.nightTheme)
    })
    if(!this.state.nightTheme){
      document.body.setAttribute('data-theme', 'dark')
    } else {
      document.body.removeAttribute('data-theme')
    }
  }
  
  authorizeUser=()=>{
    window.location.href='http://localhost:5000/api/spotify/authorize'
  }
  render() {
    const {nightTheme} = this.state
    return (
      <Router forceRefresh={!supportsHistory}>
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
            {/* <span>Home</span> */}
            <div className="sidebar-menu-right-items" id="themeSwitch">
              {nightTheme?<span  onClick={this.toggleTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-sun"
                >
                  <circle cx={12} cy={12} r={5} />
                  <line x1={12} y1={1} x2={12} y2={3} />
                  <line x1={12} y1={21} x2={12} y2={23} />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1={1} y1={12} x2={3} y2={12} />
                  <line x1={21} y1={12} x2={23} y2={12} />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              </span>:
              <span  onClick={this.toggleTheme}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-moon"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              </span>}
              <span style={{padding:'0 10px'}} onClick={this.authorizeUser}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx={12} cy={7} r={4} />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <Route render={({ location }) => {
          const { pathname, key } = location

          return (
            <TransitionGroup>
              <CSSTransition
                key={pathname}
                classNames="page"
                timeout={{
                  enter: 300,
                  exit: 300,
                }}
              >
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/track-list" component={TrackList} />
                  <Route exact path="/favourite" component={Browse} />
                  <Route exact path="/playlists" component={Playlists} />
                  <Route exact path="/player" component={Player} />
                  <Route exact path="/:section" component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )
        }}/>
        <Navbar />
      </Router>
    );
  }
}
export default App;
