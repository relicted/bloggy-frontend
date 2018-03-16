/* eslint-disable */

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {login} from "../../actions/user/auth"
import {Field, reduxForm} from 'redux-form';

import BackendErrors from '../../components/backendErrors';
import {renderInput} from "../../utils/formfields";

const validate = (values) => {
  const errors = {};
  const requiredFields = ['email', 'password'];

  requiredFields.map(key => {
    if (!values[key]) {
      errors[key] = 'Required'
    }

  });
  return errors
};

class Login extends Component {

  state = {
    error: null,
    success: null,
    warning: null,
  };


  submitForm = data => {
    const {dispatch, history} = this.props;
    return dispatch(login(data))
      .then(() => {
      history.push('/')
      })
      .catch(error => {
      this.setState({error: error.response.data})
      });
  };

    render() {
      const {handleSubmit, pristine, submitting} = this.props;
      return (
        <div className="ui three centered grid">
          <div className="row">
          <div className="column col-md-5">
            <div className={`ui segment form ${submitting ? 'loading':''}`}>
              <form onSubmit={handleSubmit(this.submitForm)}>
                <Field id="id_email" {...this.state} icon='user' component={renderInput} label="email" name='email' type="email" placeholder="email"/>
                <Field component={renderInput} label="password" name='password' placeholder='password' type="password"/>
                <button className='ui button fluid green' disabled={pristine || submitting} type='submit'>Login</button>
              </form>
              <div className="ui message">
                <p className=''>Create an account? <a href="/join">Here!</a></p>
              </div>
            </div>
            {this.state.error ? <BackendErrors {...this.state}/> : null}
          </div>
          </div>
        </div>
      )
    }
}

Login = reduxForm({
  form: 'LoginForm',
  validate
})(Login);

export default connect(state => ({
    activeUser: state.activeUser
}))(Login);
