import React from 'react';
import { Switch } from 'react-router-dom';
import { PrivateRoute } from '../../_components';
import Calificaciones from '../Calificaciones';
import {Navbar} from '../NavBar';

const Board = () => {
	return (
		<>
			<Navbar/>
			<div>
				<Switch>
					<PrivateRoute exact path="/calificaciones" component={Calificaciones} />
				</Switch>
			</div>
		</>
	);
};

export default Board;
