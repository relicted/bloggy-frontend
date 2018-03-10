import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../actions/user/auth';


class UserList extends Component {
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(getUsers())
  }


  renderUserList(){
    const {users} = this.props;
    console.log(Object.values(users));
    return Object.values(users).map(user =>
    <div key={user.id}>{user.email}</div>)
  }

  render() {

    return <div>{this.renderUserList()}</div>
  }
}

export default connect(
  state => ({
    users: state.users.data
  }),

  )(UserList);