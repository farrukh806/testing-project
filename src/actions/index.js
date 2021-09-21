import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';
import axios from 'axios';

export function saveComment(comment) {
	return { type: SAVE_COMMENT, payload: comment };
}

export function fetchComments() {
	const data = axios.get('https://jsonplaceholder.typicode.com/comments');

	return { type: FETCH_COMMENTS, payload: data };
}

export function changeAuth(isLoggedIn) {
	return { type: CHANGE_AUTH, payload: isLoggedIn };
}
