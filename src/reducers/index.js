import { combineReducers } from 'redux';
import commentReducers from './comments';

export default combineReducers({ comments: commentReducers });
