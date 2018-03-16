/* eslint-disable */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from "../../actions/user/auth"
import {Field, reduxForm} from 'redux-form';

import BackendErrors from '../../components/backendErrors';
import {renderInput} from "../../utils/formfields";


const validate = (values) => {
  const errors = {};
  const requiredFields = ['email', 'first_name', 'last_name', 'password'];

  requiredFields.map(key => {
    if (!values[key]) {
      errors[key] = 'Required'
    }
  });
  return errors
};

class CreateUser extends Component {

  state = {
    error: null,
    success: null,
    warning: null,
  };


  submitForm = data => {
    const {dispatch, history} = this.props;
    return dispatch(createUser(data))
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
        <div className="ui three centered middle grid">
          <div className="row">
          <div className="column col-md-5">
            <div className={`ui segment form ${submitting ? 'loading':''}`}>
              <form onSubmit={handleSubmit(this.submitForm)}>
                <Field id="id_email" {...this.state} icon='user' component={renderInput} label="email" name='email' type="email" placeholder="email"/>
                <Field component={renderInput} icon='lock' label="password" name='password' placeholder='password' type="password"/>
                <Field component={renderInput} label="first name" name='first_name' placeholder='first_name' type="text"/>
                <Field component={renderInput} label="last name" name='last_name' placeholder='last_name' type="text"/>
                <button className='ui button fluid green' disabled={pristine || submitting} type='submit'>Submit</button>
              </form>
              <div className="ui visible message">
                <p className=''>Already have an account? <a href="/login">Sign In!</a></p>
              </div>
            </div>
            {this.state.error ? <BackendErrors {...this.state}/> : null}
            {/*<BackendErrors {...this.state} />*/}
          </div>
          </div>
        </div>
      )
    }
}

CreateUser = reduxForm({
  form: 'CreateUser',
  validate
})(CreateUser);

export default connect(state => ({
    activeUser: state.activeUser
}))(CreateUser);
