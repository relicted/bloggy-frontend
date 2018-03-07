import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getDetail } from '../../actions/posts'


class PostDetail extends Component {  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getDetail(this.props.match.params.postId))
  }

  render() {

    return (
      <div>
      detail for {this.props.match.params.postId}
      </div>
    )
  }
}

export default connect(
  state => ({}),

  )(PostDetail);