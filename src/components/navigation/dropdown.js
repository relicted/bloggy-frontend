import React from 'react';
import { Dropdown, Image } from 'semantic-ui-react';

import {connect} from 'react-redux';

const trigger = (
  <span>
    <Image avatar src={this.props.activeUser}/> {this.props.activeUser}
  </span>
);

const options = [
  { key: 'user', text: 'Account', icon: 'user' },
  { key: 'settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
];

const UserDropdown = () => (
  <Dropdown trigger={trigger} options={options} pointing='top right' icon={null} />
);

export default connect(state => ({
    activeUser: state.activeUser
}))(UserDropdown);
