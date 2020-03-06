import { BrowserRouter as Router, Route } from 'react-router-dom';
import Calificaciones from '../Calificaciones';
import Estudiantes from '../Estudiantes';
import Asignatura from '../Asignaturas';
import Cursos from '../Cursos';
import Centro from '../Centro';
import Maestro from '../Maestros';
import Reporte from '../Reporte';
import React, { Component } from 'react';

function Bienvenido(params) {
	return <h1>Bienvenido a CEMAS BD 2019</h1>;
}

class Body extends Component {
	render() {
		return (
			<div>
				<Router>
					<div className={'RegistroDigital'}>
						
						<Route exact path="/" component={Calificaciones} />
						

						<Route exact path="/reporte" component={Reporte} />

						
					</div>
				</Router>
			</div>
		);
	}
}

export default Body;
