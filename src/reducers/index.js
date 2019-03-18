import { combineReducers } from 'redux';
import booksApp from './books';
import modal from './modal';
import notify from './notify';
const rootReducer = combineReducers({
  booksApp, 
  modal, 
  notify
})

export default rootReducer
