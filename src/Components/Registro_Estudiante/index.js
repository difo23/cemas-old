import React from 'react';

import FormCurso from './FormCurso';
import ListEstudiantes from './ListEstudiantes';

const Registro = () => {
	return (
		<div className="container mt-3">
			<h1>Registro</h1>
			<hr style={{ border: '1px solid green' }} />
			<FormCurso />
			<hr style={{ border: '1px solid green' }} />
			<ListEstudiantes />
			<hr style={{ border: '1px solid green' }} />
		</div>
	);
};

export default Registro;
