import React, { Component } from 'react'
import { Button, Dropdown, Menu } from 'semantic-ui-react'
import {NavLink, Route} from 'react-router-dom'
import {connect} from "react-redux";
import { withRouter } from 'react-router';
import './navigation.css'



class Navigation extends Component {

  renderSearch () {
    const {loading} = this.props;

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
    // const activeUser = 'pa';
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
          <div>logout</div>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="ui small menu">
        <div className="container">
          <div className="left menu">
            <NavLink className="item" exact to='/'>
              Home
            </NavLink>
            <NavLink className="item" to='/messages'>
              Messages
            </NavLink>
          </div>

          <div className="right menu">
            {this.renderSearch()}
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

