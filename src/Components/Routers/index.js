import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Board from './Board';
import { PrivateRoute } from '../../_components';
import { history } from '../../_helpers';
import LoginPage from '../Login';

const RouterApp = () => {


	return (
		
			<Router history={history} >
				<div>
					<Switch>
						<Route exact path="/login" component={LoginPage} />
						<PrivateRoute path="/" component={Board} />
					</Switch>
				</div>
			</Router>
		
	);
};

export default RouterApp;
