import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calificaciones from '../Calificaciones';
import Login from '../Login';
import Reporte from '../Reporte';
import React, { Component } from 'react';

class Body extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className={'RegistroDigital'}>
						<Route exact path="/calificaciones" component={Calificaciones} />
				 		<Route exact path="/" component={Login} />

						<Route exact path="/reporte" component={Reporte} />
					</div>
				</Router>
			</div>
		);
	}
}

export default Body;
