import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import './navigation.css';


class Navigation extends Component {

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to={'/'}>tryReact</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to={'/posts'}>Posts</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={'/users'}>Users</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export class Error404 extends Component {
  render(){
    return (
      <div>404 okda?</div>
    )
  }
}

export default withRouter(connect(state => ({}))(Navigation));


