import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../../_components';
import Calificaciones from '../Calificaciones';
import Profesor from '../Profesor';
import {Navbar} from '../NavBar';

const Board = () => {
	return (
		<>
			<Navbar/>
			<div>
				<Switch>
					<PrivateRoute exact path="/calificaciones" component={Calificaciones} />
					<PrivateRoute exact path="/profesor" component={Profesor} />
				</Switch>
			</div>
		</>
	);
};

export default Board;
