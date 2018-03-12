import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UnauthRequired from "../HOC/UnauthRequired";

class Landing extends Component {
	render(){
		console.log(this.props);
		return (
			<div>

					<Route path='/feed' render={() => <div> news feed</div>}/>
      </div>
		)
	}
}

export default connect(state => ({

}))(Landing)  