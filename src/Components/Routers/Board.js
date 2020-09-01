import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../Login/_components';
import Calificaciones from '../Calificaciones';
import Estudiantes from '../Registro_Estudiante/Estudiantes'

import { Navbar } from '../NavBar';
import Asignaturas from '../Asignaturas';
import Registro from '../Registro_Estudiante';

const Board = () => {
	return (
		<>
			<Navbar />
			<div>
				<Switch>
					<PrivateRoute exact path="/calificaciones" component={Calificaciones} />
					<PrivateRoute exact path="/registro" component={Registro} />
					<PrivateRoute exact path="/asignaturas" component={Asignaturas} />
					<PrivateRoute exact path="/estudiantes" component={Estudiantes} />

				</Switch>
			</div>
		</>
	);
};

export default Board;
