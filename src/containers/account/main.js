import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import UserList from './list';

class User extends Component {

  render() {
    const {match} = this.props;
    return (
      <div>
        <Route exact path={`${match.url}`} component={UserList}/>
        {/*<Route exact path={`${match.url}/:userId`} component={UserDetail}/>*/}

      </div>
    )
  }
}

export default connect(state => ({}))(User);