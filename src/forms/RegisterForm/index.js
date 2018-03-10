import React, {Component} from 'react';
import {connect} from 'react-redux';
import {createUser} from "../../actions/user/auth"
import {Field, reduxForm} from 'redux-form';

import BackendErrors from '../../components/backendErrors';

const renderInput = ({ input, label, type, meta, icon, error }) => (
  <div className={`field ${meta.error  && meta.touched ? 'error':''}`}>
    {meta.touched && meta.error && <small>{meta.error}</small>}
    <div className={`ui left ${icon ? 'icon':''} input`}>
      {icon ? <i className={`${icon} icon`} /> : null}
      <input {...input} placeholder={label} type={type} />
    </div>
  </div>
);

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
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const {dispatch, history} = this.props;

     dispatch(createUser(data))
      .then(() => {
        history.push('/')
      })
      .catch(error => {
        this.setState({error: error.response.data})
      });

     return sleep(1000)
       .then()
  };


    render() {
      const {handleSubmit, pristine, submitting} = this.props;
      return (
        <div className="ui three column centered grid">
          <div className="column">
            <div className={`ui segment form ${submitting ? 'loading':''}`}>
              <form onSubmit={handleSubmit(this.submitForm)}>
                <Field id="id_email" {...this.state} icon='user' component={renderInput} label="email" name='email' type="email" placeholder="email"/>
                <Field component={renderInput} label="password" name='password' placeholder='password' type="password"/>
                <Field component={renderInput} label="first name" name='first_name' placeholder='first_name' type="text"/>
                <Field component={renderInput} label="last name" name='last_name' placeholder='last_name' type="text"/>
                <button className='ui button fluid pink' disabled={pristine || submitting} type='submit'>Submit</button>
              </form>

            </div>
            {this.state.error ? <BackendErrors {...this.state}/> : null}
            {/*<BackendErrors {...this.state} />*/}
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
