import React, {Component} from 'react';
import { connect } from 'react-redux';

class PostItem extends Component {

	render(){
	  const {post} = this.props;
		return (
      <div className="item">
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
		)
	}
}

export default connect(state => ({

}))(PostItem)