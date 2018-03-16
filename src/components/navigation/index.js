import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from "react-redux";
import { withRouter } from 'react-router';

import {logout} from '../../actions/user/auth';


class Navigation extends Component {

  logOut(){
    console.log(this.props);
    const {dispatch, history} = this.props;
    dispatch(logout());
    history.push('/')
  }

  renderSearch () {
    return (
      <div className='item'>
        <div className="ui icon input">
          <input type="text" placeholder="Search..." />
          <i className="search icon"/>
        </div>
      </div>
    )
  }

  renderUserMenu() {
    const {activeUser} = this.props;

    if (!activeUser) {
      return (
        <div className="right menu">
          <NavLink className="item" exact to='/login'>
            Sign in
          </NavLink>
          <NavLink className="item" to='/join'>
            Sign up
          </NavLink>
        </div>
      )
    } else {
      return (
        <div className="right menu">
          <a href="" className="item" onClick={this.logOut.bind(this)}>Logout</a>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui small menu">
        <div className="container">
          <div className="left menu">
            {this.renderSearch()}
          </div>

          <div className="right menu">
            {this.renderUserMenu()}
          </div>

        </div>
      </div>
    )
  }
}


export default withRouter(connect(state => ({
  activeUser: state.activeUser
}))(Navigation));

