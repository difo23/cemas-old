import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../Login/_components';
import Calificaciones from '../Calificaciones';
import Profesor from '../Profesor';
import {Navbar} from '../NavBar';
import Asignaturas from '../Asignaturas';
import Registro from '../Registro';

const Board = () => {
	return (
		<>
			<Navbar/>
			<div>
				<Switch>
					<PrivateRoute exact path="/calificaciones" component={Calificaciones} />
					<PrivateRoute exact path="/registro" component={Registro} />
					<PrivateRoute exact path="/asignaturas" component={Asignaturas} />
					<PrivateRoute exact path="/profesor" component={Profesor} />
				</Switch>
			</div>
		</>
	);
};

export default Board;
