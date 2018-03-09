import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getPost} from '../../actions/user/register';
import { Link } from 'react-router-dom';


class PostList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getPost())
  }

  renderPostList(postList) {
    return postList.map(post =>
    <div key={post.id} id={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </div>
    )
  }

  renderPostSection() {
    const {posts} = this.props;
    const postList = Object.values(posts);

    return (
      <div className="card post-section">
          <div className="card-block">
              {this.renderPostList(postList)}
          </div>
      </div>
    );
  }

  render() {
    return (
      <div className='PostList'>
        {this.renderPostSection()}
      </div>
    )
  }
}

export default connect(
  state => ({
    posts: state.posts.data
  }),

  )(PostList);