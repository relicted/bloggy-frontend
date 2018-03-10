import React, {Component} from 'react';
import {connect} from 'react-redux';


class BackendErrors extends Component {




  render(){
    const {error} = this.props
    return (
      <div className={'ui message red'}>
        <ul className='ui list'>
          {Object.keys(error).map(key =>
          <li className='item' key={key}>{key}: {error[key]}</li>
          )}
        </ul>
        {/*{JSON.stringify(this.props.error)}*/}
      </div>
    )
  }


}






export default connect(state => ({
}))(BackendErrors);
