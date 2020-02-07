import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import './Navbar.css';

var prev = true;
class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      prevRoute:'',
      prev:true
    }
  }
  componentDidMount=()=>{
  }
  getRoute=()=>{
    prev=!prev
  }
  render() {
    return (
      <div>
        <div className="col-sm-12">
          <div className="row">
            <div className="app-navbar-bottom-fixed">
              <div className="app-navbar">
                <NavLink
                  activeClassName="selected-app-navbar-element"
                  to={{
                    pathname: '/home',
                    state: { prev },
                  }}
                  onClick={()=>this.getRoute()}
                  className="navbar-navlink"
                >
                  <div className="app-navbar-element">
                    <span>
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
                        className="feather feather-music"
                      >
                        <path d="M9 18V5l12-2v13" />
                        <circle cx={6} cy={18} r={3} />
                        <circle cx={18} cy={16} r={3} />
                      </svg>
                    </span>
                    <div>
                      <span>Home</span>
                    </div>
                  </div>
                </NavLink>
                <NavLink
                  activeClassName="selected-app-navbar-element"
                  to={{
                    pathname: '/favourite',
                    state: { prev},
                  }}
                  onClick={()=>this.getRoute()}
                  className="navbar-navlink"
                >
                  <div className="app-navbar-element">
                    <span>
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
                        className="feather feather-heart"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    </span>
                    <div>
                      <span>Favourite</span>
                    </div>
                  </div>
                </NavLink>
                {/* <NavLink activeClassName="selected-app-navbar-element" to="/player" className="navbar-navlink">
                  <div className="app-navbar-element">
                    <span>
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
                        className="feather feather-triangle"
                        style={{transform: 'rotate(90deg)'}}
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                      </svg>
                    </span>
                    <div>
                      <span>Player</span>
                    </div>
                  </div>
                </NavLink> */}
                <NavLink
                  activeClassName="selected-app-navbar-element"
                  to={{
                    pathname: '/playlists',
                    state: { prev},
                  }}
                  onClick={()=>this.getRoute()}
                  className="navbar-navlink"
                >
                  <div className="app-navbar-element">
                    <span>
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
                        className="feather feather-folder-plus"
                      >
                        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        <line x1={12} y1={11} x2={12} y2={17} />
                        <line x1={9} y1={14} x2={15} y2={14} />
                      </svg>
                    </span>
                    <div>
                      <span>Playlists</span>
                    </div>
                  </div>
                </NavLink>
                <NavLink
                  activeClassName="selected-app-navbar-element"
                  to={{
                    pathname: '/track-list',
                    state: { prev},
                  }}
                  onClick={()=>this.getRoute()}
                  className="navbar-navlink"
                >
                  <div className="app-navbar-element">
                    <span>
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
                        className="feather feather-settings"
                      >
                        <circle cx={12} cy={12} r={3} />
                        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                      </svg>
                    </span>
                    <div>
                      <span>Settings</span>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

