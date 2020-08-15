import { authenticationService } from '../Login/_services';

export const getUser = (params) => {
	let user = authenticationService.currentUserValue;
	if (typeof user === 'string') user = JSON.parse(user);

	return user;
};
