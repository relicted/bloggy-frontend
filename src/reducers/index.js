import {combineReducers} from 'redux';
import posts from './models/posts/post';
import users from './models/accounts/user';
import { reducer as formReducer } from 'redux-form'


const appReducer = combineReducers({
  form: formReducer,
  posts,
  users,
});


const rootReducer = (state, action) => {

  return appReducer(state, action)
};

export default rootReducer