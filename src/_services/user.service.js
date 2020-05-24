import { authHeader, handleResponse } from '../_helpers';

export const userService = {
	getAll
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(`http://localhost:8626/`, requestOptions).then(handleResponse);
}
