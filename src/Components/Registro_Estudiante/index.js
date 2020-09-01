import React from 'react';

import FormCurso from './FormCurso';
import ListEstudiantes from './ListEstudiantes';

const Registro = () => {

	const handleChange = (event) => {
		event.preventDefault();
		console.log(event)

	}
	return (
		<div className="container mt-3">
			<h1>Registro</h1>
			<hr style={{ border: '1px solid green' }} />
			<FormCurso handleChange={handleChange} />
			<hr style={{ border: '1px solid green' }} />
			<ListEstudiantes />
			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

export default Registro;
