import modelReducer from '../../main/main';
import {combineReducers} from 'redux'

const MODEL = 'POSTS';

export default combineReducers({
  data: modelReducer(MODEL)
})