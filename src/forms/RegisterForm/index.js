import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from "../../actions/user/register"
import {Field, reduxForm} from 'redux-form';
import {Redirect} from 'react-router-dom'

export const renderInput = ({input, label, id, type, meta: {touched, error}, disabled}) => (
    <div className="field">
        <label htmlFor={id}>{label}:</label>
        <input id={id} {...input} className="" disabled={disabled} type={type}/>
        {touched && error && <span className="">{error}</span>}
    </div>
);


class CreateUser extends Component {
  state = {
    error: null,
    success: null,
  };


  submitForm = data => {
      const {dispatch} = this.props;

      dispatch(createUser(data))
        .then(()=> {console.log('privetik')})

  };

    render() {
      const {handleSubmit} = this.props;
      const {redirect} = this.state;
      console.log(this.props);
      return (
        <div className='ui segment form'>
          <form onSubmit={handleSubmit(this.submitForm)} method='post'>
            <Field id="id_email" component={renderInput} label="email" name='email' type="email" placeholder="email"/>
            <Field component={renderInput} label="password" name='password' placeholder='password' type="password"/>
            <Field component ={renderInput} label="first name" name='first_name' placeholder='first_name' type="text"/>
            <Field component={renderInput} label="last name" name='last_name' placeholder='last_name' type="text"/>
            <button className='ui button pink ' type='submit'>Submit</button>
          </form>
        </div>
      )
  }
}

CreateUser = reduxForm({
    form: 'CreateUser'
})(CreateUser);

export default connect(state => ({
    activeUser: state.activeUser
}))(CreateUser);
