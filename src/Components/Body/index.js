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
						<Route exact path="/centros" component={Centro} />
						<Route exact path="/" component={Bienvenido} />
						<Route exact path="/calificaciones" component={Calificaciones} />
						<Route exact path="/estudiantes" component={Estudiantes} />

						<Route exact path="/reporte" component={Reporte} />

						<Route exact path="/cursos" component={Cursos} />
						<Route exact path="/asignaturas" component={Asignatura} />
						<Route exact path="/maestro" component={Maestro} />
					</div>
				</Router>
			</div>
		);
	}
}

export default Body;
