import { authHeader, handleResponse } from '../_helpers';
import { URL } from '../../../api'


const urlAPI = `${URL}/`;
export const userService = {
	getAll
};

function getAll() {
	const requestOptions = { method: 'GET', headers: authHeader() };
	return fetch(urlAPI, requestOptions).then(handleResponse);
}
