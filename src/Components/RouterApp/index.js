import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { PrivateRoute } from '../../_components';
import { history } from '../../_helpers';
import { authenticationService } from '../../_services';

import LoginPage from '../Login';
import Calificaciones from '../Calificaciones';

// import Estudiantes from '../Estudiantes';
// import Reporte from '../Reporte';

const RouterApp = () => {
	const [ currentUser, setCurrentUser ] = useState({});

	useEffect(
		() => {
			authenticationService.currentUser.subscribe((user) => setCurrentUser(user));
			console.log(currentUser);
		},
		[ currentUser ]
	);

	return (
		<div>
			<Router history={history}>
				<Switch>
					<PrivateRoute exact path="/" component={Calificaciones} />
					<Route exact path="/login" component={LoginPage} />

					{/* Ruta por defecto es el login */}
					<Route component={LoginPage} />
				</Switch>
			</Router>
		</div>
	);
};

export default RouterApp;
