import { authHeader, handleResponse } from '../_helpers';
const urlAPI = `http://localhost:8626/authenticate`;
export const userService = {
	getAll
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(urlAPI, requestOptions).then(handleResponse);
}
