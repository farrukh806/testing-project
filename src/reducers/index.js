import { combineReducers } from 'redux';
import authReducer from './auth';
import commentReducer from './comments';

export default combineReducers({
	comments: commentReducer,
	auth: authReducer
});
