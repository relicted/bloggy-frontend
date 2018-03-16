import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

class Landing extends Component {

	componentDidMount() {
		const {activeUser, history} = this.props;
		if (activeUser) {
			history.push('/feed')
		}
	}
	render(){
		return (
			<div>

      </div>
		)
	}
}

export default connect(state => ({
	activeUser: state.activeUser
}))(Landing)  