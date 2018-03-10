import {combineReducers} from 'redux';
import posts from './models/posts/post';
import users from './models/accounts/user';
import activeUser from './activeUser';
import { reducer as formReducer } from 'redux-form'


const appReducer = combineReducers({
  form: formReducer,
  posts,
  users,




  activeUser
});


const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_SUCCESS') {
    state = undefined
  }
  return appReducer(state, action)
};

export default rootReducer