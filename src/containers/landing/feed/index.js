import React, {Component} from 'react';
import { connect } from 'react-redux';
import SideNav from '../../../components/navigation/sideNav';

class Feed extends Component {
	render(){
		return (
			<div className='container'>
        <div className="row">
          <div className="col-md-3">
            <SideNav/>
          </div>

          <div className="col-md-9">
            <div className="ui segment">
            </div>
          </div>
        </div>
      </div>
		)
	}
}

export default connect(state => ({

}))(Feed)