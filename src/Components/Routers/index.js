import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Board from './Board';
import { PrivateRoute } from '../Login/_components';
import { history } from '../Login/_helpers';
import LoginPage from '../Login';
import RegisterPage from '../Register';

const RouterApp = () => {
	return (
		<Router history={history}>
			<div>
				<Switch>
					<Route exact path="/login" component={LoginPage} />
					<Route exact path="/register" component={RegisterPage} />
					<PrivateRoute path="/" component={Board} />
				</Switch>
			</div>
		</Router>
	);
};

export default RouterApp;
