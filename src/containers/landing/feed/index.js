import React, {Component} from 'react';
import { connect } from 'react-redux';
import SideNav from '../../../components/navigation/sideNav';
import {fetchPosts} from '../../../actions/posts/list';

import PostItem from '../../../components/PostItem';

const styles = {
  'minHeight': '400px'
};

class Feed extends Component {
  state = {
    loader: false
  };

  componentWillMount () {
    // this.setState({loader:true});
  }

  componentDidMount () {
    const {dispatch} = this.props;
    dispatch(fetchPosts())
  }

	render(){
    const {posts} = this.props;
		return (
			<div className='container'>
        <div className="row">
          <div className="col-md-3">
            <SideNav/>
          </div>
          <div className="col-md-9 loading">
            <div style={styles} className={`ui segment ${this.state.loader ? 'loading': ''}`}>
              <div className="ui divided items">
                {Object.values(posts.data).map((post, i) =>
                  <PostItem post={post} key={post.id}/>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default connect(state => ({
  posts: state.posts
}))(Feed)