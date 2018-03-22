import React, {Component} from 'react';
import { connect } from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

const styles = {
  position: 'fixed',
};

class SideNav extends Component {


  fetchMessages() {
    // ws = new WebSocket('')
    return (
      <div className="ui teal label">

      </div>
    )
  }

	render(){
		return (
      <div className='ui fluid' style={styles}>
        <div className="ui vertical menu">
          <NavLink to='/feed' className="teal item">
            News Feed
          </NavLink>
          <NavLink to='/messages' className="teal item">
            Messages
            {this.fetchMessages()}
          </NavLink>
        </div>
      </div>
		)
	}
}

export default withRouter(connect(state => ({

}))(SideNav))