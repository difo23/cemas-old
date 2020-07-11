/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import { Link } from 'react-router-dom';
import Calificaciones from '../Calificaciones';
import Estudiantes from '../Estudiantes';
import { LoginPage } from '../Login';
import Reporte from '../Reporte';
import React, { Component } from 'react';

import { history } from '../../_helpers';
import { authenticationService } from '../../_services';
import { PrivateRoute } from '../../_components';

class Body extends Component {
	constructor(props) {
		super(props);

		this.state = {
			currentUser: null
		};
	}

	componentDidMount() {
		authenticationService.currentUser.subscribe((x) => this.setState({ currentUser: x }));
	}

	logout() {
		authenticationService.logout();
		history.push('/login');
	}

	render() {
		const { currentUser } = this.state;
		return (
			<div>
				<Router history={history}>
					<div>
						<PrivateRoute exact path="/" component={Calificaciones} />
						<PrivateRoute exact path="/reporte" component={Reporte} />
						<PrivateRoute exact path="/estudiantes" component={Estudiantes} />
						<div className="jumbotron">
							<div className="container">
								<div className="row">
									<div className="col-md-6 offset-md-3">
										<Route path="/login" component={LoginPage} />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Router>
			</div>
		);
	}
}

export default Body;
