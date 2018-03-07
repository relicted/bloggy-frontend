import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import PostList from './list';
import PostDetail from './detail';

class Post extends Component {

  render() {
    const {match} = this.props;
    return (
      <div>
        <Route exact path={`${match.url}`} component={PostList}/>
        <Route exact path={`${match.url}/:postId`} component={PostDetail}/>

      </div>
    )
  }
}

export default connect(state => ({}))(Post);