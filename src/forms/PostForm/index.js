import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {createPost} from '../../actions/posts/create';
import BackendErrors from '../../components/backendErrors';
import {renderInput, renderText} from '../../utils/formfields';
import {login} from "../../actions/user/auth";



class PostForm extends Component {

  state = {};

  submit = data => {
    const {dispatch, history} = this.props;
    return dispatch(createPost(data))
      .then(() => {
      history.push('/')
      })
      .catch(error => {
      this.setState({error: error.response.data})
      });
  };

	render(){
    const {handleSubmit, submitting} = this.props;
 		return (
			<div className='container'>
        <form onSubmit={handleSubmit(this.submit)} className={`ui segment form ${submitting ? 'loading':''}`}>
          <Field component={renderInput} label="Title" name='title'/>
          <Field component={renderText} label="Body" name='body'/>
          <button type='submit' disabled={submitting}>Create Post</button>

        </form>
      </div>
		)
	}
}


PostForm = reduxForm({
  form: 'PostForm'
})(PostForm);

export default connect(state => ({

}))(PostForm)