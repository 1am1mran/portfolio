import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/navbar.css';

class Navigation extends Component {
  render() {
    return (

      <nav className="navbar navbar-inverse fixedTop right">
        <div className="container-fluid">
          <div className="navbar-header">
            <p className="navbar-brand" >Portfolio</p>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <NavLink to="/" activeClassName="is-active" exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="is-active">About</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
            </li>
            <li>
              <NavLink to="/blogs" activeClassName="is-active">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/resume" activeClassName="is-active">Resume</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
