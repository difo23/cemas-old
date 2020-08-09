import { authenticationService } from '../../Login/_services';

export const getInitialValues = (params) => {
	let user = authenticationService.currentUserValue;
	if (typeof user === 'string') user = JSON.parse(user);

	const initialValues = {
		user
	};

	return initialValues;
};
