import { BehaviorSubject } from 'rxjs';

//import config from 'config';
import { handleResponse } from '../_helpers';

const currentUserSubject = new BehaviorSubject(localStorage.getItem('currentUser'));

const urlAPI =  `http://localhost:8626/authenticate`;

export const authenticationService = {
	login,
	logout,
	currentUser: currentUserSubject.asObservable(),
	get currentUserValue() {
		//let user = localStorage.getItem('currentUser');
		let user = currentUserSubject.value;
		return user;
	}
};

function login(username, password) {
	console.log(' Login datos enviados', username, password);
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, password })
	};

	return fetch(urlAPI, requestOptions).then(handleResponse).then((user) => {
		// store user details and jwt token in local storage to keep user logged in between page refreshes

		console.log('typeOf en el fetch', typeof user);
		localStorage.setItem('currentUser', JSON.stringify(user));
		currentUserSubject.next(user);

		return user;
	});
}

function logout() {
	// remove user from local storage to log user out
	localStorage.removeItem('currentUser');
	currentUserSubject.next(null);
}
