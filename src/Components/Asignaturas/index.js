import React from 'react';
import FormAsignaturas from './FormAsignaturas';
import ListBoletines from './ListBoletines';

const Asignaturas = () => {
	return (
		<div className="container  mt-3">
			<h1 className="display-5">Asignaturas</h1>

			<hr style={{ border: '1px solid green' }} />

			<div className="asignaturas">
				<h3 className="diplay-4 mb-3"> Registro de Boletines:</h3>
				<FormAsignaturas />
			</div>

			<hr style={{ border: '.2px solid gray' }} />
			<div>
				<h3 className="diplay-4 mb-3"> Lista de Boletines a calificar:</h3>
				<ListBoletines />
			</div>
		</div>
	);
};

export default Asignaturas;
