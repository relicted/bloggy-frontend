import React, {Component} from 'react';
import {connect} from "react-redux";



export default function(InnerComponent) {

  class AuthRequired extends Component {



    render() {
      const {activeUser} = this.props;
      if (!activeUser) return null;
      return <InnerComponent {...this.props}/>
    }
  }



  return connect(
    state => ({
      activeUser: state.activeUser
    })
  )(AuthRequired)
}



