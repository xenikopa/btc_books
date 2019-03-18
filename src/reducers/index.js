import { combineReducers } from 'redux';
import booksApp from './books';
import modal from './modal';
import notify from './notify';
import history  from "./history";
const rootReducer = combineReducers({
  booksApp, 
  modal, 
  notify,
  history
})

export default rootReducer
