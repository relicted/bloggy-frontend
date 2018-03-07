import modelReducer from '../../main/main';
import {combineReducers} from 'redux'

const MODEL = 'USERS';

export default combineReducers({
  data: modelReducer(MODEL)
})