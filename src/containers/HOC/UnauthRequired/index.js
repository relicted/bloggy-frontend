import React, {Component} from 'react';
import {connect} from "react-redux";



export default function(InnerComponent) {

  class UnauthRequired extends Component {

    componentDidMount(){
      const {activeUser, history} = this.props;
      if (activeUser) history.push('/')
    }

    render() {
      const {activeUser} = this.props;
      if (activeUser) return null;
      return <InnerComponent {...this.props}/>
    }
  }



  return connect(
    state => ({
      activeUser: state.activeUser
    })
  )(UnauthRequired)
}



